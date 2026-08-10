/**
 * All user-facing copy, keyed by language.
 *
 * Content is drawn from the English résumé and the Japanese 履歴書.
 * The Japanese tree is written toward 職務経歴書 conventions: です・ます
 * for prose, 体言止め for bullets, factual over conversational.
 *
 * The `en` and `ja` trees are the same shape — if you add a field to one,
 * add it to the other or the UI renders blank.
 *
 * This file is public: the repo is public and every string here also ships
 * inside the JavaScript bundle. Nothing goes in that you would not put on
 * a billboard.
 *
 * Deliberately absent, and to stay absent: phone number, date of birth,
 * street address, prefecture, city. Location stays coarse at
 * "Kyushu, Japan" / 「日本・九州」. Contact is email only.
 */

export const content = {
  /* =================================================================
   * ENGLISH
   * ================================================================= */
  en: {
    meta: {
      title: 'Akio Abe — Software Engineer',
      description:
        'Backend and full-stack software engineer. Java, Spring Boot, REST APIs, and cloud infrastructure. Based in Kyushu, Japan.',
    },

    nav: {
      items: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Stack' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Work' },
        { id: 'contact', label: 'Contact' },
      ],
      resume: 'Résumé',
      menu: 'Menu',
      close: 'Close',
    },

    hero: {
      status: 'Open to remote roles',
      greeting: 'Hello — I’m',
      name: 'Akio Abe',
      roles: ['Software Engineer', 'Backend Developer', 'Full-Stack Engineer'],
      tagline:
        'I build backend software — Java and Spring Boot services, REST APIs, and the database and cloud layers underneath them. Three years of it, for U.S. federal programs and business operations.',
      location: 'Kyushu, Japan · Remote',
      ctaPrimary: 'See the work',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll',
    },

    stats: [
      { value: '3+', label: 'Years engineering' },
      { value: '7', label: 'Languages I ship in' },
      { value: '2', label: 'Enterprise consultancies' },
      { value: 'N3', label: 'JLPT certified' },
    ],

    about: {
      kicker: '01 — About',
      title: 'Backend engineer. Java, Spring Boot, and the layers underneath.',
      paragraphs: [
        'I write backend software: Spring Boot services, REST APIs, and the database and cloud infrastructure they sit on. Three years of it — first as a consultant at CGI building full-stack systems for business operations, then at Accenture Federal Services on enterprise applications for U.S. federal government customers.',
        'Before software I served three years as an infantryman in the U.S. Army. It taught me to be accountable for work other people depend on, and to keep a level head when a deadline does not move.',
        'I am now based in Kyushu, finishing a B.S. in Software Engineering at Western Governors University and continuing into an M.S. with an AI engineering focus. I passed JLPT N3 in December 2025 and am still working on my Japanese.',
        'Alongside that I am building practical experience with AI coding agents — learning where they genuinely speed up delivery and where they don’t — and working them into my day-to-day process.',
      ],
      facts: [
        { k: 'Based in', v: 'Kyushu, Japan' },
        { k: 'Focus', v: 'Backend · REST APIs · Full-stack' },
        { k: 'Languages', v: 'English (native) · Japanese (JLPT N3)' },
        { k: 'Building', v: 'Diplomatia — diplomatia.net' },
        { k: 'Currently', v: 'B.S. Software Engineering, WGU' },
      ],
    },

    skills: {
      kicker: '02 — Stack',
      title: 'What I work in',
      note: 'Grouped by layer. Everything here is something I have shipped with, not something I have read about.',
      groups: [
        {
          name: 'Languages',
          accent: 'violet',
          items: ['Java', 'Go', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'C#'],
        },
        {
          name: 'Backend',
          accent: 'cyan',
          items: [
            'Spring Boot',
            'Spring MVC',
            'REST APIs',
            'Hibernate / JPA',
            'Maven',
            'Microservices',
          ],
        },
        {
          name: 'Frontend',
          accent: 'lime',
          items: ['Angular', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
        },
        {
          name: 'Databases',
          accent: 'rose',
          items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'MongoDB'],
        },
        {
          name: 'Cloud & DevOps',
          accent: 'violet',
          items: [
            'AWS S3',
            'AWS CloudFront',
            'AWS IAM',
            'AWS CloudWatch',
            'Docker',
            'Git',
            'GitLab CI/CD',
          ],
        },
        {
          name: 'Practices',
          accent: 'cyan',
          items: [
            'Object-oriented design',
            'Agile development',
            'API integration',
            'Database design',
            'Unit testing',
            'Code review',
            'AI coding agents',
          ],
        },
      ],
    },

    experience: {
      kicker: '03 — Experience',
      title: 'Where the hours went',
      current: 'Present',
      roles: [
        {
          company: 'Accenture Federal Services',
          role: 'Software Engineer, Sr. Analyst',
          period: 'Oct 2023 — Aug 2024',
          location: 'San Antonio, TX, USA',
          current: false,
          summary:
            'Java enterprise applications for U.S. federal government customers, delivered in cross-functional Agile teams.',
          points: [
            'Developed and maintained Java-based enterprise applications supporting U.S. federal government customers.',
            'Implemented backend features and REST API functionality using Spring-based technologies.',
            'Collaborated with cross-functional Agile teams to deliver software enhancements and defect resolutions.',
            'Participated in code reviews, testing, and troubleshooting to improve application reliability and maintainability.',
          ],
          tags: ['Java', 'Spring', 'REST APIs', 'Agile'],
        },
        {
          company: 'CGI Inc.',
          role: 'Consultant, Software Developer',
          period: 'Mar 2022 — Oct 2023',
          location: 'Belton, TX, USA',
          current: false,
          summary:
            'Full-stack delivery for business operations — requirements through production support.',
          points: [
            'Designed and implemented full-stack software solutions using Java, Spring Boot, SQL, and modern web technologies.',
            'Developed database-driven application features and integrations supporting business operations.',
            'Gathered technical requirements from stakeholders and translated them into maintainable software solutions.',
            'Contributed to Agile processes including sprint planning, code reviews, testing, and production support.',
          ],
          tags: ['Java', 'Spring Boot', 'SQL', 'Full-stack'],
        },
        {
          company: 'United States Army',
          role: 'Infantryman',
          period: 'Aug 2015 — Apr 2018',
          location: 'Fort Drum, NY, USA',
          current: false,
          summary:
            'Three years in an infantry unit before moving into software.',
          points: [
            'Led small teams in high-tempo operational and training environments requiring accountability and attention to detail.',
            'Developed teamwork, leadership, and problem-solving skills in mission-critical situations.',
          ],
          tags: ['Leadership', 'Team operations'],
        },
      ],
    },

    projects: {
      kicker: '04 — Work',
      title: 'Selected projects',
      note: 'Things built outside of client work.',
      filters: { all: 'All', game: 'Games', software: 'Software' },
      viewLabel: 'View project',
      empty: 'Nothing here yet.',
      items: [
        {
          id: 'diplomatia',
          kind: 'game',
          title: 'Diplomatia',
          year: '2026',
          status: 'Live — in active development',
          blurb:
            'A persistent geopolitical strategy game in the browser. Players found a nation, develop provinces, run trade convoys that take real time to arrive, and negotiate alliances — or raid and go to war once their new-player protection lapses.',
          tags: ['Go', 'React', 'MySQL', 'Game systems'],
          role: 'Solo developer',
          href: 'https://diplomatia.net',
        },
        {
          id: 'etheirys',
          kind: 'software',
          title: 'Etheirys',
          year: '',
          status: 'Personal project',
          blurb:
            'A Java Spring Boot application that automates alliance management and administrative workflows for online gaming communities. Third-party API and Discord bot integration handle user management, communication, and event-driven command execution.',
          tags: ['Java', 'Spring Boot', 'REST APIs', 'Discord API'],
          role: 'Solo developer',
          href: '',
        },
      ],
    },

    education: {
      kicker: '05 — Education',
      title: 'Education & credentials',
      items: [
        {
          school: 'Western Governors University',
          award: 'M.S. Software Engineering — AI Engineering',
          period: 'Nov 2026 — Apr 2027 (expected)',
          detail: 'Graduate study with a specialization in AI engineering.',
        },
        {
          school: 'Western Governors University',
          award: 'B.S. Software Engineering',
          period: 'May 2026 — Oct 2026 (expected)',
          detail: 'Competency-based undergraduate degree in software engineering.',
        },
        {
          school: 'Ritsumeikan Asia Pacific University',
          award: 'International Relations',
          period: 'Oct 2024 — Mar 2026',
          detail: 'Withdrew before completion.',
        },
        {
          school: 'Western Governors University',
          award: 'Excellence Award — Back-End Programming',
          period: 'Jun 2026',
          detail: 'Awarded for distinguished work on the back-end programming assessment.',
        },
        {
          school: 'Japanese Language Proficiency Test',
          award: 'JLPT N3',
          period: 'Dec 2025',
          detail: 'Passed December 2025. Continuing toward a higher level.',
        },
      ],
    },

    contact: {
      kicker: '06 — Contact',
      title: 'Let’s talk',
      body: 'Open to backend and full-stack roles. If you have a question about anything above, or a role you think fits, email is the fastest way to reach me.',
      cta: 'Send an email',
      availability: 'Seeking remote work from Kyushu, Japan. Flexible depending on the role.',
    },

    footer: {
      built: 'Built with React, Vite, and Tailwind.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },

    lang: {
      toggleLabel: 'Switch language',
      to: '日本語',
      current: 'EN',
    },

  },

  /* =================================================================
   * 日本語
   * ================================================================= */
  ja: {
    meta: {
      title: '阿部アキオ — ソフトウェアエンジニア',
      description:
        'バックエンド・フルスタック開発を専門とするソフトウェアエンジニア。Java、Spring Boot、REST API、クラウド基盤。九州在住。',
    },

    nav: {
      items: [
        { id: 'about', label: '概要' },
        { id: 'skills', label: '技術' },
        { id: 'experience', label: '職務経歴' },
        { id: 'projects', label: '制作物' },
        { id: 'contact', label: '連絡先' },
      ],
      resume: '履歴書',
      menu: 'メニュー',
      close: '閉じる',
    },

    hero: {
      status: 'リモート勤務でのご相談を承ります',
      greeting: 'はじめまして',
      name: '阿部 アキオ',
      roles: ['ソフトウェアエンジニア', 'バックエンド開発者', 'フルスタックエンジニア'],
      tagline:
        'バックエンド開発を専門としております。Java および Spring Boot によるサービス開発、REST API の設計・実装、データベースおよびクラウド基盤の構築に、3年以上従事してまいりました。',
      location: '日本・九州／リモート',
      ctaPrimary: '制作物を見る',
      ctaSecondary: 'お問い合わせ',
      scroll: 'スクロール',
    },

    stats: [
      { value: '3年+', label: '実務経験' },
      { value: '7', label: '使用言語' },
      { value: '2社', label: '大手コンサルティング' },
      { value: 'N3', label: '日本語能力試験' },
    ],

    about: {
      kicker: '01 — 概要',
      title: 'バックエンド開発を軸とするソフトウェアエンジニアです。',
      paragraphs: [
        'Java および Spring Boot によるサービス開発、REST API の設計・実装、データベース設計、クラウド基盤の構築を主に担当してまいりました。CGI Inc. ではコンサルタントとして業務系システムのフルスタック開発に、Accenture Federal Services では米国連邦政府機関向けエンタープライズアプリケーションの開発に従事いたしました。',
        'ソフトウェア業界に入る前は、米国陸軍に歩兵として3年間在籍しておりました。厳格な期限と高い責任が求められる環境において、チームでの業務遂行と課題解決の基礎を身につけております。',
        '現在は九州を拠点とし、Western Governors University のソフトウェアエンジニアリング学士課程を修了予定です。その後、同大学院修士課程（AIエンジニアリング専攻）へ進学いたします。2025年12月に日本語能力試験N3に合格し、現在も学習を継続しております。',
        'あわせて、AIコーディングエージェントの実践的な活用にも取り組んでおります。開発速度の向上に有効な場面とそうでない場面を見極めながら、日々の開発プロセスに取り入れております。',
      ],
      facts: [
        { k: '居住地', v: '日本・九州' },
        { k: '専門領域', v: 'バックエンド・REST API・フルスタック' },
        { k: '語学', v: '英語（母語）・日本語（JLPT N3）' },
        { k: '開発中', v: 'Diplomatia（diplomatia.net）' },
        { k: '現在', v: 'ソフトウェアエンジニアリング学士課程 在学中' },
      ],
    },

    skills: {
      kicker: '02 — 技術',
      title: '使用技術',
      note: 'レイヤー別に整理しております。いずれも実務または個人開発で使用した経験のあるものです。',
      groups: [
        {
          name: '言語',
          accent: 'violet',
          items: ['Java', 'Go', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'C#'],
        },
        {
          name: 'バックエンド',
          accent: 'cyan',
          items: [
            'Spring Boot',
            'Spring MVC',
            'REST API',
            'Hibernate / JPA',
            'Maven',
            'マイクロサービス',
          ],
        },
        {
          name: 'フロントエンド',
          accent: 'lime',
          items: ['Angular', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
        },
        {
          name: 'データベース',
          accent: 'rose',
          items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'MongoDB'],
        },
        {
          name: 'クラウド・DevOps',
          accent: 'violet',
          items: [
            'AWS S3',
            'AWS CloudFront',
            'AWS IAM',
            'AWS CloudWatch',
            'Docker',
            'Git',
            'GitLab CI/CD',
          ],
        },
        {
          name: '開発手法',
          accent: 'cyan',
          items: [
            'オブジェクト指向設計',
            'アジャイル開発',
            'API連携',
            'データベース設計',
            '単体テスト',
            'コードレビュー',
            'AIコーディングエージェント活用',
          ],
        },
      ],
    },

    experience: {
      kicker: '03 — 職務経歴',
      title: 'これまでの業務',
      current: '現在',
      roles: [
        {
          company: 'Accenture Federal Services',
          role: 'ソフトウェアエンジニア／シニアアナリスト',
          period: '2023年10月 — 2024年8月',
          location: '米国テキサス州サンアントニオ',
          current: false,
          summary:
            '米国連邦政府機関向けの Java エンタープライズアプリケーション開発を、部門横断のアジャイルチームにて担当。',
          points: [
            '米国連邦政府機関向け Java エンタープライズアプリケーションの開発および保守。',
            'Spring 系技術を用いたバックエンド機能および REST API の実装。',
            '部門横断のアジャイルチームと連携した機能改善および不具合対応。',
            'コードレビュー、テスト、障害調査への参加による信頼性・保守性の向上。',
          ],
          tags: ['Java', 'Spring', 'REST API', 'アジャイル'],
        },
        {
          company: 'CGI Inc.',
          role: 'コンサルタント／ソフトウェア開発者',
          period: '2022年3月 — 2023年10月',
          location: '米国テキサス州ベルトン',
          current: false,
          summary:
            '業務系システムのフルスタック開発を、要件定義から本番運用支援まで一貫して担当。',
          points: [
            'Java、Spring Boot、SQL および各種Web技術を用いたフルスタックソリューションの設計・実装。',
            '業務を支えるデータベース連携機能および外部システム連携の開発。',
            'ステークホルダーからの技術要件のヒアリングと、保守性を考慮した設計への落とし込み。',
            'スプリント計画、コードレビュー、テスト、本番運用支援を含むアジャイル開発への参画。',
          ],
          tags: ['Java', 'Spring Boot', 'SQL', 'フルスタック'],
        },
        {
          company: 'United States Army（米国陸軍）',
          role: '歩兵',
          period: '2015年8月 — 2018年4月',
          location: '米国ニューヨーク州フォートドラム',
          current: false,
          summary: 'ソフトウェア業界へ転向する前、歩兵部隊に3年間在籍。',
          points: [
            '厳格な規律と正確性が求められる運用・訓練環境における小規模チームの指揮。',
            '重要度の高い任務を通じたチームワーク、リーダーシップ、課題解決能力の習得。',
          ],
          tags: ['リーダーシップ', 'チーム運用'],
        },
      ],
    },

    projects: {
      kicker: '04 — 制作物',
      title: '主な制作物',
      note: '業務外で開発したものです。',
      filters: { all: 'すべて', game: 'ゲーム', software: 'ソフトウェア' },
      viewLabel: '詳しく見る',
      empty: '該当する項目がありません。',
      items: [
        {
          id: 'diplomatia',
          kind: 'game',
          title: 'Diplomatia',
          year: '2026年',
          status: '公開中・開発継続中',
          blurb:
            'ブラウザ上で動作する永続型の地政学ストラテジーゲームです。プレイヤーは国家を建国し、州を開発し、到着までに実時間を要する交易を行い、同盟を結びます。初期保護期間の終了後は、侵攻や戦争を仕掛けることも可能です。',
          tags: ['Go', 'React', 'MySQL', 'ゲームシステム'],
          role: '個人開発',
          href: 'https://diplomatia.net',
        },
        {
          id: 'etheirys',
          kind: 'software',
          title: 'Etheirys',
          year: '',
          status: '個人開発',
          blurb:
            'オンラインゲームコミュニティ向けに、アライアンス管理および運営業務を自動化する Java Spring Boot アプリケーションです。複数の外部APIおよび Discord Bot と連携し、ユーザー管理、連絡、イベント駆動型のコマンド実行を担います。',
          tags: ['Java', 'Spring Boot', 'REST API', 'Discord API'],
          role: '個人開発',
          href: '',
        },
      ],
    },

    education: {
      kicker: '05 — 学歴・資格',
      title: '学歴・免許・資格',
      items: [
        {
          school: 'Western Governors University',
          award: 'ソフトウェアエンジニアリング修士課程（AIエンジニアリング専攻）',
          period: '2026年11月 — 2027年4月 修了予定',
          detail: 'AIエンジニアリングを専攻。',
        },
        {
          school: 'Western Governors University',
          award: 'ソフトウェアエンジニアリング学部',
          period: '2026年5月 — 2026年10月 卒業予定',
          detail: '能力評価型（コンピテンシーベース）の学士課程。',
        },
        {
          school: '立命館アジア太平洋大学',
          award: '国際関係学部',
          period: '2024年10月 — 2026年3月',
          detail: '中途退学。',
        },
        {
          school: 'Western Governors University',
          award: 'Excellence Award（優秀賞）— Back-End Programming',
          period: '2026年6月',
          detail: 'バックエンドプログラミング課題における優秀な成果に対して授与。',
        },
        {
          school: '日本語能力試験',
          award: 'JLPT N3 合格',
          period: '2025年12月',
          detail: '2025年12月合格。上位級に向けて学習を継続中。',
        },
      ],
    },

    contact: {
      kicker: '06 — 連絡先',
      title: 'お問い合わせ',
      body: 'バックエンドおよびフルスタック開発のポジションについて、ご相談を承っております。上記の内容に関するご質問も含め、メールにてご連絡いただけますと幸いです。',
      cta: 'メールを送る',
      availability: '九州からのリモート勤務を希望しております。業務内容に応じて柔軟に対応いたします。',
    },

    footer: {
      built: 'React・Vite・Tailwind で構築。',
      rights: 'All rights reserved.',
      backToTop: 'ページ上部へ',
    },

    lang: {
      toggleLabel: '言語を切り替える',
      to: 'English',
      current: 'JA',
    },

  },
}

export const LANGUAGES = ['en', 'ja']
