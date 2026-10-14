#!/usr/bin/env python3
"""Copy each app's current icon and App Store screenshots from its own repo
into this website, and write the responsive WebP sizes the pages load.

The icon comes from the app's asset catalog and the screenshots from its ASC
folder. An app that keeps no screenshots on disk has its live App Store set
downloaded with `asc fetch` into a temporary folder instead. The app repos
are never written to. See apps.yaml for the app -> repo mapping.

Usage:
    assets.py <app-key>            # update one app
    assets.py --all                # update every app in apps.yaml
    assets.py --dry-run <app-key>  # say what would change, write nothing
    assets.py --list               # list configured app keys

Screenshots are the primary device only (iPhone 6.7", or the desktop set for
a Mac app) and land in assets/images/appstore/<app-key>/ as
<site-locale>-NN_name.<ext> plus -640.webp and -1280.webp. A screenshot the
app no longer has is removed from the site. A locale with no screenshots
anywhere is left exactly as it is.

When the set of screenshots changed, the page still needs its <figure> list
and the SCREENSHOTS table in assets/js/site.js brought in line — the table
for each changed app is printed ready to paste.
"""
import argparse
import filecmp
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import yaml
from PIL import Image

from sync import APPS_YAML, find_local_screenshots

SITE = Path(__file__).resolve().parent.parent
SHOTS_ROOT = SITE / "assets" / "images" / "appstore"
WEBP_WIDTHS = (640, 1280)
WEBP_QUALITY = 82


def load_config():
    with open(APPS_YAML) as f:
        return yaml.safe_load(f)


def site_path(path):
    return path.relative_to(SITE).as_posix()


def copy_if_changed(src, dst, dry_run):
    """Returns "added", "updated" or None when dst already matches src."""
    if dst.exists() and filecmp.cmp(src, dst, shallow=False):
        return None
    status = "updated" if dst.exists() else "added"
    if not dry_run:
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dst)
    return status


def webp_path(image_path, width):
    return image_path.with_name(f"{image_path.stem}-{width}.webp")


def write_webps(image_path):
    with Image.open(image_path) as image:
        image = image.convert("RGB")
        for width in WEBP_WIDTHS:
            target_width = min(width, image.width)
            height = round(image.height * target_width / image.width)
            resized = image.resize((target_width, height), Image.LANCZOS)
            resized.save(webp_path(image_path, width), "WEBP", quality=WEBP_QUALITY, method=6)


def sync_icons(key, entry, dry_run):
    repo = Path(entry["repo"]).expanduser()
    changes = []
    for source_field, site_field in (("icon", "site_icon"), ("icon_dark", "site_icon_dark")):
        if source_field not in entry:
            continue
        src = repo / entry[source_field]
        dst = SITE / entry[site_field]
        if not src.exists():
            print(f"!! [{key}] {source_field} not found: {src}", file=sys.stderr)
            continue
        status = copy_if_changed(src, dst, dry_run)
        if status:
            changes.append(f"icon {status}: {site_path(dst)}")
    return changes


def fetch_live_screenshots(key, entry, config_path):
    """Downloads the live App Store screenshots into a temporary folder laid
    out like an ASC folder, and returns it (or None when the fetch fails)."""
    scratch = Path(tempfile.mkdtemp(prefix=f"asc-assets-{key}-"))
    result = subprocess.run(
        ["asc", "fetch", "--live", "--screenshots", "--config", str(config_path),
         "--platform", entry["platform"], "--output-dir", str(scratch)],
        capture_output=True, text=True,
    )
    if result.returncode != 0:
        print(result.stderr, file=sys.stderr)
        print(f"!! [{key}] could not fetch live screenshots", file=sys.stderr)
        shutil.rmtree(scratch, ignore_errors=True)
        return None
    return scratch


def sync_screenshots(key, entry, dry_run):
    """Returns (changes, {site_locale: [site paths]}) for the locales that
    have screenshots."""
    repo = Path(entry["repo"]).expanduser()
    config_dir = (repo / entry["config"]).parent
    out_dir = SHOTS_ROOT / key
    changes = []
    table = {}

    if not config_dir.exists():
        print(f"!! [{key}] ASC folder not found: {config_dir} — fix `config:` in apps.yaml", file=sys.stderr)
        return changes, table

    # Nothing on disk for any locale means the app does not keep its
    # screenshots in git, so App Store Connect is where they are.
    source_dir = config_dir
    scratch = None
    if not any(find_local_screenshots(config_dir, entry["platform"], locale) for locale in entry["locales"]):
        print("  no screenshots in the app repo — fetching the live App Store set")
        scratch = fetch_live_screenshots(key, entry, repo / entry["config"])
        if scratch is None:
            return changes, table
        source_dir = scratch

    for asc_locale, site_locale in entry["locales"].items():
        sources = find_local_screenshots(source_dir, entry["platform"], asc_locale)
        if not sources:
            continue

        wanted = set()
        table[site_locale] = []
        for src in sources:
            # Flat layout names are <locale>~<device>~NN_name.ext; the legacy
            # nested layout is already just NN_name.ext.
            name = src.name.split("~")[-1]
            dst = out_dir / f"{site_locale}-{name}"
            wanted.add(dst)
            wanted.update(webp_path(dst, width) for width in WEBP_WIDTHS)
            table[site_locale].append(site_path(dst))

            status = copy_if_changed(src, dst, dry_run)
            missing_webp = not all(webp_path(dst, width).exists() for width in WEBP_WIDTHS)
            if status:
                changes.append(f"screenshot {status}: {site_path(dst)}")
            elif missing_webp:
                changes.append(f"webp written: {site_path(dst)}")
            if (status or missing_webp) and not dry_run:
                write_webps(dst)

        if out_dir.exists():
            for stale in sorted(out_dir.glob(f"{site_locale}-[0-9]*")):
                if stale not in wanted:
                    changes.append(f"removed: {site_path(stale)}")
                    if not dry_run:
                        stale.unlink()

    if scratch is not None:
        shutil.rmtree(scratch, ignore_errors=True)
    return changes, table


def print_table(key, table):
    print(f"\n  SCREENSHOTS entry for {key} (assets/js/site.js):")
    for site_locale, paths in table.items():
        locale_key = site_locale if site_locale.isidentifier() else f'"{site_locale}"'
        print(f"      {locale_key}: {{")
        for index, path in enumerate(paths, start=1):
            comma = "," if index < len(paths) else ""
            print(f'        shot{index}: "{path}"{comma}')
        print("      },")


def sync_one(key, entry, dry_run):
    print(f"\n{key}  ({entry['page']})")
    changes = sync_icons(key, entry, dry_run)
    table = {}
    if "config" in entry:
        shot_changes, table = sync_screenshots(key, entry, dry_run)
        changes += shot_changes
        if not table:
            print("  no screenshots found — site screenshots left as they are")

    if not changes:
        print("  up to date")
        return
    for change in changes:
        print(f"  {change}")
    if any(not change.startswith("icon") for change in changes):
        print_table(key, table)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("app_key", nargs="?", help="App key from apps.yaml")
    parser.add_argument("--all", action="store_true", help="Update every app in apps.yaml")
    parser.add_argument("--list", action="store_true", help="List configured app keys and exit")
    parser.add_argument("--dry-run", action="store_true", help="Report changes without writing anything")
    args = parser.parse_args()

    config = load_config()
    apps = {**config["apps"], **config.get("icon_only", {})}

    if args.list:
        for key, entry in apps.items():
            print(f"{key:26s} {entry['page']}")
        return

    if args.dry_run:
        print("dry run — nothing is written")

    if args.all:
        for key, entry in apps.items():
            sync_one(key, entry, args.dry_run)
        return

    if not args.app_key:
        parser.print_help()
        sys.exit(1)
    if args.app_key not in apps:
        print(f"Unknown app '{args.app_key}'. Known: {', '.join(apps)}", file=sys.stderr)
        sys.exit(1)
    sync_one(args.app_key, apps[args.app_key], args.dry_run)


if __name__ == "__main__":
    main()
