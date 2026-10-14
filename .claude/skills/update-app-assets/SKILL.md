---
name: update-app-assets
description: Refresh this website's app icons and App Store screenshots from each app's own repo. Use when an app shipped a new icon or new screenshots, when a new app page needs its images, or when asked to update, sync or refresh the icons or screenshots on yanuvo.app.
---

# Update app icons and screenshots

The images on this site are copies. The originals live in each app's repo: the icon in its asset catalog, the screenshots in its App Store Connect folder. `AppStoreConnect-sync/assets.py` copies them in and writes the WebP sizes; `AppStoreConnect-sync/apps.yaml` says where everything is. When an app keeps no screenshots on disk, the script downloads its live App Store set with `asc fetch` into a temporary folder and uses that. App repos are only read, never written.

## Steps

1. See what would change, for one app or all of them:

   ```sh
   python3 AppStoreConnect-sync/assets.py --dry-run <app-key>   # or --all
   python3 AppStoreConnect-sync/assets.py --list                # app keys
   ```

2. Run it for real (same command without `--dry-run`). It reports each file as added, updated or removed.

3. If only files were **updated**, the pages need no edit. If screenshots were **added or removed**, bring the page in line with what is now in `assets/images/appstore/<app-key>/`:
   - In `assets/js/site.js`, replace that app's entry in the `SCREENSHOTS` table with the block the script printed. The entry's key is the page's `data-page` value (`tubtime` for Tub Time, `app` for Acidic Slime), not the app key.
   - In the app's page, make the `<figure class="shot-frame">` list inside `.shot-gallery` (phone screenshots) or `.shot-stack` (Acidic Slime's wide Mac screenshots, each beside a caption) match: one figure per screenshot, `data-shot="shot1"`, `shot2`, … in order, with `src` and `srcset` pointing at the default locale's files (English, or the app's first locale if it has no English set). Copy an existing figure; `width` and `height` are the image's pixel size.
   - A page with no screenshots band yet gets one: copy the `<section class="band band-alt" id="screenshots">` from another app page and add `<prefix>.screens.kicker`, `.title` and `.alt` to `TRANSLATIONS` in English, Japanese, Simplified and Traditional Chinese.

4. Check nothing points at a missing file:

   ```sh
   python3 AppStoreConnect-sync/assets.py --all --dry-run   # every app should say "up to date"
   ```

   Then serve the site (`python3 -m http.server`) and look at the page in light and dark, switching through the four languages. A language the app has no screenshots for shows the English set, or the app's first locale.

5. Commit by path: the changed images, the page, `assets/js/site.js`. Show the user the result before pushing; pushing `main` publishes the site.

## Things to know

- **Every page offers English, Japanese, Simplified Chinese and Traditional Chinese**, whatever the app ships in. Screenshots exist only in the app's own languages; page text is translated for all four.
- **Icons are not in the ASC folder.** `icon:` in `apps.yaml` names the exact 1024px PNG in the app's asset catalog, because several repos carry dozens of alternate icon sets. If an app renames or moves its icon, fix the path there. `icon_dark:` is optional; a page uses it through `data-theme-asset-light` / `data-theme-asset-dark` on the `<img>`.
- **Only the primary device is used**: iPhone 6.7" (`iphone67`), or `desktop` for a Mac app.
- **`locales:` in `apps.yaml` must use the app's real ASC locale codes** (`en-US`, `ja`, `zh-Hans`, …). A code that matches nothing is skipped silently, so a page that keeps showing another language's screenshots usually means a wrong code there.
- **An app with no screenshots on disk gets its live App Store set.** Acidic Slime does not track its screenshots in git, so every run downloads them (it needs the network and working `asc` credentials; `asc doctor` checks those) and reports "up to date" when they match the site. What is live on the store can lag behind an unreleased version.
- **Adding an app**: add an entry to `apps.yaml` (`page`, `prefix`, `repo`, `config`, `platform`, `locales`, `icon`, `site_icon`), or under an `icon_only:` map if it has no ASC folder. If the app's ASC folder moved, `config:` is the line to fix; `assets.py` says so when it cannot find it.
- The page's marketing copy is a separate job: `python3 AppStoreConnect-sync/sync.py --local <app-key>` prints the app's current store text for review.
