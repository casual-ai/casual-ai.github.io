const TRANSLATIONS = {
  en: {
    "site.brand": "Apps",
    "nav.primary": "Primary navigation",
    "nav.apps": "Apps",
    "nav.acidicSlime": "Acidic Slime",
    "nav.names": "Names",
    "nav.privacy": "Privacy",

    "controls.language": "Language",
    "controls.back": "Back to homepage",
    "controls.theme.toggle": "Switch light or dark theme",

    "meta.home.title": "Apps",
    "meta.home.description": "App gallery",
    "meta.app.title": "Acidic Slime | macOS Xcode Storage Cleaner",
    "meta.app.description": "Acidic Slime helps you scan and clean Xcode storage on macOS.",
    "meta.arithzo.title": "Arithzo | Mental Arithmetic Training for Elementary Students",
    "meta.arithzo.description": "Arithzo helps elementary students build arithmetic speed and accuracy with game-like practice.",
    "meta.sidewatch.title": "Sidewatch | Picture in Picture for Safari",
    "meta.sidewatch.description": "Sidewatch opens HTML5 videos in Safari Picture in Picture from a toolbar button.",
    "meta.privacy.title": "Privacy Policy | Acidic Slime",
    "meta.privacy.description": "Privacy policy for Acidic Slime.",
    "meta.privacy.arithzo.title": "Privacy Policy | Arithzo",
    "meta.privacy.arithzo.description": "Privacy policy for Arithzo.",
    "meta.privacy.sidewatch.title": "Privacy Policy | Sidewatch",
    "meta.privacy.sidewatch.description": "Privacy policy for Sidewatch.",

    "home.kicker": "Independent Developer Apps",
    "home.title": "Practical macOS apps built with care.",
    "home.body": "We build focused tools that help developers move faster without giving up reliability or clarity.",
    "home.cta.apps": "Browse app gallery",
    "home.cta.privacy": "Privacy policy",
    "home.highlights": "Highlights",
    "home.trust.1": "Developer-first workflows",
    "home.trust.2": "Clear storage visibility",
    "home.trust.3": "Safe cleanup controls",

    "gallery.kicker": "App Gallery",
    "gallery.title": "Tap an icon to open app details.",
    "gallery.body": "This homepage is now a scalable app gallery. As new apps launch, their icons will appear here.",
    "gallery.aria": "Application icon gallery",
    "gallery.acidicSlime": "Xcode storage cleaner for macOS",
    "gallery.arithzo": "Mental arithmetic training game for elementary students",
    "gallery.sidewatch": "Sidewatch: Picture in Picture for Safari",
    "gallery.more.title": "Next App",
    "gallery.more.body": "Coming soon",

    "app.iconAlt": "Acidic Slime app icon",
    "app.kicker": "macOS Developer Utility",
    "app.title": "Acidic Slime",
    "app.lead": "A focused storage cleaner for Xcode-generated files, built to help developers recover space safely and quickly.",
    "app.cta.macStore": "Open in Mac App Store",
    "app.cta.macStoreAlt": "Download on the Mac App Store",
    "app.cta.appStore": "Open in App Store",
    "app.cta.appStoreAlt": "Download on the App Store",
    "app.cta.privacy": "Read Privacy Policy",
    "app.cta.screens": "View screenshots",
    "app.note": "Uses the same localized naming set shown in the privacy policy.",
    "privacy.kicker": "Privacy",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "This page contains the privacy policy for Acidic Slime.",
    "privacy.locale.heading": "English (US/UK) — Acidic Slime",
    "privacy.locale.label": "Privacy Policy",
    "privacy.locale.body": "Acidic Slime does not collect, store, or transmit any personal data. All file processing occurs locally on your Mac. In-app purchases for tips are processed securely by Apple; the developer does not have access to your payment or personal information.",

    "overview.kicker": "Overview",
    "overview.title": "Keep Xcode storage clean with less effort.",

    "feature.1.title": "Fast storage scan",
    "feature.1.body": "Check DerivedData, Archives, Device Support, logs, and other heavy directories in one view.",
    "feature.2.title": "Clean your way",
    "feature.2.body": "Use Quick Clean for speed or Review & Clean for item-level control.",
    "feature.3.title": "Fits your setup",
    "feature.3.body": "Switch light and dark themes and configure default or custom folder locations.",

    "names.kicker": "Localized App Names",
    "names.title": "Language-specific names currently in use.",
    "names.aria": "Localized app names",

    "screens.kicker": "Screenshots",
    "screens.title": "Designed for focused cleanup sessions.",
    "screens.1.title": "Dashboard",
    "screens.1.body": "See reclaimable space, run scans, and start cleanup from one calm interface.",
    "screens.1.alt": "Acidic Slime dashboard window",
    "screens.2.title": "Settings",
    "screens.2.body": "Adjust appearance and folder locations to match your own Xcode workflow.",
    "screens.2.alt": "Acidic Slime settings window",

    "arithzo.iconAlt": "Arithzo app icon",
    "arithzo.title": "Arithzo",
    "arithzo.subtitle": "Mental arithmetic training for elementary students",
    "arithzo.overview.kicker": "Overview",
    "arithzo.overview.title": "Fast daily arithmetic practice that feels like a game.",
    "arithzo.feature.1.title": "Age-appropriate drills",
    "arithzo.feature.1.body": "Practice addition, subtraction, multiplication, and division with clear progression for elementary students.",
    "arithzo.feature.2.title": "Speed and accuracy focus",
    "arithzo.feature.2.body": "Run short sessions designed to improve both answer correctness and response speed.",
    "arithzo.feature.3.title": "Challenge yourself",
    "arithzo.feature.3.body": "Track progress over time and keep pushing for new personal best scores.",
    "arithzo.store.badgeAlt": "Download on the App Store",
    "arithzo.screens.kicker": "Screenshot",
    "arithzo.screens.title": "Main menu and training modes at a glance.",
    "arithzo.screens.1.title": "Home screen",
    "arithzo.screens.1.body": "Jump into focused practice sessions and challenge modes from one clear starting point.",
    "arithzo.screens.alt": "Arithzo app screenshot",
    "arithzo.screens.1.alt": "Arithzo light mode home screen",
    "arithzo.screens.2.alt": "Arithzo light mode practice settings screen",
    "arithzo.screens.3.alt": "Arithzo dark mode home screen",
    "arithzo.screens.4.alt": "Arithzo dark mode challenge mode selection screen",
    "arithzo.footer.tagline": "Focused learning games for students.",

    "sidewatch.iconAlt": "Sidewatch app icon",
    "sidewatch.title": "Sidewatch",
    "sidewatch.subtitle": "Picture in Picture for Safari",
    "sidewatch.overview.kicker": "Overview",
    "sidewatch.overview.title": "Keep Safari videos visible while you work.",
    "sidewatch.feature.1.title": "Toolbar button",
    "sidewatch.feature.1.body": "Open the current HTML5 video in Picture in Picture from Safari.",
    "sidewatch.feature.2.title": "Stays out of the way",
    "sidewatch.feature.2.body": "Keep watching in a floating window while using other apps.",
    "sidewatch.feature.3.title": "Privacy-first",
    "sidewatch.feature.3.body": "No analytics, accounts, remote services, or in-app purchases in the first release.",
    "sidewatch.store.kicker": "Mac App Store",
    "sidewatch.store.title": "Coming to Mac App Store",
    "sidewatch.store.platform": "Platform: macOS",
    "sidewatch.store.resource": "Apple's official Mac App Store resource",
    "sidewatch.footer.tagline": "Picture in Picture for Safari.",

    "privacy.arithzo.kicker": "Privacy",
    "privacy.arithzo.title": "Privacy Policy",
    "privacy.arithzo.intro": "This page contains the privacy policy for Arithzo.",
    "privacy.arithzo.body": "Arithzo does not collect, store, or transmit any personal data. All app activity and progress data are processed and stored locally on your device. In-app purchases for tips are handled securely by Apple; the developer does not have access to your payment details or personal information.",
    "privacy.sidewatch.kicker": "Privacy",
    "privacy.sidewatch.title": "Privacy Policy",
    "privacy.sidewatch.intro": "This page contains the privacy policy for Sidewatch.",
    "privacy.sidewatch.body": "Sidewatch does not collect, store, or transmit any personal data. Video detection and Picture in Picture actions happen locally in Safari after you click the Sidewatch toolbar button. Sidewatch does not use analytics, accounts, remote services, or in-app purchases.",

    "footer.tagline": "Focused tools for macOS developers.",
    "footer.privacy": "Read Privacy Policy"
  },

  ja: {
    "site.brand": "アプリ",
    "nav.primary": "メインナビゲーション",
    "nav.apps": "アプリ",
    "nav.acidicSlime": "酸性スライム",
    "nav.names": "名称",
    "nav.privacy": "プライバシー",

    "controls.language": "言語",
    "controls.back": "ホームへ戻る",
    "controls.theme.toggle": "ライト/ダークテーマを切り替え",

    "meta.home.title": "アプリ",
    "meta.home.description": "アプリギャラリー",
    "meta.app.title": "酸性スライム | macOS向けXcodeストレージクリーナー",
    "meta.app.description": "Acidic Slime は macOS 上で Xcode ストレージをスキャンして整理します。",
    "meta.arithzo.title": "Arithzo | 小学生向け暗算トレーニング",
    "meta.arithzo.description": "Arithzo はゲーム感覚の練習で、小学生の計算スピードと正確さを伸ばします。",
    "meta.sidewatch.title": "Sidewatch | Safariのピクチャ・イン・ピクチャ",
    "meta.sidewatch.description": "Sidewatch は Safari のHTML5動画をツールバーボタンからピクチャ・イン・ピクチャで開きます。",
    "meta.privacy.title": "プライバシーポリシー | 酸性スライム",
    "meta.privacy.description": "酸性スライムのプライバシーポリシー。",
    "meta.privacy.arithzo.title": "プライバシーポリシー | アリスゾ",
    "meta.privacy.arithzo.description": "アリスゾ のプライバシーポリシー。",
    "meta.privacy.sidewatch.title": "プライバシーポリシー | Sidewatch",
    "meta.privacy.sidewatch.description": "Sidewatch のプライバシーポリシー。",

    "home.kicker": "インディー開発アプリ",
    "home.title": "実用性を重視した macOS アプリ。",
    "home.body": "開発者がより速く作業できるよう、わかりやすく信頼できるツールを提供します。",
    "home.cta.apps": "アプリギャラリーを見る",
    "home.cta.privacy": "プライバシーポリシー",
    "home.highlights": "特長",
    "home.trust.1": "開発者中心の設計",
    "home.trust.2": "ストレージ状況を明確に表示",
    "home.trust.3": "安全なクリーンアップ操作",

    "gallery.kicker": "アプリギャラリー",
    "gallery.title": "アイコンをタップして詳細ページへ。",
    "gallery.body": "このホームページは拡張可能なアプリギャラリー構成になりました。新しいアプリはここに追加されます。",
    "gallery.aria": "アプリアイコンギャラリー",
    "gallery.acidicSlime": "macOS向け Xcode ストレージクリーナー",
    "gallery.arithzo": "小学生向け暗算トレーニングゲーム",
    "gallery.sidewatch": "Sidewatch: Safariのピクチャ・イン・ピクチャ",
    "gallery.more.title": "次のアプリ",
    "gallery.more.body": "近日公開",

    "app.iconAlt": "酸性スライム のアプリアイコン",
    "app.kicker": "macOS開発者向けユーティリティ",
    "app.title": "酸性スライム",
    "app.lead": "Xcode 生成ファイルを対象にした、容量回復のための安全で高速なストレージクリーナーです。",
    "app.cta.macStore": "Mac App Store で開く",
    "app.cta.macStoreAlt": "Mac App Store でダウンロード",
    "app.cta.appStore": "App Store で開く",
    "app.cta.appStoreAlt": "App Store でダウンロード",
    "app.cta.privacy": "プライバシーポリシーを見る",
    "app.cta.screens": "スクリーンショットを見る",
    "app.note": "プライバシーポリシーに掲載している名称セットと同じ内容を表示しています。",
    "privacy.kicker": "プライバシー",
    "privacy.title": "プライバシーポリシー",
    "privacy.intro": "このページには Acidic Slime のプライバシーポリシーを掲載しています。",
    "privacy.locale.heading": "日本語 (Japanese) — Acidic Slime",
    "privacy.locale.label": "プライバシーポリシー",
    "privacy.locale.body": "Acidic Slimeは、ユーザーの個人情報を一切収集、保存、または送信しません。すべてのファイル処理はユーザーのMac上でローカルに行われます。チップ（アプリ内課金）はAppleによって安全に処理され、開発者がユーザーの支払い情報や個人情報にアクセスすることはありません。",

    "overview.kicker": "概要",
    "overview.title": "Xcode ストレージの整理を、もっとシンプルに。",

    "feature.1.title": "高速ストレージスキャン",
    "feature.1.body": "DerivedData、Archives、Device Support、ログなどの大容量領域を一画面で確認できます。",
    "feature.2.title": "好みに合わせたクリーン",
    "feature.2.body": "速度重視のクイッククリーン、または項目単位で確認できるレビュークリーンを選択できます。",
    "feature.3.title": "環境に合わせた設定",
    "feature.3.body": "ライト/ダーク切替に対応し、既定またはカスタムのフォルダを設定できます。",

    "names.kicker": "ローカライズ済みアプリ名",
    "names.title": "現在使用している言語別名称。",
    "names.aria": "ローカライズ済みアプリ名",

    "screens.kicker": "スクリーンショット",
    "screens.title": "集中して整理できるUI設計。",
    "screens.1.title": "ダッシュボード",
    "screens.1.body": "回収可能容量の確認、スキャン、クリーンアップ開始までを一画面で行えます。",
    "screens.1.alt": "Acidic Slime のダッシュボード画面",
    "screens.2.title": "設定",
    "screens.2.body": "外観やフォルダ設定を調整して、Xcode ワークフローに合わせられます。",
    "screens.2.alt": "Acidic Slime の設定画面",

    "arithzo.iconAlt": "Arithzo のアプリアイコン",
    "arithzo.title": "アリスゾ",
    "arithzo.subtitle": "小学生向け暗算トレーニング",
    "arithzo.overview.kicker": "概要",
    "arithzo.overview.title": "毎日の計算練習を、ゲーム感覚でテンポよく。",
    "arithzo.feature.1.title": "学年に合わせた問題",
    "arithzo.feature.1.body": "たし算・ひき算・かけ算・わり算を、段階的に練習できます。",
    "arithzo.feature.2.title": "正確さとスピード",
    "arithzo.feature.2.body": "短いセッションで、正答率と回答スピードを同時に強化できます。",
    "arithzo.feature.3.title": "自己ベストに挑戦",
    "arithzo.feature.3.body": "日々の記録を積み重ねながら、自己ベスト更新を目指せます。",
    "arithzo.store.badgeAlt": "App Storeでダウンロード",
    "arithzo.screens.kicker": "スクリーンショット",
    "arithzo.screens.title": "ホーム画面からすぐに練習モードへ。",
    "arithzo.screens.1.title": "ホーム画面",
    "arithzo.screens.1.body": "練習モードとチャレンジモードをひとつの画面からすぐに開始できます。",
    "arithzo.screens.alt": "アリスゾのスクリーンショット",
    "arithzo.screens.1.alt": "アリスゾのライトモードホーム画面",
    "arithzo.screens.2.alt": "アリスゾのライトモード練習設定画面",
    "arithzo.screens.3.alt": "アリスゾのダークモードホーム画面",
    "arithzo.screens.4.alt": "アリスゾのダークモードチャレンジ選択画面",
    "arithzo.footer.tagline": "生徒のための集中型学習ゲーム。",

    "sidewatch.iconAlt": "Sidewatch のアプリアイコン",
    "sidewatch.title": "Sidewatch",
    "sidewatch.subtitle": "Safariのピクチャ・イン・ピクチャ",
    "sidewatch.overview.kicker": "概要",
    "sidewatch.overview.title": "作業中もSafariの動画を表示したままに。",
    "sidewatch.feature.1.title": "ツールバーボタン",
    "sidewatch.feature.1.body": "Safariで開いているHTML5動画をピクチャ・イン・ピクチャで表示できます。",
    "sidewatch.feature.2.title": "作業を妨げない",
    "sidewatch.feature.2.body": "ほかのアプリを使いながら、フローティングウインドウで視聴を続けられます。",
    "sidewatch.feature.3.title": "プライバシー重視",
    "sidewatch.feature.3.body": "初回リリースでは、分析、アカウント、リモートサービス、アプリ内課金を使用しません。",
    "sidewatch.store.kicker": "Mac App Store",
    "sidewatch.store.title": "Mac App Store に近日公開",
    "sidewatch.store.platform": "対応プラットフォーム: macOS",
    "sidewatch.store.resource": "Apple 公式の Mac App Store リソース",
    "sidewatch.footer.tagline": "Safariのピクチャ・イン・ピクチャ。",

    "privacy.arithzo.kicker": "プライバシー",
    "privacy.arithzo.title": "プライバシーポリシー",
    "privacy.arithzo.intro": "このページには アリスゾ のプライバシーポリシーを掲載しています。",
    "privacy.arithzo.body": "アリスゾ は、ユーザーの個人情報を収集、保存、送信しません。アプリ内の学習記録や進捗データは、端末内にのみ保存・処理されます。チップ（アプリ内課金）は Apple により安全に処理され、開発者が支払い情報や個人情報にアクセスすることはありません。",
    "privacy.sidewatch.kicker": "プライバシー",
    "privacy.sidewatch.title": "プライバシーポリシー",
    "privacy.sidewatch.intro": "このページには Sidewatch のプライバシーポリシーを掲載しています。",
    "privacy.sidewatch.body": "Sidewatch は、ユーザーの個人情報を収集、保存、送信しません。動画の検出とピクチャ・イン・ピクチャ操作は、Sidewatch のツールバーボタンをクリックした後にSafari内でローカルに行われます。Sidewatch は、分析、アカウント、リモートサービス、アプリ内課金を使用しません。",

    "meta.vocabularybook.title": "英単語ブック | 中高生のための英単語学習",
    "meta.vocabularybook.description": "SM-2間隔反復で7,000語を効率よく定着。中1〜高3・上級の7レベルに対応。",
    "meta.privacy.vocabularybook.title": "プライバシーポリシー | 英単語ブック",
    "meta.privacy.vocabularybook.description": "英単語ブックのプライバシーポリシー。",
    "gallery.vocabularybook": "英単語ブック：中高生のための英単語学習",
    "vocabularybook.iconAlt": "英単語ブック のアプリアイコン",
    "vocabularybook.title": "英単語ブック",
    "vocabularybook.subtitle": "中高生のための英単語 7000語",
    "vocabularybook.overview.kicker": "概要",
    "vocabularybook.overview.title": "7,000語を、科学的なSRSで効率よく定着。",
    "vocabularybook.feature.1.title": "7,000語・7レベル",
    "vocabularybook.feature.1.body": "中1〜高3・上級の7段階で、英検・受験に必要な語彙を完全網羅。",
    "vocabularybook.feature.2.title": "SM-2間隔反復（SRS）",
    "vocabularybook.feature.2.body": "科学的なSM-2アルゴリズムが最適な復習タイミングを自動計算。長期記憶への定着をサポートします。",
    "vocabularybook.feature.3.title": "学習とゲームを融合",
    "vocabularybook.feature.3.body": "3Dフリップのフラッシュカード、3種類のテストモード、XP・ストリーク・30以上のアチーブメントで毎日続けられます。",
    "vocabularybook.store.kicker": "App Store",
    "vocabularybook.store.title": "App Storeに近日公開",
    "vocabularybook.store.platform": "対応プラットフォーム: iOS",
    "vocabularybook.store.resource": "Apple 公式の App Store リソース",
    "vocabularybook.footer.tagline": "中高生のための英単語学習。",
    "privacy.vocabularybook.kicker": "プライバシー",
    "privacy.vocabularybook.title": "プライバシーポリシー",
    "privacy.vocabularybook.intro": "このページには 英単語ブック のプライバシーポリシーを掲載しています。",
    "privacy.vocabularybook.body": "英単語ブックは、ユーザーの個人情報を外部サーバーに収集・保存・送信しません。フラッシュカードの進捗、SRSスケジュール、テスト結果、XP、ストリーク、アチーブメントを含むすべての学習データは、端末内にのみ保存されます。ユーザープロフィールと設定は、デバイスでiCloudが有効な場合にのみiCloud経由で同期されます。このデータは開発者のサーバーを経由しません。サードパーティの分析、アカウント、リモートサービスは使用しません。",

    "footer.tagline": "macOS 開発者のための集中ツール。",
    "footer.privacy": "プライバシーポリシーを見る"
  },

  "zh-Hans": {
    "site.brand": "应用",
    "nav.primary": "主导航",
    "nav.apps": "应用",
    "nav.acidicSlime": "酸性史莱姆",
    "nav.names": "名称",
    "nav.privacy": "隐私",

    "controls.language": "语言",
    "controls.back": "返回首页",
    "controls.theme.toggle": "切换浅色或深色主题",

    "meta.home.title": "应用",
    "meta.home.description": "应用图库",
    "meta.app.title": "酸性史莱姆 | macOS Xcode 存储清理工具",
    "meta.app.description": "酸性史莱姆可在 macOS 上扫描并清理 Xcode 存储。",
    "meta.arithzo.title": "Arithzo | 面向小学生的心算训练",
    "meta.arithzo.description": "Arithzo 通过游戏化练习帮助小学生提升计算速度与准确率。",
    "meta.sidewatch.title": "Sidewatch | Safari 画中画",
    "meta.sidewatch.description": "Sidewatch 可通过工具栏按钮将 Safari 中的 HTML5 视频以画中画方式打开。",
    "meta.privacy.title": "隐私政策 | 酸性史莱姆",
    "meta.privacy.description": "酸性史莱姆隐私政策。",
    "meta.privacy.arithzo.title": "隐私政策 | 速算",
    "meta.privacy.arithzo.description": "速算隐私政策。",
    "meta.privacy.sidewatch.title": "隐私政策 | Sidewatch",
    "meta.privacy.sidewatch.description": "Sidewatch 隐私政策。",

    "home.kicker": "独立开发者应用",
    "home.title": "注重实用与质量的 macOS 应用。",
    "home.body": "我们构建聚焦型工具，帮助开发者在保证可靠性的前提下提高效率。",
    "home.cta.apps": "浏览应用图库",
    "home.cta.privacy": "隐私政策",
    "home.highlights": "亮点",
    "home.trust.1": "开发者优先设计",
    "home.trust.2": "清晰的存储可视化",
    "home.trust.3": "安全可控的清理流程",

    "gallery.kicker": "应用图库",
    "gallery.title": "点击图标进入应用详情页。",
    "gallery.body": "首页已升级为可扩展的应用图库，后续新应用会展示在这里。",
    "gallery.aria": "应用图标图库",
    "gallery.acidicSlime": "适用于 macOS 的 Xcode 存储清理工具",
    "gallery.arithzo": "面向小学生的心算训练游戏",
    "gallery.sidewatch": "Sidewatch：Safari 画中画",
    "gallery.more.title": "下一款应用",
    "gallery.more.body": "即将推出",

    "app.iconAlt": "酸性史莱姆应用图标",
    "app.kicker": "macOS 开发者工具",
    "app.title": "酸性史莱姆",
    "app.lead": "专注于清理 Xcode 生成文件，帮助开发者快速且安全地回收磁盘空间。",
    "app.cta.macStore": "在 Mac App Store 打开",
    "app.cta.macStoreAlt": "在 Mac App Store 下载",
    "app.cta.appStore": "在 App Store 打开",
    "app.cta.appStoreAlt": "在 App Store 下载",
    "app.cta.privacy": "查看隐私政策",
    "app.cta.screens": "查看截图",
    "app.note": "此处名称与隐私政策页面中展示的本地化命名保持一致。",
    "privacy.kicker": "隐私",
    "privacy.title": "隐私政策",
    "privacy.intro": "此页面包含酸性史莱姆及其本地化版本的隐私政策。",
    "privacy.locale.heading": "简体中文 (Simplified Chinese) — 酸性史莱姆",
    "privacy.locale.label": "隐私政策",
    "privacy.locale.body": "酸性史莱姆不收集、存储或传输任何个人数据。所有文件处理均在您的 Mac 上本地进行。打赏（应用内购买）由 Apple 安全处理；开发者无法访问您的支付信息或个人信息。",

    "overview.kicker": "概览",
    "overview.title": "更省心地保持 Xcode 存储整洁。",

    "feature.1.title": "快速扫描",
    "feature.1.body": "在一个界面中查看 DerivedData、Archives、Device Support、日志等占用较大的目录。",
    "feature.2.title": "按需清理",
    "feature.2.body": "支持快速清理，也支持先审查再逐项清理。",
    "feature.3.title": "适配你的环境",
    "feature.3.body": "支持浅色/深色切换，并可配置默认或自定义目录。",

    "names.kicker": "本地化应用名称",
    "names.title": "当前使用中的各语言名称。",
    "names.aria": "本地化应用名称",

    "screens.kicker": "截图",
    "screens.title": "为专注清理而设计的界面。",
    "screens.1.title": "仪表盘",
    "screens.1.body": "在一个清晰界面中完成容量查看、扫描和清理。",
    "screens.1.alt": "酸性史莱姆仪表盘窗口",
    "screens.2.title": "设置",
    "screens.2.body": "调整外观和目录位置，使其贴合你的 Xcode 工作流。",
    "screens.2.alt": "酸性史莱姆设置窗口",

    "arithzo.iconAlt": "Arithzo 应用图标",
    "arithzo.title": "速算",
    "arithzo.subtitle": "面向小学生的心算训练",
    "arithzo.overview.kicker": "概览",
    "arithzo.overview.title": "把日常算术练习变成轻快的游戏节奏。",
    "arithzo.feature.1.title": "循序渐进练习",
    "arithzo.feature.1.body": "围绕加减乘除提供适合小学生的分层训练内容。",
    "arithzo.feature.2.title": "速度与准确并重",
    "arithzo.feature.2.body": "通过短时训练同时提升计算正确率与作答速度。",
    "arithzo.feature.3.title": "持续自我挑战",
    "arithzo.feature.3.body": "记录练习表现，持续挑战并刷新个人最佳成绩。",
    "arithzo.store.badgeAlt": "在 App Store 下载",
    "arithzo.screens.kicker": "截图",
    "arithzo.screens.title": "从主界面即可快速进入练习。",
    "arithzo.screens.1.title": "主界面",
    "arithzo.screens.1.body": "在一个清晰入口中选择练习模式与挑战模式。",
    "arithzo.screens.alt": "速算应用截图",
    "arithzo.screens.1.alt": "速算浅色模式主界面",
    "arithzo.screens.2.alt": "速算浅色模式练习设置界面",
    "arithzo.screens.3.alt": "速算深色模式主界面",
    "arithzo.screens.4.alt": "速算深色模式挑战选择界面",
    "arithzo.footer.tagline": "为学生打造的专注学习游戏。",

    "sidewatch.iconAlt": "Sidewatch 应用图标",
    "sidewatch.title": "Sidewatch",
    "sidewatch.subtitle": "Safari 画中画",
    "sidewatch.overview.kicker": "概览",
    "sidewatch.overview.title": "工作时也能让 Safari 视频保持可见。",
    "sidewatch.feature.1.title": "工具栏按钮",
    "sidewatch.feature.1.body": "从 Safari 将当前 HTML5 视频打开为画中画。",
    "sidewatch.feature.2.title": "不打断工作",
    "sidewatch.feature.2.body": "使用其他应用时，也能通过悬浮窗口继续观看。",
    "sidewatch.feature.3.title": "隐私优先",
    "sidewatch.feature.3.body": "首个版本不包含分析、账户、远程服务或应用内购买。",
    "sidewatch.store.kicker": "Mac App Store",
    "sidewatch.store.title": "即将登陆 Mac App Store",
    "sidewatch.store.platform": "平台：macOS",
    "sidewatch.store.resource": "Apple 官方 Mac App Store 资源",
    "sidewatch.footer.tagline": "Safari 画中画。",

    "privacy.arithzo.kicker": "隐私",
    "privacy.arithzo.title": "隐私政策",
    "privacy.arithzo.intro": "此页面包含速算的隐私政策。",
    "privacy.arithzo.body": "速算不收集、存储或传输任何个人数据。应用内学习记录和进度数据仅在您的设备本地处理与保存。打赏（应用内购买）由 Apple 安全处理；开发者无法访问您的支付信息或个人信息。",
    "privacy.sidewatch.kicker": "隐私",
    "privacy.sidewatch.title": "隐私政策",
    "privacy.sidewatch.intro": "此页面包含 Sidewatch 的隐私政策。",
    "privacy.sidewatch.body": "Sidewatch 不收集、存储或传输任何个人数据。视频检测和画中画操作会在您点击 Sidewatch 工具栏按钮后，于 Safari 中本地完成。Sidewatch 不使用分析、账户、远程服务或应用内购买。",

    "footer.tagline": "为 macOS 开发者打造的专注工具。",
    "footer.privacy": "查看隐私政策"
  },

  ko: {
    "controls.language": "언어",
    "controls.back": "홈으로 돌아가기",
    "controls.theme.toggle": "라이트/다크 테마 전환",
    "meta.sidewatch.title": "Sidewatch | Safari 화면 속 화면",
    "meta.sidewatch.description": "Sidewatch는 Safari의 HTML5 동영상을 툴바 버튼으로 화면 속 화면에서 엽니다.",
    "meta.privacy.title": "개인정보 처리방침 | 산성 슬라임",
    "meta.privacy.description": "산성 슬라임 개인정보 처리방침.",
    "meta.privacy.sidewatch.title": "개인정보 처리방침 | Sidewatch",
    "meta.privacy.sidewatch.description": "Sidewatch 개인정보 처리방침.",
    "gallery.sidewatch": "Sidewatch: Safari 화면 속 화면",
    "privacy.kicker": "개인정보",
    "privacy.title": "개인정보 처리방침",
    "privacy.intro": "이 페이지에는 산성 슬라임의 개인정보 처리방침이 포함되어 있습니다.",
    "privacy.locale.heading": "한국어 (Korean) — 산성 슬라임",
    "privacy.locale.label": "개인정보 처리방침",
    "privacy.locale.body": "산성 슬라임은 사용자의 개인 정보를 수집, 저장 또는 전송하지 않습니다. 모든 파일 처리는 사용자의 Mac에서 로컬로 이루어집니다. 팁(앱 내 결제)은 Apple에서 안전하게 처리하며, 개발자는 사용자의 결제 정보나 개인 정보에 접근할 수 없습니다.",
    "sidewatch.iconAlt": "Sidewatch 앱 아이콘",
    "sidewatch.title": "Sidewatch",
    "sidewatch.subtitle": "Safari 화면 속 화면",
    "sidewatch.overview.kicker": "개요",
    "sidewatch.overview.title": "작업 중에도 Safari 동영상을 계속 보이게 합니다.",
    "sidewatch.feature.1.title": "툴바 버튼",
    "sidewatch.feature.1.body": "Safari의 현재 HTML5 동영상을 화면 속 화면으로 엽니다.",
    "sidewatch.feature.2.title": "작업을 방해하지 않음",
    "sidewatch.feature.2.body": "다른 앱을 사용하는 동안에도 플로팅 창에서 계속 시청할 수 있습니다.",
    "sidewatch.feature.3.title": "개인정보 우선",
    "sidewatch.feature.3.body": "첫 릴리스에는 분석, 계정, 원격 서비스, 앱 내 구매가 없습니다.",
    "sidewatch.store.kicker": "Mac App Store",
    "sidewatch.store.title": "Mac App Store 출시 예정",
    "sidewatch.store.platform": "플랫폼: macOS",
    "sidewatch.store.resource": "Apple 공식 Mac App Store 리소스",
    "sidewatch.footer.tagline": "Safari 화면 속 화면.",
    "privacy.sidewatch.kicker": "개인정보",
    "privacy.sidewatch.title": "개인정보 처리방침",
    "privacy.sidewatch.intro": "이 페이지에는 Sidewatch의 개인정보 처리방침이 포함되어 있습니다.",
    "privacy.sidewatch.body": "Sidewatch는 개인 정보를 수집, 저장 또는 전송하지 않습니다. 동영상 감지와 화면 속 화면 동작은 Sidewatch 툴바 버튼을 클릭한 후 Safari 안에서 로컬로 수행됩니다. Sidewatch는 분석, 계정, 원격 서비스 또는 앱 내 구매를 사용하지 않습니다.",
    "footer.privacy": "개인정보 처리방침 읽기"
  },

  it: {
    "controls.language": "Lingua",
    "controls.back": "Torna alla home",
    "controls.theme.toggle": "Passa tema chiaro/scuro",
    "meta.privacy.title": "Informativa sulla privacy | Melma Acida",
    "meta.privacy.description": "Informativa sulla privacy di Melma Acida.",
    "privacy.kicker": "Privacy",
    "privacy.title": "Informativa sulla privacy",
    "privacy.intro": "Questa pagina contiene l'informativa sulla privacy di Melma Acida.",
    "privacy.locale.heading": "Italiano (Italian) — Melma Acida",
    "privacy.locale.label": "Informativa sulla privacy",
    "privacy.locale.body": "Melma Acida non raccoglie, memorizza o trasmette alcun dato personale. Tutte le operazioni sui file avvengono localmente sul tuo Mac. Le mance (acquisti in-app) sono gestite in modo sicuro da Apple; lo sviluppatore non ha accesso ai tuoi dati di pagamento o alle tue informazioni personali."
  },

  fr: {
    "controls.language": "Langue",
    "controls.back": "Retour à l'accueil",
    "controls.theme.toggle": "Basculer thème clair/sombre",
    "meta.privacy.title": "Politique de confidentialité | Gelée Acide",
    "meta.privacy.description": "Politique de confidentialité de Gelée Acide.",
    "privacy.kicker": "Confidentialité",
    "privacy.title": "Politique de confidentialité",
    "privacy.intro": "Cette page contient la politique de confidentialité de Gelée Acide.",
    "privacy.locale.heading": "Français (French) — Gelée Acide",
    "privacy.locale.label": "Politique de confidentialité",
    "privacy.locale.body": "Gelée Acide ne collecte, ne stocke ni ne transmet aucune donnée personnelle. Tout le traitement des fichiers s'effectue localement sur votre Mac. Les pourboires (achats intégrés) sont gérés de manière sécurisée par Apple ; le développeur n'a pas accès à vos informations de paiement ou à vos données personnelles."
  },

  "zh-Hant": {
    "controls.language": "語言",
    "controls.back": "返回首頁",
    "controls.theme.toggle": "切換淺色或深色主題",
    "meta.arithzo.title": "Arithzo | 面向小學生的心算訓練",
    "meta.arithzo.description": "Arithzo 透過遊戲化練習幫助小學生提升計算速度與準確度。",
    "meta.sidewatch.title": "Sidewatch | Safari 子母畫面",
    "meta.sidewatch.description": "Sidewatch 可透過工具列按鈕將 Safari 中的 HTML5 影片以子母畫面方式開啟。",
    "meta.privacy.title": "隱私政策 | 酸性史萊姆",
    "meta.privacy.description": "酸性史萊姆隱私政策。",
    "meta.privacy.arithzo.title": "隱私政策 | 速算",
    "meta.privacy.arithzo.description": "速算隱私政策。",
    "meta.privacy.sidewatch.title": "隱私政策 | Sidewatch",
    "meta.privacy.sidewatch.description": "Sidewatch 隱私政策。",
    "gallery.sidewatch": "Sidewatch：Safari 子母畫面",
    "privacy.kicker": "隱私",
    "privacy.title": "隱私政策",
    "privacy.intro": "此頁面包含酸性史萊姆的隱私政策。",
    "privacy.locale.heading": "繁體中文 (Traditional Chinese) — 酸性史萊姆",
    "privacy.locale.label": "隱私政策",
    "privacy.locale.body": "酸性史萊姆不收集、儲存或傳輸任何個人數據。所有檔案處理均在您的 Mac 上本地進行。打賞（應用內購買）由 Apple 安全處理；開發者無法訪問您的支付資訊或個人資訊。",
    "arithzo.iconAlt": "速算應用圖標",
    "arithzo.title": "速算",
    "arithzo.subtitle": "面向小學生的心算訓練",
    "arithzo.overview.kicker": "概覽",
    "arithzo.overview.title": "把日常算術練習變成輕快的遊戲節奏。",
    "arithzo.feature.1.title": "循序漸進練習",
    "arithzo.feature.1.body": "圍繞加減乘除提供適合小學生的分層訓練內容。",
    "arithzo.feature.2.title": "速度與準確並重",
    "arithzo.feature.2.body": "透過短時訓練同時提升計算正確率與作答速度。",
    "arithzo.feature.3.title": "持續自我挑戰",
    "arithzo.feature.3.body": "記錄練習表現，持續挑戰並刷新個人最佳成績。",
    "arithzo.store.badgeAlt": "在 App Store 下載",
    "app.cta.appStore": "在 App Store 打開",
    "app.cta.appStoreAlt": "在 App Store 下載",
    "arithzo.screens.kicker": "截圖",
    "arithzo.screens.title": "從主畫面即可快速進入練習。",
    "arithzo.screens.1.title": "主畫面",
    "arithzo.screens.1.body": "在一個清晰入口中選擇練習模式與挑戰模式。",
    "arithzo.screens.alt": "速算應用截圖",
    "arithzo.screens.1.alt": "速算淺色模式主畫面",
    "arithzo.screens.2.alt": "速算淺色模式練習設定畫面",
    "arithzo.screens.3.alt": "速算深色模式主畫面",
    "arithzo.screens.4.alt": "速算深色模式挑戰選擇畫面",
    "arithzo.footer.tagline": "為學生打造的專注學習遊戲。",
    "privacy.arithzo.kicker": "隱私",
    "privacy.arithzo.title": "隱私政策",
    "privacy.arithzo.intro": "此頁面包含速算的隱私政策。",
    "privacy.arithzo.body": "速算不收集、儲存或傳輸任何個人數據。應用活動與學習進度資料僅在您的裝置上本地處理與儲存。打賞（應用內購買）由 Apple 安全處理；開發者無法訪問您的支付資訊或個人資訊。",
    "sidewatch.iconAlt": "Sidewatch 應用圖示",
    "sidewatch.title": "Sidewatch",
    "sidewatch.subtitle": "Safari 子母畫面",
    "sidewatch.overview.kicker": "概覽",
    "sidewatch.overview.title": "工作時也能讓 Safari 影片保持可見。",
    "sidewatch.feature.1.title": "工具列按鈕",
    "sidewatch.feature.1.body": "從 Safari 將目前的 HTML5 影片開啟為子母畫面。",
    "sidewatch.feature.2.title": "不干擾工作",
    "sidewatch.feature.2.body": "使用其他應用程式時，也能透過浮動視窗繼續觀看。",
    "sidewatch.feature.3.title": "隱私優先",
    "sidewatch.feature.3.body": "首個版本不包含分析、帳號、遠端服務或應用程式內購買。",
    "sidewatch.store.kicker": "Mac App Store",
    "sidewatch.store.title": "即將登上 Mac App Store",
    "sidewatch.store.platform": "平台：macOS",
    "sidewatch.store.resource": "Apple 官方 Mac App Store 資源",
    "sidewatch.footer.tagline": "Safari 子母畫面。",
    "privacy.sidewatch.kicker": "隱私",
    "privacy.sidewatch.title": "隱私政策",
    "privacy.sidewatch.intro": "此頁面包含 Sidewatch 的隱私政策。",
    "privacy.sidewatch.body": "Sidewatch 不收集、儲存或傳輸任何個人數據。影片偵測和子母畫面操作會在您點擊 Sidewatch 工具列按鈕後，於 Safari 中本地完成。Sidewatch 不使用分析、帳號、遠端服務或應用程式內購買。",
    "footer.privacy": "查看隱私政策"
  },

  ar: {
    "controls.language": "اللغة",
    "controls.back": "العودة إلى الصفحة الرئيسية",
    "controls.theme.toggle": "تبديل الوضع الفاتح/الداكن",
    "meta.privacy.title": "سياسة الخصوصية | الوحل الحمضي",
    "meta.privacy.description": "سياسة الخصوصية لتطبيق الوحل الحمضي.",
    "privacy.kicker": "الخصوصية",
    "privacy.title": "سياسة الخصوصية",
    "privacy.intro": "تحتوي هذه الصفحة على سياسة الخصوصية لتطبيق الوحل الحمضي.",
    "privacy.locale.heading": "العربية (Arabic) — الوحل الحمضي",
    "privacy.locale.label": "سياسة الخصوصية",
    "privacy.locale.body": "الوحل الحمضي لا يقوم بجمع أو تخزين أو نقل أي بيانات شخصية. تتم جميع عمليات معالجة الملفات محلياً على جهاز Mac الخاص بك. تتم معالجة الإكراميات (عمليات الشراء داخل التطبيق) بشكل آمن بواسطة Apple؛ ولا يمكن للمطور الوصول إلى معلومات الدفع أو بياناتك الشخصية."
  }
};

(() => {
  const SUPPORTED_LOCALES = ["en", "ja", "ko", "it", "fr", "zh-Hans", "zh-Hant", "ar"];
  const LOCALE_STORAGE_KEY = "site-locale";
  const THEME_STORAGE_KEY = "site-theme";
  const DEFAULT_LOCALE = "en";
  const SCREENSHOTS = {
    app: {
      en: {
        dashboard: "assets/images/localized/acidicslime-dashboard-en.png",
        settings: "assets/images/localized/acidicslime-settings-en.png"
      },
      ja: {
        dashboard: "assets/images/localized/acidicslime-dashboard-ja.png",
        settings: "assets/images/localized/acidicslime-settings-ja.png"
      },
      "zh-Hans": {
        dashboard: "assets/images/localized/acidicslime-dashboard-zh-Hans.png",
        settings: "assets/images/localized/acidicslime-settings-zh-Hans.png"
      }
    },
    arithzo: {
      en: {
        light: {
          screen1: "assets/images/localized/arithzo-gallery-light-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-light-practice.jpg"
        },
        dark: {
          screen1: "assets/images/localized/arithzo-gallery-dark-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-dark-challenge.jpg"
        }
      },
      ja: {
        light: {
          screen1: "assets/images/localized/arithzo-gallery-light-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-light-practice.jpg"
        },
        dark: {
          screen1: "assets/images/localized/arithzo-gallery-dark-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-dark-challenge.jpg"
        }
      },
      "zh-Hans": {
        light: {
          screen1: "assets/images/localized/arithzo-gallery-light-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-light-practice.jpg"
        },
        dark: {
          screen1: "assets/images/localized/arithzo-gallery-dark-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-dark-challenge.jpg"
        }
      },
      "zh-Hant": {
        light: {
          screen1: "assets/images/localized/arithzo-gallery-light-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-light-practice.jpg"
        },
        dark: {
          screen1: "assets/images/localized/arithzo-gallery-dark-main.jpg",
          screen2: "assets/images/localized/arithzo-gallery-dark-challenge.jpg"
        }
      }
    }
  };

  const tr = (locale, key) => {
    const table = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
    return table[key] || TRANSLATIONS[DEFAULT_LOCALE][key] || key;
  };

  const normalizeLocale = (value) => {
    if (!value) return null;
    const lowered = String(value).toLowerCase();
    if (lowered === "en" || lowered.startsWith("en-")) return "en";
    if (lowered === "ja" || lowered.startsWith("ja-")) return "ja";
    if (lowered === "ko" || lowered.startsWith("ko-")) return "ko";
    if (lowered === "it" || lowered.startsWith("it-")) return "it";
    if (lowered === "fr" || lowered.startsWith("fr-")) return "fr";
    if (lowered === "ar" || lowered.startsWith("ar-")) return "ar";
    if (lowered === "zh" || lowered.startsWith("zh-cn") || lowered.startsWith("zh-hans") || lowered.startsWith("zh-sg")) {
      return "zh-Hans";
    }
    if (lowered.startsWith("zh-tw") || lowered.startsWith("zh-hk") || lowered.startsWith("zh-hant")) {
      return "zh-Hant";
    }
    return null;
  };

  const safeGet = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const safeSet = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage write failures.
    }
  };

  const queryLocale = new URLSearchParams(window.location.search).get("lang");
  const storedLocale = safeGet(LOCALE_STORAGE_KEY);
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
      element.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
    });
  };

  const applyTranslations = (currentLocale) => {
    document.documentElement.lang = currentLocale === "zh-Hans" ? "zh-CN" : currentLocale;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = tr(currentLocale, key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = (element.getAttribute("data-i18n-attr") || "").split(",");
      mappings.forEach((mapping) => {
        const [attribute, key] = mapping.split(":").map((item) => item && item.trim());
        if (attribute && key) {
          element.setAttribute(attribute, tr(currentLocale, key));
        }
      });
    });

    const titleKey = document.documentElement.dataset.titleKey || "meta.app.title";
    document.title = tr(currentLocale, titleKey);
  };

  const applyLocalizedScreenshots = (currentLocale) => {
    const pageKey = document.documentElement.dataset.page || "app";
    const pageShots = SCREENSHOTS[pageKey];
    if (!pageShots) return;

    const localeShots = pageShots[currentLocale] || pageShots[DEFAULT_LOCALE];
    if (!localeShots) return;

    const shots = (localeShots.light && localeShots.dark)
      ? (localeShots[theme] || localeShots.light)
      : localeShots;
    if (!shots) return;

    document.querySelectorAll("[data-shot]").forEach((image) => {
      const shot = image.dataset.shot;
      const src = shots[shot];
      if (src) image.setAttribute("src", src);
    });
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

  const syncNameCards = (currentLocale) => {
    const activeMap = {
      en: ["en"],
      ja: ["ja"],
      "zh-Hans": ["zh-Hans", "zh-Hant"]
    };

    const active = new Set(activeMap[currentLocale] || []);
    document.querySelectorAll("[data-name-locale]").forEach((card) => {
      card.classList.toggle("is-current", active.has(card.dataset.nameLocale));
    });
  };

  const applyThemeAwareAssets = (currentTheme) => {
    document.querySelectorAll("[data-theme-asset-light][data-theme-asset-dark]").forEach((element) => {
      const light = element.getAttribute("data-theme-asset-light");
      const dark = element.getAttribute("data-theme-asset-dark");
      if (!light || !dark) return;

      const nextSrc = currentTheme === "dark" ? dark : light;
      if (element.getAttribute("src") !== nextSrc) {
        element.setAttribute("src", nextSrc);
      }
    });
  };

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = safeGet(THEME_STORAGE_KEY);
  if (theme !== "light" && theme !== "dark") {
    theme = systemDark ? "dark" : "light";
  }

  const applyTheme = (value) => {
    theme = value === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    safeSet(THEME_STORAGE_KEY, theme);
    applyThemeAwareAssets(theme);
    applyLocalizedScreenshots(locale);

    const themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      themeButton.textContent = theme === "dark" ? "☾" : "☀";
      themeButton.title = tr(locale, "controls.theme.toggle");
    }
  };

  applyTranslations(locale);
  applyLocalizedScreenshots(locale);
  applyLocalizedLinks(locale);
  updateURLLocale(locale);
  syncLanguageButtons(locale);
  syncNameCards(locale);
  applyTheme(theme);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = normalizeLocale(button.dataset.locale);
      if (!selected) return;

      locale = selected;
      safeSet(LOCALE_STORAGE_KEY, locale);
      applyTranslations(locale);
      applyLocalizedScreenshots(locale);
      applyLocalizedLinks(locale);
      updateURLLocale(locale);
      syncLanguageButtons(locale);
      syncNameCards(locale);
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
