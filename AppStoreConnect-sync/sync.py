#!/usr/bin/env python3
"""Fetch each app's currently-live App Store Connect metadata + screenshots
(via the `asc` CLI) and print a review report for the website's marketing
copy. Uses `asc fetch --output-dir` to write into a scratch temp directory —
the app's own repo is never touched. Read-only against the website repo too
— this never edits site.js/HTML itself. See apps.yaml for the app -> repo
mapping, and ~/.claude/plans/sunny-discovering-sketch.md for the full
pipeline design.

Usage:
    sync.py <app-key>          # fetch + report one app (live, via asc CLI)
    sync.py --all              # fetch + report every app in apps.yaml
    sync.py --list             # list configured app keys
    sync.py --local <app-key>  # read local metadata/screenshots directly
                                # from the app repo's AppStoreConnect/ folder
                                # instead — no network, no `asc` CLI call.
                                # Used by the app-release skill right after a
                                # release, when local content is already
                                # trusted (it's what was just submitted).

Each `--live` run prints the scratch directory it wrote to (metadata.asc +
screenshots/) — grab any screenshots you want from there while doing the
content review, then delete it yourself; nothing is cleaned up automatically
since the screenshots are still needed at that point. `--local` runs need no
cleanup — they only read files already committed in the app's own repo.
"""
import argparse
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
APPS_YAML = HERE / "apps.yaml"

FIELDS = ["name", "subtitle", "promotionalText", "description", "whatsNew"]


def load_apps():
    with open(APPS_YAML) as f:
        return yaml.safe_load(f)["apps"]


def run_asc(args, cwd=None):
    result = subprocess.run(["asc", *args], capture_output=True, text=True, cwd=cwd)
    return result


def parse_dsl_metadata(path):
    """Parses a 0.2.0 metadata.asc file into {locale: {key: value}}."""
    locales = {}
    current_locale = None
    current_key = None
    block_lines = None

    def flush_block():
        nonlocal current_key, block_lines
        if current_locale is not None and current_key is not None and block_lines is not None:
            locales[current_locale][current_key] = "\n".join(block_lines)
        current_key = None
        block_lines = None

    with open(path, encoding="utf-8") as f:
        for raw_line in f:
            line = raw_line.rstrip("\n")
            if block_lines is not None:
                if line.startswith("  "):
                    block_lines.append(line[2:])
                    continue
                flush_block()
            if not line.strip() or line.startswith("#") or line.startswith("%asc"):
                continue
            if line.startswith("@"):
                current_locale = line[1:].strip()
                locales[current_locale] = {}
                continue
            if current_locale is None:
                continue
            m = re.match(r"^([A-Za-z][A-Za-z0-9]*)>$", line)
            if m:
                current_key = m.group(1)
                block_lines = []
                continue
            m = re.match(r"^([A-Za-z][A-Za-z0-9]*):\s?(.*)$", line)
            if m:
                locales[current_locale][m.group(1)] = m.group(2)
    flush_block()
    return locales


def load_dsl(root):
    metadata_path = root / "metadata.asc"
    if not metadata_path.exists():
        return {}
    return parse_dsl_metadata(metadata_path)


def parse_legacy_yaml_locales(locales_dir):
    """Parses a legacy AppStoreConnect/locales/<locale>/metadata.yaml tree
    into {locale: {key: value}} — same shape as parse_dsl_metadata, so
    downstream code doesn't care which format an app repo is still on."""
    locales = {}
    if not locales_dir.exists():
        return locales
    for locale_dir in sorted(locales_dir.iterdir()):
        metadata_path = locale_dir / "metadata.yaml"
        if not locale_dir.is_dir() or not metadata_path.exists():
            continue
        with open(metadata_path, encoding="utf-8") as f:
            data = yaml.safe_load(f) or {}
        locales[locale_dir.name] = {k: v for k, v in data.items() if isinstance(v, str)}
    return locales


def load_local_metadata(config_dir):
    """Reads local App Store Connect metadata straight from the app repo —
    no `asc fetch`, no network. Picks the format the app repo actually uses:
    the flat 0.2.0 `metadata.asc` DSL, or the legacy per-locale YAML tree."""
    dsl_path = config_dir / "metadata.asc"
    if dsl_path.exists():
        return parse_dsl_metadata(dsl_path)
    return parse_legacy_yaml_locales(config_dir / "locales")


# One representative device per platform ("primary device only" — see
# sunny-discovering-sketch.md) — (flat-layout alias, legacy-layout ASC type).
PRIMARY_DEVICE = {
    "IOS": ("iphone67", "APP_IPHONE_67"),
    "MAC_OS": ("desktop", "APP_DESKTOP"),
}

SCREENSHOT_EXTENSIONS = ("png", "jpg", "jpeg")


def find_local_screenshots(config_dir, platform, asc_locale):
    """Resolves the primary-device screenshot(s) for one ASC locale, from
    whichever local screenshot layout this app repo actually has: flat
    `screenshots/<locale>~<device>~NN_*.png` (0.2.0) or nested
    `locales/<locale>/screenshots/<DISPLAY_TYPE>/NN_*.png` (legacy)."""
    alias, raw_type = PRIMARY_DEVICE.get(platform, (None, None))

    flat_dir = config_dir / "screenshots"
    if flat_dir.exists():
        for device in (alias, raw_type):
            if device is None:
                continue
            results = sorted(
                p for ext in SCREENSHOT_EXTENSIONS
                for p in flat_dir.glob(f"{asc_locale}~{device}~*.{ext}")
            )
            if results:
                return results
        return []

    if raw_type is None:
        return []
    nested_dir = config_dir / "locales" / asc_locale / "screenshots" / raw_type
    if not nested_dir.exists():
        return []
    return sorted(
        p for ext in SCREENSHOT_EXTENSIONS for p in nested_dir.glob(f"*.{ext}")
    )


def sync_one_local(key, entry):
    """Same report shape as sync_one(), but sourced entirely from files
    already committed in the app's own repo — no network, no `asc` CLI."""
    repo = Path(entry["repo"]).expanduser()
    config_dir = (repo / entry["config"]).parent
    platform = entry["platform"]
    locale_map = entry["locales"]

    if not config_dir.exists():
        print(f"!! [{key}] app folder not found: {config_dir}", file=sys.stderr)
        return False

    print(f"\n{'=' * 70}\n{key}  ({entry['page']})  [local]\n{'=' * 70}")
    print(f"repo: {repo}")

    data = load_local_metadata(config_dir)
    if not data:
        print(f"!! [{key}] no local metadata found under {config_dir}", file=sys.stderr)
        return False

    for asc_locale, site_locale in locale_map.items():
        loc_data = data.get(asc_locale)
        if not loc_data:
            print(f"  [{asc_locale} -> {site_locale}] no local data found, skipping")
            continue
        print(f"\n  --- {asc_locale} -> site locale '{site_locale}' ---")
        for field in FIELDS:
            value = loc_data.get(field)
            if value:
                shown = value if len(value) < 300 else value[:300] + "…"
                print(f"  {field}: {shown}")

        shots = find_local_screenshots(config_dir, platform, asc_locale)
        if shots:
            print(f"  screenshots ({len(shots)}):")
            for shot in shots:
                print(f"    {shot}")
        else:
            print("  screenshots: none found")

    return True


def sync_one(key, entry):
    repo = Path(entry["repo"]).expanduser()
    config_path = repo / entry["config"]
    platform = entry["platform"]
    locale_map = entry["locales"]

    if not config_path.exists():
        print(f"!! [{key}] config not found: {config_path}", file=sys.stderr)
        return False

    scratch = Path(tempfile.mkdtemp(prefix=f"asc-sync-{key}-"))

    print(f"\n{'=' * 70}\n{key}  ({entry['page']})\n{'=' * 70}")
    print(f"repo: {repo} (not modified — writing to {scratch} instead)")

    # 1. Metadata: pull the live version into a scratch dir, not the app's own repo.
    r = run_asc([
        "fetch", "--live", "--config", str(config_path),
        "--platform", platform, "--output-dir", str(scratch),
    ])
    print(r.stdout, end="")
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        print(f"!! [{key}] metadata fetch failed", file=sys.stderr)
        return False

    # 2. Screenshots: primary device per locale, into the same scratch dir.
    r = run_asc([
        "fetch", "--live", "--screenshots", "--config", str(config_path),
        "--platform", platform, "--output-dir", str(scratch),
    ])
    print(r.stdout, end="")
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        print(f"!! [{key}] screenshot fetch failed", file=sys.stderr)
        return False

    # 3. Read back what was just written and report it per site locale.
    data = load_dsl(scratch)

    for asc_locale, site_locale in locale_map.items():
        loc_data = data.get(asc_locale)
        if not loc_data:
            print(f"  [{asc_locale} -> {site_locale}] no remote data found, skipping")
            continue
        print(f"\n  --- {asc_locale} -> site locale '{site_locale}' ---")
        for field in FIELDS:
            value = loc_data.get(field)
            if value:
                shown = value if len(value) < 300 else value[:300] + "…"
                print(f"  {field}: {shown}")

    print(f"\n  Screenshots (if any) are in {scratch / 'screenshots'} — copy what you need, "
          f"then `rm -rf {scratch}` when done with this app.")

    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("app_key", nargs="?", help="App key from apps.yaml")
    parser.add_argument("--all", action="store_true", help="Sync every app in apps.yaml")
    parser.add_argument("--list", action="store_true", help="List configured app keys and exit")
    parser.add_argument(
        "--local", action="store_true",
        help="Read metadata/screenshots directly from the app repo's local "
             "AppStoreConnect/ folder instead of fetching live from Apple — "
             "no network, no `asc` CLI call.",
    )
    args = parser.parse_args()

    apps = load_apps()

    if args.list:
        for key, entry in apps.items():
            print(f"{key:20s} {entry['page']}")
        return

    sync_fn = sync_one_local if args.local else sync_one

    if args.all:
        failures = [key for key, entry in apps.items() if not sync_fn(key, entry)]
        if failures:
            print(f"\nFailed: {', '.join(failures)}", file=sys.stderr)
            sys.exit(1)
        return

    if not args.app_key:
        parser.print_help()
        sys.exit(1)

    if args.app_key not in apps:
        print(f"Unknown app '{args.app_key}'. Known: {', '.join(apps)}", file=sys.stderr)
        sys.exit(1)

    if not sync_fn(args.app_key, apps[args.app_key]):
        sys.exit(1)


if __name__ == "__main__":
    main()
