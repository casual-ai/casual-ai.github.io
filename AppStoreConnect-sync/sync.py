#!/usr/bin/env python3
"""Fetch each app's currently-live App Store Connect metadata + screenshots
(via the `asc` CLI, in that app's own repo) and print a review report for
the website's marketing copy. Read-only against the website repo — this
never edits site.js/HTML itself. See apps.yaml for the app -> repo mapping,
and ~/.claude/plans/sunny-discovering-sketch.md for the full pipeline design.

Usage:
    sync.py <app-key>          # fetch + report one app
    sync.py --all              # fetch + report every app in apps.yaml
    sync.py --list             # list configured app keys
"""
import argparse
import re
import subprocess
import sys
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


def load_dsl(repo_root, locales_wanted):
    metadata_path = repo_root / "metadata.asc"
    if not metadata_path.exists():
        return {}
    return parse_dsl_metadata(metadata_path)


def load_legacy(repo_root, locales_wanted):
    out = {}
    for locale in locales_wanted:
        path = repo_root / "locales" / locale / "metadata.yaml"
        if not path.exists():
            continue
        with open(path, encoding="utf-8") as f:
            out[locale] = yaml.safe_load(f) or {}
    return out


def sync_one(key, entry):
    repo = Path(entry["repo"]).expanduser()
    config_path = repo / entry["config"]
    platform = entry["platform"]
    locale_map = entry["locales"]
    asc_locales = list(locale_map.keys())

    if not config_path.exists():
        print(f"!! [{key}] config not found: {config_path}", file=sys.stderr)
        return False

    print(f"\n{'=' * 70}\n{key}  ({entry['page']})\n{'=' * 70}")
    print(f"repo: {repo}")

    # 1. Metadata: pull the live version into the app's own repo.
    r = run_asc([
        "fetch", "--live", "--config", str(config_path),
        "--platform", platform, "--write-baseline",
    ])
    print(r.stdout, end="")
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        print(f"!! [{key}] metadata fetch failed", file=sys.stderr)
        return False

    # 2. Screenshots: primary device per locale, into the same repo.
    r = run_asc([
        "fetch", "--live", "--screenshots", "--config", str(config_path),
        "--platform", platform,
    ])
    print(r.stdout, end="")
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        print(f"!! [{key}] screenshot fetch failed", file=sys.stderr)
        return False

    # 3. Read back what was just written and report it per site locale.
    metadata_root = config_path.parent
    is_dsl = (metadata_root / "metadata.asc").exists()
    data = load_dsl(metadata_root, asc_locales) if is_dsl else load_legacy(metadata_root, asc_locales)

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

    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("app_key", nargs="?", help="App key from apps.yaml")
    parser.add_argument("--all", action="store_true", help="Sync every app in apps.yaml")
    parser.add_argument("--list", action="store_true", help="List configured app keys and exit")
    args = parser.parse_args()

    apps = load_apps()

    if args.list:
        for key, entry in apps.items():
            print(f"{key:20s} {entry['page']}")
        return

    if args.all:
        failures = [key for key, entry in apps.items() if not sync_one(key, entry)]
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

    if not sync_one(args.app_key, apps[args.app_key]):
        sys.exit(1)


if __name__ == "__main__":
    main()
