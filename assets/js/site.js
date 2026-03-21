const TRANSLATIONS = {
  en: {
    "site.brand": "Acidic Slime",
    "controls.language": "Language",
    "controls.theme.toggle": "Switch light or dark theme",
    "meta.app.title": "Acidic Slime | macOS Xcode Storage Cleaner",
    "meta.app.description": "Acidic Slime helps you scan and clean Xcode storage on macOS.",

    "app.iconAlt": "Acidic Slime app icon",
    "app.title": "Acidic Slime",

    "overview.kicker": "Overview",
    "overview.title": "Keep Xcode storage clean with less effort.",

    "feature.1.title": "Fast storage scan",
    "feature.1.body": "Check DerivedData, Archives, Device Support, logs, and other heavy directories in one view.",
    "feature.2.title": "Clean your way",
    "feature.2.body": "Use Quick Clean for speed or Review & Clean for item-level control.",
    "feature.3.title": "Fits your setup",
    "feature.3.body": "Switch light and dark themes and configure default or custom folder locations.",

    "screens.kicker": "Screenshots",
    "screens.title": "Designed for focused cleanup sessions.",
    "screens.1.title": "Dashboard",
    "screens.1.body": "See reclaimable space, run scans, and start cleanup from one calm interface.",
    "screens.1.alt": "Acidic Slime dashboard window",
    "screens.2.title": "Settings",
    "screens.2.body": "Adjust appearance and folder locations to match your own Xcode workflow.",
    "screens.2.alt": "Acidic Slime settings window",

    "footer.tagline": "Focused tools for macOS developers."
  },
  ja: {
    "site.brand": "Acidic Slime",
    "controls.language": "言語",
    "controls.theme.toggle": "ライト/ダークテーマを切り替え",
    "meta.app.title": "Acidic Slime | macOS向けXcodeストレージクリーナー",
    "meta.app.description": "Acidic SlimeはmacOSでXcodeストレージをスキャンしてクリーンアップします。",

    "app.iconAlt": "Acidic Slimeアプリアイコン",
    "app.title": "Acidic Slime",

    "overview.kicker": "概要",
    "overview.title": "Xcodeストレージの整理を、もっとシンプルに。",

    "feature.1.title": "高速ストレージスキャン",
    "feature.1.body": "DerivedData、Archives、Device Support、ログなど容量の大きい領域を一画面で確認できます。",
    "feature.2.title": "好みに合わせてクリーン",
    "feature.2.body": "速度重視のクイッククリーン、または項目単位で確認できるレビュークリーンを選べます。",
    "feature.3.title": "環境に合わせた設定",
    "feature.3.body": "ライト/ダーク切替と、既定またはカスタムのフォルダ設定に対応します。",

    "screens.kicker": "スクリーンショット",
    "screens.title": "集中して使える、静かなUI。",
    "screens.1.title": "ダッシュボード",
    "screens.1.body": "回収可能容量の確認、スキャン、クリーンアップ開始までを一画面で操作できます。",
    "screens.1.alt": "Acidic Slimeのダッシュボード画面",
    "screens.2.title": "設定",
    "screens.2.body": "外観とフォルダの場所を調整し、Xcode環境に合わせて最適化できます。",
    "screens.2.alt": "Acidic Slimeの設定画面",

    "footer.tagline": "macOS開発者のための、集中を保つツール。"
  },
  "zh-Hans": {
    "site.brand": "Acidic Slime",
    "controls.language": "语言",
    "controls.theme.toggle": "切换浅色或深色主题",
    "meta.app.title": "Acidic Slime | macOS Xcode 存储清理工具",
    "meta.app.description": "Acidic Slime 可在 macOS 上扫描并清理 Xcode 存储内容。",

    "app.iconAlt": "Acidic Slime 应用图标",
    "app.title": "Acidic Slime",

    "overview.kicker": "概览",
    "overview.title": "更省心地保持 Xcode 存储整洁。",

    "feature.1.title": "快速存储扫描",
    "feature.1.body": "在一个界面查看 DerivedData、Archives、Device Support、日志等占用较大的目录。",
    "feature.2.title": "按你的方式清理",
    "feature.2.body": "可快速一键清理，也可先审查再逐项删除。",
    "feature.3.title": "适配你的环境",
    "feature.3.body": "支持浅色/深色切换，并可配置默认或自定义目录位置。",

    "screens.kicker": "截图",
    "screens.title": "为专注清理而设计的界面。",
    "screens.1.title": "仪表盘",
    "screens.1.body": "在一个安静清晰的界面里完成容量查看、扫描与清理。",
    "screens.1.alt": "Acidic Slime 仪表盘窗口",
    "screens.2.title": "设置",
    "screens.2.body": "调整外观与目录路径，使其更贴合你的 Xcode 工作流。",
    "screens.2.alt": "Acidic Slime 设置窗口",

    "footer.tagline": "为 macOS 开发者打造的高专注工具。"
  }
};

(() => {
  const SUPPORTED_LOCALES = ["en", "ja", "zh-Hans"];
  const LOCALE_STORAGE_KEY = "site-locale";
  const THEME_STORAGE_KEY = "site-theme";
  const DEFAULT_LOCALE = "en";

  const tr = (locale, key) => {
    const table = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
    return table[key] || TRANSLATIONS[DEFAULT_LOCALE][key] || key;
  };

  const normalizeLocale = (value) => {
    if (!value) return null;
    const lowered = String(value).toLowerCase();
    if (lowered === "en" || lowered.startsWith("en-")) return "en";
    if (lowered === "ja" || lowered.startsWith("ja-")) return "ja";
    if (lowered === "zh" || lowered.startsWith("zh-cn") || lowered.startsWith("zh-hans") || lowered.startsWith("zh-sg")) {
      return "zh-Hans";
    }
    return null;
  };

  const queryLocale = new URLSearchParams(window.location.search).get("lang");
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  const browserLocale = navigator.language || navigator.userLanguage;
  let locale = normalizeLocale(queryLocale) || normalizeLocale(storedLocale) || normalizeLocale(browserLocale) || DEFAULT_LOCALE;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCALE;
  }

  const applyLocalizedLinks = (currentLocale) => {
    const elements = document.querySelectorAll("[data-localized-link]");
    elements.forEach((element) => {
      const href = element.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      const url = new URL(href, window.location.href);
      url.searchParams.set("lang", currentLocale);
      element.setAttribute("href", `${url.pathname.split("/").pop()}?${url.searchParams.toString()}`);
    });
  };

  const applyTranslations = (currentLocale) => {
    document.documentElement.lang = currentLocale === "zh-Hans" ? "zh-CN" : currentLocale;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = tr(currentLocale, key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = element.getAttribute("data-i18n-attr").split(",");
      mappings.forEach((mapping) => {
        const [attribute, key] = mapping.split(":").map((item) => item.trim());
        if (attribute && key) {
          element.setAttribute(attribute, tr(currentLocale, key));
        }
      });
    });

    document.title = tr(currentLocale, "meta.app.title");
  };

  const updateURLLocale = (currentLocale) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLocale);
    window.history.replaceState({}, "", url);
  };

  const syncLanguageButtons = (currentLocale) => {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.locale === currentLocale);
    });
  };

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = localStorage.getItem(THEME_STORAGE_KEY);
  if (theme !== "light" && theme !== "dark") {
    theme = systemDark ? "dark" : "light";
  }

  const applyTheme = (value) => {
    theme = value === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      themeButton.textContent = theme === "dark" ? "☾" : "☀";
      themeButton.title = tr(locale, "controls.theme.toggle");
    }
  };

  applyTranslations(locale);
  applyLocalizedLinks(locale);
  updateURLLocale(locale);
  syncLanguageButtons(locale);
  applyTheme(theme);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = normalizeLocale(button.dataset.locale);
      if (!selected) return;

      locale = selected;
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      applyTranslations(locale);
      applyLocalizedLinks(locale);
      updateURLLocale(locale);
      syncLanguageButtons(locale);
      applyTheme(theme);
    });
  });

  const themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      applyTheme(theme === "dark" ? "light" : "dark");
    });
  }
})();
