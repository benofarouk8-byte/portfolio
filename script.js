/**
 * FAROUK BENOUALI - PORTFOLIO INTERACTION ENGINE
 * Multilingual (EN / FR / AR RTL), Dark/Light Mode, Filter Engine & Interactive Modals
 */

const translations = {
  en: {
    roleTitle: "Full-Stack Web & Desktop Developer | 3D Architecture",
    openToWork: "Open for Opportunities & Projects",
    heroGreeting: "Hi, I am",
    heroDescription: "Software engineer and passionate builder from Aïn Témouchent, Algeria. Specializing in full-stack web platforms (React, Next.js), Electron desktop applications, and actively preparing to pioneer 3D building architecture & spatial systems.",
    exploreProjects: "Explore Projects",
    getInTouch: "Get in Touch",
    location: "Aïn Témouchent, Algeria",
    experienceYears: "Active Builder",
    statsProjects: "Key Projects",
    statsStack: "Tech Stacks Mastered",
    statsCode: "Production Clean Code",
    statsLang: "Trilingual (EN/FR/AR)",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Tech Stack",
    navTimeline: "Journey",
    navContact: "Contact",
    filterAll: "All Projects",
    filterFullStack: "Full-Stack & Web",
    filterFlutter: "PC & Desktop Apps",
    filterDataAI: "AI & Data Pipelines",
    viewDemo: "Live Demo",
    viewDetails: "Architecture & Details",
    aboutTitle: "About Me",
    aboutHeading: "Architecting resilient PC desktop, web, and future 3D spatial software from Algeria to the world.",
    aboutP1: "I am a software engineer with hands-on expertise building end-to-end applications from scratch. My focus centers on modern web platforms with React 18, TypeScript, and Next.js, extended to Electron-based desktop applications.",
    aboutP2: "Beyond interface design, I engineer robust data pipelines and interactive systems—such as parsing 130,000+ openFDA medical records with Python and building marketplace match algorithms. Currently, I am expanding my technical frontiers into 3D building architecture, CAD/BIM systems, and spatial web graphics.",
    aboutH1Title: "Problem Solver",
    aboutH1Desc: "Crafting pragmatic digital tools that solve daily problems.",
    aboutH2Title: "PC & Web Specialist",
    aboutH2Desc: "Fluent in cutting-edge web ecosystems and Electron desktop applications.",
    skillsTitle: "Core Competencies",
    skillsSubtitle: "Languages, frameworks and tools I use to build websites.",
    catFrontend: "Frontend",
    catBackend: "Backend & Databases",
    catLanguages: "Languages",
    catTools: "Tools",
    timelineTitle: "Milestones",
    timelineSubtitle: "The path of engineering real-world projects and robust architectures.",
    t1Year: "2026",
    t1Title: "WinWin DZ & Scalable Marketplace Architecture",
    t1Desc: "Designed an Algerian on-demand problem-solving marketplace with trilingual RTL support and dynamic provider ranking algorithms.",
    t2Year: "2026",
    t2Title: "POS Engine (React & Electron)",
    t2Desc: "Engineered an offline-first Point of Sale desktop suite with local SQLite storage, barcode-ready workflows, and real-time inventory tracking.",
    t3Year: "2026",
    t3Title: "MedFinder & Data Mining Pipeline",
    t3Desc: "Built an openFDA pharmaceutical database ingestion pipeline processing 130K+ drug labels for shortage alternative discovery.",
    t4Year: "2025 - 2026",
    t4Title: "Lycée Ahmed Belhadj Said ERP System",
    t4Desc: "Architected a multi-tier web-based school management platform for grading, schedules, and inventory.",
    contactTitle: "Let's Build Something Together",
    contactSubtitle: "Have an exciting project, freelance opportunity, or software engineering role? Let's connect.",
    contactEmailLabel: "Direct Email",
    contactLocationLabel: "Base Location",
    contactLinkedInLabel: "Professional Profile",
    contactGitHubLabel: "Source Code & Repos",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send Message",
    copyBtn: "Copy",
    copiedToast: "Email copied to clipboard!",
    msgSentToast: "Message received! Farouk will reply shortly.",
    closeModal: "Close",
    modalTechTitle: "Technologies & Architecture",
    modalHighlightsTitle: "Key Technical Highlights"
  },
  fr: {
    roleTitle: "Développeur Web Full-Stack & Applications Desktop | Architecture 3D",
    openToWork: "Disponible pour opportunités & projets",
    heroGreeting: "Bonjour, je suis",
    heroDescription: "Ingénieur logiciel et développeur passionné basé à Aïn Témouchent, Algérie. Spécialisé dans les systèmes web full-stack modernes (React, Next.js), les applications desktop avec Electron, et en préparation active pour l'architecture 3D et les technologies spatiales.",
    exploreProjects: "Découvrir mes projets",
    getInTouch: "Me contacter",
    location: "Aïn Témouchent, Algérie",
    experienceYears: "Créateur Actif",
    statsProjects: "Projets Clés",
    statsStack: "Technologies Maîtrisées",
    statsCode: "Code Propre & Testé",
    statsLang: "Trilingue (EN/FR/AR)",
    navAbout: "À propos",
    navProjects: "Projets",
    navSkills: "Compétences",
    navTimeline: "Parcours",
    navContact: "Contact",
    filterAll: "Tous les projets",
    filterFullStack: "Full-Stack & Web",
    filterFlutter: "Logiciels & Applications PC",
    filterDataAI: "IA & Pipelines de données",
    viewDemo: "Démo en direct",
    viewDetails: "Architecture & Détails",
    aboutTitle: "À propos de moi",
    aboutHeading: "Concevoir des logiciels PC de bureau, des plateformes web et des systèmes 3D innovants.",
    aboutP1: "Je suis un développeur logiciel avec une solide expérience dans la conception d'applications complètes. Mon expertise s'articule autour du web moderne avec React 18, TypeScript et Next.js, étendue aux applications desktop avec Electron.",
    aboutP2: "Au-delà de l'interface, je conçois des pipelines de données (traitement de 130 000+ notices médicales openFDA avec Python) et je prépare activement mon expansion dans les technologies de visualisation architecturale 3D, BIM et spatial web.",
    aboutH1Title: "Orienté Solutions",
    aboutH1Desc: "Création d'outils numériques pragmatiques résolvant des besoins réels.",
    aboutH2Title: "Spécialiste PC & Web",
    aboutH2Desc: "Maîtrise approfondie du web moderne et des applications desktop avec Electron.",
    skillsTitle: "Compétences Techniques",
    skillsSubtitle: "Langages, frameworks et outils que j'utilise pour créer des sites web.",
    catFrontend: "Frontend",
    catBackend: "Backend & Bases de données",
    catLanguages: "Langages de programmation",
    catTools: "Outils",
    timelineTitle: "Parcours & Réalisations",
    timelineSubtitle: "L'évolution de mes projets et de mes architectures logicielles.",
    t1Year: "2026",
    t1Title: "WinWin DZ & Marketplace de Services",
    t1Desc: "Conception d'une plateforme algérienne de mise en relation avec support trilingue RTL et algorithme de scoring de prestataires.",
    t2Year: "2026",
    t2Title: "Suite POS (React & Electron)",
    t2Desc: "Développement d'une application de caisse et de gestion des stocks hors-ligne avec base SQLite locale et reporting en temps réel.",
    t3Year: "2026",
    t3Title: "MedFinder & Pipeline de Données Santé",
    t3Desc: "Automatisation de l'ingestion de 130K+ notices de médicaments openFDA pour trouver des alternatives aux pénuries.",
    t4Year: "2025 - 2026",
    t4Title: "ERP Lycée Ahmed Belhadj Said",
    t4Desc: "Conception d'une plateforme web de gestion scolaire multi-niveaux pour les notes, emplois du temps et inventaire.",
    contactTitle: "Construisons un projet ensemble",
    contactSubtitle: "Vous avez un projet innovant, une opportunité freelance ou un poste en développement logiciel ? Échangeons.",
    contactEmailLabel: "Email Direct",
    contactLocationLabel: "Localisation",
    contactLinkedInLabel: "Profil Professionnel",
    contactGitHubLabel: "Dépôts & Code Source",
    formName: "Votre Nom",
    formEmail: "Votre Email",
    formSubject: "Objet",
    formMessage: "Message",
    formSend: "Envoyer le message",
    copyBtn: "Copier",
    copiedToast: "Email copié dans le presse-papier !",
    msgSentToast: "Message bien reçu ! Farouk vous répondra rapidement.",
    closeModal: "Fermer",
    modalTechTitle: "Technologies & Architecture",
    modalHighlightsTitle: "Points Techniques Majeurs"
  },
  ar: {
    roleTitle: "مطور ويب شامل (Full-Stack) وتطبيقات سطح المكتب | متخصص قادم في العمارة ثلاثية الأبعاد (3D Architecture)",
    openToWork: "متاح للمشاريع والفرص المهنية",
    heroGreeting: "مرحباً، أنا",
    heroDescription: "مهندس ومطور برمجيات من عين تموشنت، الجزائر. متخصص في بناء تطبيقات الويب الشاملة الحديثة (React, Next.js)، وتطبيقات سطح المكتب باستخدام Electron، مع التحضير الفعلي للانطلاق في هندسة النمذجة المعمارية ثلاثية الأبعاد (3D Building Architecture & WebGL).",
    exploreProjects: "استعراض المشاريع",
    getInTouch: "تواصل معي",
    location: "عين تموشنت، الجزائر",
    experienceYears: "شغف وابتكار",
    statsProjects: "مشاريع برمجية متكاملة",
    statsStack: "تقنيات وأطر عمل متقنة",
    statsCode: "كود نظيف ومعياري",
    statsLang: "ثلاث لغات (عربي/إنجليزي/فرنسي)",
    navAbout: "عني",
    navProjects: "المشاريع",
    navSkills: "المهارات",
    navTimeline: "المسار",
    navContact: "تواصل",
    filterAll: "كافة المشاريع",
    filterFullStack: "الويب والتطبيقات الشاملة",
    filterFlutter: "تطبيقات سطح المكتب (PC)",
    filterDataAI: "الذكاء الاصطناعي ومعالجة البيانات",
    viewDemo: "تجربة حية",
    viewDetails: "المعمارية والتفاصيل",
    aboutTitle: "نبذة عني",
    aboutHeading: "أصمم وأبني برمجيات سطح مكتب للحواسيب وحلول الويب وتقنيات 3D المبتكرة من الجزائر إلى العالم.",
    aboutP1: "أنا مطور برمجيات ذو خبرة تطبيقية في بناء الأنظمة البرمجية من الصفر. تتركز خبرتي في بناء واجهات الويب المعاصرة بأحدث تقنيات React 18 و TypeScript و Next.js، بالإضافة إلى تطبيقات سطح المكتب باستخدام Electron.",
    aboutP2: "لا أكتفي بالواجهات، بل أهتم بهندسة ومعالجة البيانات الضخمة (مثل استخراج 130 ألف دواء من openFDA بلغة Python)، وأستعد حالياً لدمج برمجيات الويب مع تقنيات النمذجة المعمارية ثلاثية الأبعاد (3D Architecture & Three.js).",
    aboutH1Title: "حل المشكلات الواقعية",
    aboutH1Desc: "تحويل التحديات اليومية إلى أدوات وحلول برمجية عملية وسهلة الاستخدام.",
    aboutH2Title: "تطبيقات الحاسوب والويب",
    aboutH2Desc: "إتقان تطبيقات الويب الحديثة وتطبيقات سطح المكتب باستخدام Electron.",
    skillsTitle: "المهارات والتقنيات",
    skillsSubtitle: "اللغات وأطر العمل والأدوات التي أستخدمها لبناء مواقع الويب.",
    catFrontend: "الواجهات الأمامية",
    catBackend: "الخوادم وقواعد البيانات",
    catLanguages: "لغات البرمجة",
    catTools: "الأدوات",
    timelineTitle: "محطات التطوير",
    timelineSubtitle: "مسار بناء وتصميم الأنظمة البرمجية الواقعية والمبتكرة.",
    t1Year: "2026",
    t1Title: "منصة WinWin DZ وسوق الخدمات الجزائري",
    t1Desc: "تصميم منصة جزائرية ذكية للربط بين طالبي الخدمات والحرفيين مع دعم ثلاثي اللغات وخوارزمية مطابقة وترتيب متطورة.",
    t2Year: "2026",
    t2Title: "منظومة نقاط البيع POS (React & Electron)",
    t2Desc: "تطوير نظام محاسبة وإدارة مخزون احترافي لسطح المكتب يعمل دون اتصال بالإنترنت بالاعتماد على قاعدة بيانات SQLite محلية.",
    t3Year: "2026",
    t3Title: "مشروع MedFinder وخط معالجة بيانات الأدوية",
    t3Desc: "معالجة واستيراد أكثر من 130 ألف مستحضر طبي لمساعدة المرضى والصيادلة على إيجاد البدائل المتاحة فوراً.",
    t4Year: "2025 - 2026",
    t4Title: "نظام إدارة ثانوية أحمد بلحاج سعيد",
    t4Desc: "هندسة منصة ويب متعددة المستويات لإدارة النقاط وجداول الحصص والمخزون المدرسي.",
    contactTitle: "لنبدأ العمل على مشروعك القادم",
    contactSubtitle: "هل لديك فكرة مشروع مبتكرة، فرصة عمل حر، أو منصب هندسي؟ يسعدني التواصل معك.",
    contactEmailLabel: "البريد الإلكتروني المباشر",
    contactLocationLabel: "الموقع الجغرافي",
    contactLinkedInLabel: "الملف المهني (LinkedIn)",
    contactGitHubLabel: "المستودعات والشفرات البرمجية",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "نص الرسالة",
    formSend: "إرسال الرسالة",
    copyBtn: "نسخ",
    copiedToast: "تم نسخ البريد الإلكتروني بنجاح!",
    msgSentToast: "تم استلام رسالتك! سيقوم فاروق بالرد عليك قريباً.",
    closeModal: "إغلاق",
    modalTechTitle: "التقنيات والمعمارية البرمجية",
    modalHighlightsTitle: "أهم الميزات والمواصفات الفنية"
  }
};

const projectsData = [
  {
    id: "winwin",
    category: "fullstack",
    badge: "Interactive Prototype",
    title: {
      en: "WinWin DZ — Algerian Problem-Solving Marketplace",
      fr: "WinWin DZ — Plateforme de Services Algérienne",
      ar: "منصة WinWin DZ — سوق الخدمات وحل المشكلات في الجزائر"
    },
    shortDesc: {
      en: "A comprehensive digital marketplace connecting people needing urgent everyday help with verified nearby professionals across Algeria. Features keyword problem parsing, scoring algorithms, and RTL support.",
      fr: "Une place de marché numérique connectant les personnes ayant besoin d'aide avec des professionnels qualifiés en Algérie. Détection de besoin par mots-clés et scoring algorithmique.",
      ar: "منصة رقمية جزائرية متكاملة تربط بين طالبي الخدمات العاجلة والحرفيين المعتمدين محلياً، مع تحليل ذكي للطلبات وخوارزمية ترتيب ومطابقة دقيقة."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    tags: ["JavaScript ES6+", "HTML5/CSS3", "RTL / LTR", "Match Scoring Algorithm", "Local State"],
    demoUrl: "demos/winwin-mini.html",
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "In Algeria, finding dependable craftspeople (plumbing, electricity, car repair, tutoring) often relies on chaotic Facebook groups with zero transparency, variable pricing, and no reliability metric.",
        solution: "WinWin DZ solves this with an instant text-input problem analyzer that detects category and urgency, calculates an 8-variable match score for nearby providers, and simulates the complete request-to-rating lifecycle.",
        highlights: [
          "Trilingual instant UI switching (Arabic, French, English) with native logical CSS and dynamic RTL mirroring.",
          "Custom transparent match scoring engine weighing distance, rating, verified credentials, and emergency response speed.",
          "Interactive request lifecycle: problem formulation, quote generation, negotiation, completion, and review submission.",
          "Complete administrative dashboard monitoring platform GMV, dispute logs, active providers, and resolution metrics."
        ],
        stack: ["Modern HTML5 / CSS3 (CSS Variables, Flexbox, Grid)", "Vanilla ES6+ JavaScript without bloated frameworks", "Google Sans Flex & Rubik typography with Arabic glyph coverage", "Client-side Persistence (localStorage)"]
      },
      fr: {
        problem: "En Algérie, trouver un artisan de confiance (plomberie, électricité, dépannage) se fait souvent via des groupes Facebook sans transparence ni garantie de prix.",
        solution: "WinWin DZ structure la demande grâce à une analyse textuelle qui détecte la catégorie et l'urgence, calcule un score de correspondance et gère tout le cycle de prestation.",
        highlights: [
          "Basculement trilingue instantané (Arabe, Français, Anglais) avec inversion RTL/LTR fluide.",
          "Algorithme transparent de calcul de score basé sur la proximité, les avis et la réactivité.",
          "Cycle complet de demande de service : soumission, offres, acceptation et évaluation.",
          "Tableau de bord d'administration pour la gestion des prestataires et des métriques."
        ],
        stack: ["HTML5 / CSS3 moderne", "JavaScript ES6+ natif", "Typographie Rubik & Google Sans", "Persistance locale"]
      },
      ar: {
        problem: "في الجزائر، يعتمد البحث عن الحرفيين والمهنيين (سباكة، كهرباء، صيانة سيارات) على مجموعات عشوائية تفتقر للشفافية وتحديد الأسعار وموثوقية المواعيد.",
        solution: "تقدم منصة WinWin DZ حلاً رقمياً ذكياً يحلل المشكلة بمجرد كتابتها باللغة الطبيعية، ويحدد درجة الإلحاح، ويقوم بحساب درجة التوافق لأقرب الحرفيين المعتمدين.",
        highlights: [
          "واجهة ثلاثية اللغات (عربية، فرنسية، إنجليزية) مع دعم كامل وتلقائي لاتجاه الكتابة RTL.",
          "خوارزمية ذكية لمطابقة واختيار أنسب مزود خدمة وفق المسافة والتقييمات والجاهزية.",
          "محاكاة تفاعلية شاملة لمراحل الطلب: إرسال الطلب، استلام العروض، الاتفاق، والتقييم النهائي.",
          "لوحة تحكم إدارية تفاعلية لمتابعة حجم العمليات ومراقبة جودة الخدمات المقدمة."
        ],
        stack: ["HTML5 و CSS3 المعاصر مع الخصائص المنطقية", "جافاسكريبت ES6+ بدون مكتبات ثقيلة", "خطوط Rubik و Google Sans لدعم الحروف العربية واللاتينية", "تخزين البيانات محلياً عبر localStorage"]
      }
    }
  },
  {
    id: "pos",
    category: "flutter",
    badge: "Desktop App",
    title: {
      en: "Retail POS & Inventory Desktop Suite",
      fr: "Suite Point de Vente (POS) & Gestion de Stock",
      ar: "منظومة نقاط البيع (POS) وإدارة المخزون لسطح المكتب"
    },
    shortDesc: {
      en: "A robust, offline-first point-of-sale desktop application built with React 18, TypeScript, and Electron, backed by a local SQLite database for full offline reliability.",
      fr: "Application de caisse et de gestion des stocks moderne pour desktop, développée avec React 18, TypeScript et Electron, avec une base SQLite locale pour un fonctionnement hors-ligne fiable.",
      ar: "برنامج محاسبة ونقاط بيع وإدارة مخزون لسطح المكتب يعمل بكفاءة دون اتصال بالإنترنت، مطور باستخدام React وTypeScript وElectron مع قاعدة بيانات SQLite محلية."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 8h4m-4 3h6m4-3h2m-2 3h2"/></svg>`,
    tags: ["React 18", "TypeScript", "Electron", "SQLite", "Vite", "Tailwind CSS"],
    demoUrl: null,
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Retailers in retail and grocery stores need instant responsiveness during checkouts with zero downtime if the internet disconnects, alongside strict inventory synchronization.",
        solution: "Built an offline-first desktop POS system with React 18, TypeScript, and Electron, providing barcode-speed cart management, low-stock threshold alerts, daily revenue analytics, and local SQLite synchronization.",
        highlights: [
          "Built with React 18, TypeScript, and Electron, packaged as a native desktop app for Windows and macOS.",
          "Local SQLite database keeps the app fully functional offline, syncing automatically once back online.",
          "Sub-millisecond barcode lookup, thermal receipt formatting, and multi-currency support.",
          "Live inventory level monitoring with automated warning badges (stable, low, critical)."
        ],
        stack: ["React 18 & TypeScript", "Electron 31", "SQLite", "Vite", "Tailwind CSS"]
      },
      fr: {
        problem: "Les commerçants ont besoin d'un encaissement ultra-rapide sans dépendre d'une connexion internet, avec un suivi rigoureux des stocks en temps réel.",
        solution: "Conception d'une application de bureau hors-ligne avec React 18, TypeScript et Electron, garantissant un encaissement rapide et une synchronisation SQLite locale.",
        highlights: [
          "Développée avec React 18, TypeScript et Electron, empaquetée en application de bureau native pour Windows et macOS.",
          "Base de données SQLite locale permettant un fonctionnement 100% hors-ligne avec synchronisation automatique.",
          "Recherche de codes-barres instantanée et impression de tickets de caisse.",
          "Suivi en direct des alertes de stock faible et tableau de bord des ventes."
        ],
        stack: ["React 18 & TypeScript", "Electron", "SQLite", "Vite", "Tailwind CSS"]
      },
      ar: {
        problem: "يحتاج أصحاب المتاجر ومحلات التجزئة إلى برنامج سريع جداً لعمليات البيع وإدارة الفواتير يعمل بكفاءة تامة دون انقطاع حتى في حال غياب الإنترنت.",
        solution: "تطوير منظومة نقاط بيع مكتبية متكاملة باستخدام React وTypeScript وElectron، تدعم العمل غير المتصل بالإنترنت بفضل قاعدة بيانات SQLite المحلية، مع تتبع دقيق للمخزون وحساب الأرباح.",
        highlights: [
          "تطبيق مكتبي مبني باستخدام React وTypeScript وElectron، متوافق مع أنظمة ويندوز وماك.",
          "قاعدة بيانات SQLite محلية تتيح العمل الكامل دون إنترنت مع مزامنة تلقائية عند عودة الاتصال.",
          "قراءة سريعة للباركود، إصدار الفواتير الفورية، وتتبع حركات الخزينة والمبيعات.",
          "نظام تنبيهات ذكي لمستويات المخزون (متوفر، قليل، حرج) لضمان عدم نفاد البضائع."
        ],
        stack: ["React 18 و TypeScript", "Electron", "قاعدة بيانات SQLite", "Vite"]
      }
    }
  },
  {
    id: "medfinder",
    category: "data",
    badge: "Healthcare & Data",
    title: {
      en: "MedFinder — Drug Alternatives & openFDA Pipeline",
      fr: "MedFinder — Alternatives Pharmaceutiques & Pipeline openFDA",
      ar: "منصة MedFinder — بدائل الأدوية وخط معالجة بيانات openFDA"
    },
    shortDesc: {
      en: "A pharmaceutical search platform and automated Python data engine mining 130,000+ FDA drug labels and French BDPM records to discover equivalent generic medications and drug interactions.",
      fr: "Plateforme pharmaceutique et moteur d'ingestion Python traitant plus de 130 000 notices openFDA et BDPM France pour trouver les alternatives génériques aux médicaments manquants.",
      ar: "منصة ذكية للبحث الصيدلاني وخط معالجة بيانات مؤتمت بلغة Python يعالج أكثر من 130,000 دواء مسجل لمساعدة المرضى في إيجاد بدائل الأدوية المفقودة وتجنب التداخلات الدوائية."
    },
    previewType: "image",
    previewSrc: "assets/medfinder-preview.jpg",
    tags: ["Next.js", "Python Data Pipeline", "SQLite", "openFDA API", "BDPM France", "Bilingual AR/EN"],
    demoUrl: "demos/medfinder.html",
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Drug shortages cause critical disruptions for patients unable to find prescribed medications, often unaware of biochemically identical generic alternatives with the same active molecule.",
        solution: "Engineered MedFinder: an openFDA data ingestion pipeline that aggregates active substances, dosages, contraindications, and adverse interactions into an indexed database with a fast Next.js bilingual frontend.",
        highlights: [
          "Python automation pipeline mining 130,000+ drug labels from openFDA API with rate-limiting and pagination into SQLite.",
          "French BDPM database parser importing international pharmaceutical equivalents.",
          "Instant client-side generic substitute matching with Arabic and English brand/generic indexation.",
          "Drug interaction analyzer warning against harmful co-prescriptions."
        ],
        stack: ["Next.js (App Router) & React", "Python 3 & Requests ETL pipeline", "SQLite 3 with custom relational schema", "openFDA Drug Labels REST API", "BDPM Open Data"]
      },
      fr: {
        problem: "Les pénuries de médicaments posent un risque majeur pour les patients ignorant l'existence de génériques chimiquement équivalents disponibles en pharmacie.",
        solution: "Développement d'un pipeline Python d'extraction de données depuis l'openFDA et la BDPM France alimentant une base SQLite et une interface Next.js rapide.",
        highlights: [
          "Script Python d'extraction de plus de 130 000 notices de médicaments via l'API openFDA.",
          "Intégration de la base publique française du médicament (BDPM).",
          "Recherche bilingue (Arabe / Anglais) des équivalents génériques et posologies.",
          "Vérification des contre-indications et des interactions médicamenteuses."
        ],
        stack: ["Next.js & React", "Python (ETL & requêtes API)", "Base de données SQLite", "openFDA & BDPM France"]
      },
      ar: {
        problem: "تؤدي أزمات نقص الأدوية إلى معاناة كبيرة للمرضى لعدم معرفتهم بالبدائل الجنيسة (Generics) التي تحتوي على نفس المادة الفعالة والتركيز الطبي.",
        solution: "تطوير منصة MedFinder مع خط بيانات مؤتمت بلغة Python يستخرج ويصنف أكثر من 130,000 دواء من قاعدة openFDA الأمريكية وقاعدة BDPM الفرنسية في قاعدة بيانات مهيكلة وسريعة الاستعلام.",
        highlights: [
          "نظام سحب بيانات مؤتمت بلغة Python يتعامل مع واجهات برمجة openFDA وسحب بيانات الأدوية وضبط قيود الاستدعاء.",
          "محرك بحث فوري يدعم اللغتين العربية والإنجليزية للمطابقة بين الأسماء التجارية والمواد الفعالة.",
          "فحص التداخلات الدوائية المتبادلة والتحذيرات الطبية وموانع الاستعمال.",
          "قاعدة بيانات SQLite محلية عالية السرعة للعمل في وضع الاستجابة الفورية."
        ],
        stack: ["Next.js مع أحدث معايير React", "Python لأتمتة سحب ومعالجة البيانات", "قاعدة بيانات SQLite 3", "واجهات برمجة openFDA و BDPM France"]
      }
    }
  },
  {
    id: "school",
    category: "flutter",
    badge: "Education ERP",
    title: {
      en: "Lycée Ahmed Belhadj Said — School Management ERP",
      fr: "Lycée Ahmed Belhadj Said — Système de Gestion Scolaire",
      ar: "منظومة ثانوية أحمد بلحاج سعيد — نظام الإدارة المدرسية المتكامل"
    },
    shortDesc: {
      en: "A multi-tier institutional web management system built for high school administration, unifying grade recording, class timetables, and campus inventory tracking.",
      fr: "Système de gestion institutionnel web multi-niveaux conçu pour l'administration de lycée, unifiant la gestion des notes, des emplois du temps et du matériel.",
      ar: "نظام إداري وأكاديمي متعدد المستويات مبني كمنصة ويب لإدارة المرحلة الثانوية، يشمل رصد الدرجات، تنظيم جداول الحصص، وجرد المعدات المدرسية."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/></svg>`,
    tags: ["React", "Node.js", "SQLite", "REST API", "Arabic Localization"],
    demoUrl: null,
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Secondary schools often struggle with fragmented paperwork, lost inventory records, and manual report card generation.",
        solution: "Engineered a localized Arabic web application providing centralized role-based management for teachers, administrators, and inventory staff.",
        highlights: [
          "Complete student grading registry with automated average calculations and report card exports.",
          "Visual schedule organizer resolving teacher conflicts and classroom room assignments.",
          "Physical inventory audit module recording scientific lab equipment and educational materials.",
          "Full Arabic interface customized to Algerian ministry educational nomenclature."
        ],
        stack: ["React & TypeScript", "Node.js REST API", "SQLite database", "Arabic localization & fonts"]
      },
      fr: {
        problem: "Les établissements secondaires souffrent souvent d'une gestion administrative manuelle et de la perte des inventaires d'équipements.",
        solution: "Création d'une application web ergonomique et bilingue pour centraliser les notes des élèves, les plannings et le matériel pédagogique.",
        highlights: [
          "Gestion centralisée des notes et calcul automatique des moyennes scolaires.",
          "Générateur d'emplois du temps évitant les conflits de salles et d'enseignants.",
          "Module de suivi et d'inventaire des laboratoires scientifiques et salles informatiques.",
          "Interface entièrement adaptée en Arabe selon les standards éducatifs."
        ],
        stack: ["React & TypeScript", "Node.js REST API", "SQLite", "Polices arabes Google Fonts"]
      },
      ar: {
        problem: "تعاني المؤسسات التعليمية من تشتت الملفات الورقية وبطء إعداد كشوف النقاط ومتابعة جرد المعامل والمعدات المدرسية.",
        solution: "تصميم منصة ويب متكاملة موجهة للمؤسسات الثانوية بالجزائر، توفر إدارة رقمية لكشوف الدرجات، الجداول الزمنية، وحصر العتاد المدرسي بكل دقة.",
        highlights: [
          "رصد درجات الفصول وحساب المعدلات الفردية والجماعية وطباعة الكشوف.",
          "تنظيم جداول الحصص الأسبوعية ومنع تضارب القاعات وتوزيع الأساتذة.",
          "نظام جرد عتاد المخابر العلمية والأجهزة التعليمية ومتابعة حالتها الدورية.",
          "واجهة عربية أصيلة ومصممة وفق المصطلحات المعتمدة في قطاع التربية والتعليم."
        ],
        stack: ["React و TypeScript", "واجهة برمجية REST عبر Node.js", "قاعدة بيانات SQLite", "دعم كامل للغة العربية"]
      }
    }
  },
  {
    id: "scarlet",
    category: "data",
    badge: "AI & Voice UI",
    title: {
      en: "SCARLET — Browser Voice Assistant",
      fr: "SCARLET — Assistant Vocal dans le Navigateur",
      ar: "SCARLET — مساعد صوتي في المتصفح"
    },
    shortDesc: {
      en: "A browser-based voice assistant with a glowing animated orb. Talk or type, and it answers out loud, keeps notes, runs a focus timer, does quick math and plays music.",
      fr: "Assistant vocal dans le navigateur avec un orbe lumineux animé. Parlez ou écrivez : il répond à voix haute, garde des notes, lance un minuteur, calcule et lance de la musique.",
      ar: "مساعد صوتي يعمل في المتصفح مع كرة ضوئية متحركة. تحدث أو اكتب فيجيبك صوتياً، ويحفظ الملاحظات، ويشغّل مؤقت تركيز، ويحسب، ويفتح الموسيقى."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>`,
    tags: ["HTML5 Canvas", "Voice UI", "Intent Matching", "Web Speech API", "localStorage"],
    demoUrl: "demos/scarlet.html",
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Traditional chat interfaces lack visceral, ambient feedback during vocal interaction, feeling static and detached.",
        solution: "Built SCARLET: a dark crimson voice assistant whose animated orb pulses while it speaks, backed by a small intent engine for notes, timers, calculations, music and jokes.",
        highlights: [
          "Canvas-drawn glowing orb that reacts when the assistant is speaking.",
          "Web Speech API for in-browser speech recognition and spoken replies.",
          "Useful commands: notes saved in localStorage, focus timer, calculator, time and date, and Spotify mood search.",
          "Accessible and dependency-free: keyboard focus, aria labels, reduced-motion support and a single HTML file."
        ],
        stack: ["HTML5 Canvas", "Vanilla JavaScript ES6+", "Custom CSS3 dark theme", "Web Speech API"]
      },
      fr: {
        problem: "Les interfaces de discussion classiques manquent de feedback sensoriel lors des interactions vocales.",
        solution: "Création de SCARLET : un assistant vocal noir et carmin dont l'orbe pulse pendant qu'il parle, avec un petit moteur d'intentions pour notes, minuteur, calculs, musique et blagues.",
        highlights: [
          "Orbe dessiné sur canvas qui réagit quand l'assistant parle.",
          "Reconnaissance et synthèse vocales via l'API Web Speech.",
          "Commandes utiles : notes (localStorage), minuteur de concentration, calculatrice, heure et date, recherche musicale Spotify.",
          "Accessible et sans dépendance : focus clavier, labels aria, mouvement réduit, un seul fichier HTML."
        ],
        stack: ["HTML5 Canvas", "JavaScript ES6+", "Thème sombre CSS3", "Web Speech API"]
      },
      ar: {
        problem: "تفتقر واجهات المحادثة التقليدية إلى التفاعل الحسي والحركي أثناء المحادثات الصوتية المباشرة.",
        solution: "بناء SCARLET: مساعد صوتي بتصميم أسود وقرمزي تنبض كرته الضوئية أثناء الكلام، مع محرك بسيط لفهم الأوامر للملاحظات والمؤقت والحسابات والموسيقى والنكت.",
        highlights: [
          "كرة ضوئية مرسومة على Canvas تتفاعل عندما يتحدث المساعد.",
          "التعرف على الصوت وتحويل النص إلى كلام عبر Web Speech API.",
          "أوامر مفيدة: ملاحظات في localStorage، ومؤقت تركيز، وآلة حاسبة، والوقت والتاريخ، والبحث عن الموسيقى في Spotify.",
          "سهل الوصول وبدون مكتبات: تركيز لوحة المفاتيح، وسمات aria، ودعم الحركة المخفضة، وملف HTML واحد."
        ],
        stack: ["HTML5 Canvas", "JavaScript ES6+ نقي", "CSS3 داكن", "Web Speech API"]
      }
    }
  },
  {
    id: "campus",
    category: "fullstack",
    badge: "Architecture & Concept",
    title: {
      en: "CampusConnect DZ & StudyLab Ecosystems",
      fr: "CampusConnect DZ & Écosystème StudyLab",
      ar: "منصة CampusConnect DZ وبيئة StudyLab للطلبة"
    },
    shortDesc: {
      en: "Product specification and technical blueprints for an Algerian student platform unifying university course repositories, student peer tutoring, and collaborative study groups.",
      fr: "Cahier des charges et architecture logicielle pour un écosystème étudiant algérien unifiant partage de cours, tutorat et groupes d'études.",
      ar: "مخطط هيكلي ومعماري لمنظومة جامعية جزائرية متكاملة تهدف لمشاركة المراجع الأكاديمية، تنظيم جلسات المراجعة، والتواصل بين الطلبة."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    tags: ["Product Design", "System Architecture", "Algerian University Network", "Peer Learning"],
    demoUrl: null,
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Algerian university students lack a centralized platform to exchange verified lecture notes, exam annals, and peer tutoring sessions.",
        solution: "Designed the complete technical architecture for CampusConnect DZ: a modular learning platform with collaborative subject trees, verified student identity, and scheduled review rooms.",
        highlights: [
          "Structured university, faculty, and specialty taxonomy mapped to the Algerian LMD system.",
          "Peer-to-peer student knowledge sharing with upvote reputation mechanisms.",
          "StudyLab virtual study rooms with shared focus timers and resource pinning."
        ],
        stack: ["System Design & UML Diagrams", "Product Roadmapping", "Modular Architecture Specification"]
      },
      fr: {
        problem: "Les étudiants universitaires algériens manquent d'un espace centralisé pour échanger des cours certifiés et des annales d'examens.",
        solution: "Conception de l'architecture de CampusConnect DZ : une plateforme modulaire d'entraide étudiante adaptée au système LMD.",
        highlights: [
          "Taxonomie universitaire adaptée aux facultés et départements algériens.",
          "Partage de ressources avec système de réputation et modération par les pairs.",
          "Espaces d'étude virtuels StudyLab avec minuteurs de travail partagés."
        ],
        stack: ["Conception de Systèmes", "Spécifications Fonctionnelles & Techniques"]
      },
      ar: {
        problem: "يواجه طلبة الجامعات في الجزائر صعوبة في تجميع المراجع الموثوقة وحوليات الامتحانات وتنظيم جلسات المراجعة المشتركة.",
        solution: "إعداد المخطط المعماري الكامل لمنصة CampusConnect DZ: بيئة تعليمية تربط بين طلبة التخصصات الجامعية وفق نظام LMD الجزائري.",
        highlights: [
          "هيكلة شاملة للجامعات والكليات والتخصصات وفق النظام الأكاديمي الجزائري.",
          "نظام تبادل الملفات والمحاضرات مع آليات التقييم وبناء السمعة الأكاديمية.",
          "غرف StudyLab الافتراضية للمذاكرة الجماعية المؤقتة وتقاسم المهام."
        ],
        stack: ["تصميم الأنظمة البرمجية", "تخطيط المنتجات الرقمية والخرائط الهيكلية"]
      }
    }
  },
  {
    id: "arch3d",
    category: "fullstack",
    badge: "3D R&D & Architecture",
    title: {
      en: "3D Building Architecture & Spatial Visualizer",
      fr: "Visualisation Architecturale 3D & Systèmes Spatiaux",
      ar: "منظومة النمذجة المعمارية ثلاثية الأبعاد والتصور الفضائي للمباني"
    },
    shortDesc: {
      en: "Upcoming architectural tech and interactive 3D spatial computing initiative exploring Three.js, WebGL, and BIM/CAD pipelines for real-time web-based architectural walkthroughs.",
      fr: "Initiative technologique et spatiale 3D explorant Three.js, WebGL et les flux BIM/CAD pour la visite architecturale interactive sur le web.",
      ar: "مشروع تقني وبحثي قادم يجمع بين تقنيات الويب والنمذجة المعمارية ثلاثية الأبعاد (Three.js & WebGL) للتجول التفاعلي واستعراض المخططات المعمارية."
    },
    previewType: "illustration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    tags: ["Three.js", "WebGL", "3D Architecture", "Blender", "BIM / CAD Pipelines", "Spatial Web"],
    demoUrl: null,
    githubUrl: "https://github.com/benofarouk8-byte",
    details: {
      en: {
        problem: "Architectural presentations and engineering walkthroughs are traditionally locked in heavy, proprietary desktop CAD software inaccessible to clients and remote stakeholders.",
        solution: "Building modern WebGL and Three.js spatial pipelines that render high-fidelity 3D architectural models directly in the browser with real-time lighting and floorplan exploration.",
        highlights: [
          "Real-time interactive 3D building exploration with free camera, first-person navigation, and room inspection.",
          "Lightweight GLTF/GLB asset optimization for zero-lag browser loading.",
          "Architectural floorplan toggle with dimensional annotations and material variant previewing.",
          "Targeted integration with Algerian urban planning and modern construction standards."
        ],
        stack: ["Three.js & WebGL", "Blender 3D Modeling", "GLTF / GLB Compression", "Next.js & React Three Fiber"]
      },
      fr: {
        problem: "Les visites architecturales et maquettes techniques nécessitent souvent des logiciels de CAO lourds et peu accessibles aux clients.",
        solution: "Développement d'un moteur de visualisation 3D web temps réel via WebGL et Three.js pour explorer des maquettes architecturales directement dans le navigateur.",
        highlights: [
          "Navigation 3D immersive et inspection des pièces en temps réel.",
          "Optimisation des modèles 3D GLTF pour un affichage instantané.",
          "Basculement plan de masse / vue 3D avec cotations interactives.",
          "Conçu pour l'urbanisme et les projets de construction modernes."
        ],
        stack: ["Three.js & WebGL", "Blender 3D", "React Three Fiber", "Formats GLTF / GLB"]
      },
      ar: {
        problem: "تتطلب استعراضات التصاميم المعمارية برامج هندسية ثقيلة ومعقدة يصعب فتحها أو مشاركتها بسهولة مع العملاء عبر المتصفح.",
        solution: "تطوير منظومة تفاعلية ثلاثية الأبعاد عبر Three.js و WebGL تتيح للعملاء التجول داخل المباني واستعراض المخططات المعمارية مباشرة من المتصفح دون أي تنصيب.",
        highlights: [
          "تجول تفاعلي واقعي داخل المنشآت والمباني بزوايا رؤية حرة وواقعية.",
          "ضغط وتحسين مجسمات 3D لتعمل بسرعة فائقة وسلاسة على كافة الأجهزة.",
          "التبديل بين المخطط الهندسي (Floor Plan) والمنظور المجسم ثلاثي الأبعاد.",
          "توجيه خاص لاحتياجات البناء الحديث والمشاريع المعمارية في الجزائر."
        ],
        stack: ["Three.js ومحرك WebGL", "Blender للنمذجة ثلاثية الأبعاد", "React Three Fiber", "تنسيقات GLTF / GLB الحديثة"]
      }
    }
  }
];

// App State
const store = {
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
};
let currentLang = store.get("farouk_portfolio_lang") || "en";
let currentTheme = store.get("farouk_portfolio_theme") || "dark";
let currentFilter = "all";

// DOM Elements
const langBtns = document.querySelectorAll(".lang-btn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const projectsContainer = document.getElementById("projectsContainer");
const filterBtns = document.querySelectorAll(".filter-btn");
const modalOverlay = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBody = document.getElementById("modalBody");
const toastNotice = document.getElementById("toastNotice");
const contactForm = document.getElementById("contactForm");

const FORM_MSG = {
  en: { toast: "Message ready — choose how to send it", ready: "Your message is ready. Choose how to send it:", gmail: "Send with Gmail", mail: "Open mail app", copy: "Copy message" },
  fr: { toast: "Message prêt — choisissez comment l'envoyer", ready: "Votre message est prêt. Choisissez comment l'envoyer :", gmail: "Envoyer avec Gmail", mail: "Ouvrir l'app mail", copy: "Copier le message" },
  ar: { toast: "الرسالة جاهزة — اختر طريقة الإرسال", ready: "رسالتك جاهزة. اختر طريقة الإرسال:", gmail: "أرسل عبر Gmail", mail: "افتح تطبيق البريد", copy: "نسخ الرسالة" }
};

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  renderProjects();
  initEventListeners();
});

// Theme Management
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  store.set("farouk_portfolio_theme", theme);
  
  if (theme === "light") {
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// Language Management
function applyLanguage(lang) {
  currentLang = lang;
  store.set("farouk_portfolio_lang", lang);
  
  // Set RTL or LTR
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", lang);
  }
  
  // Update Active Button
  langBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  
  // Translate Static Elements with data-i18n
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Re-render Projects for updated translations
  renderProjects();
}

// Render Project Cards
function renderProjects() {
  if (!projectsContainer) return;
  const t = translations[currentLang] || translations.en;
  
  const filtered = projectsData.filter(p => {
    if (currentFilter === "all") return true;
    return p.category === currentFilter;
  });

  projectsContainer.innerHTML = filtered.map(p => {
    const title = p.title[currentLang] || p.title.en;
    const desc = p.shortDesc[currentLang] || p.shortDesc.en;
    
    let previewHtml = "";
    if (p.previewType === "image" && p.previewSrc) {
      previewHtml = `<img src="${p.previewSrc}" alt="${title}" loading="lazy" />`;
    } else {
      previewHtml = `
        <div class="mockup-illustration">
          ${p.icon}
          <span>${p.badge}</span>
        </div>
      `;
    }

    const demoBtn = p.demoUrl 
      ? `<a href="${p.demoUrl}" target="_blank" class="btn btn-sm btn-primary">${t.viewDemo} ↗</a>` 
      : `<button onclick="openProjectModal('${p.id}')" class="btn btn-sm btn-secondary">${t.viewDetails}</button>`;

    return `
      <div class="project-card" data-category="${p.category}">
        <div class="project-preview">
          <div class="project-status-badge">${p.badge}</div>
          ${previewHtml}
        </div>
        <div class="project-body">
          <div class="project-tags">
            ${p.tags.slice(0, 3).map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${desc}</p>
          <div class="project-footer">
            <div class="project-links">
              ${demoBtn}
              <button onclick="openProjectModal('${p.id}')" class="btn btn-sm btn-secondary">${t.viewDetails}</button>
            </div>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub Code">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Open Project Details Modal
window.openProjectModal = function(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  
  const t = translations[currentLang] || translations.en;
  const title = project.title[currentLang] || project.title.en;
  const details = project.details[currentLang] || project.details.en;

  modalBody.innerHTML = `
    <div class="modal-header-section">
      <span class="section-tag">${project.badge}</span>
      <h3>${title}</h3>
      <p style="color:var(--text-sub); margin-top:0.4rem;">${details.solution}</p>
    </div>

    <div style="background:var(--bg-card); padding:1.25rem; border-radius:14px; border:1px solid var(--border-subtle);">
      <h4 style="color:var(--primary-red); font-size:1rem; margin-bottom:0.4rem;">⚡ Challenge & Problem Solved</h4>
      <p style="font-size:0.92rem; color:var(--text-sub); line-height:1.6;">${details.problem}</p>
    </div>

    <div>
      <h4 style="font-size:1.1rem; margin-bottom:0.8rem; color:var(--text-main);">${t.modalHighlightsTitle}</h4>
      <ul class="modal-features-list">
        ${details.highlights.map(h => `
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${h}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <div>
      <h4 style="font-size:1.1rem; margin-bottom:0.8rem; color:var(--text-main);">${t.modalTechTitle}</h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${details.stack.map(st => `<span class="skill-pill">${st}</span>`).join("")}
      </div>
    </div>

    <div style="display:flex; gap:1rem; padding-top:1.2rem; border-top:1px solid var(--border-subtle); margin-top:0.5rem; flex-wrap:wrap;">
      ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-primary">${t.viewDemo} ↗</a>` : ""}
      <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub Repository
      </a>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Clipboard Copy
window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    const t = translations[currentLang] || translations.en;
    showToast(t.copiedToast);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    const t = translations[currentLang] || translations.en;
    showToast(t.copiedToast);
  });
};

function showToast(msg) {
  if (!toastNotice) return;
  toastNotice.querySelector("span").textContent = msg;
  toastNotice.classList.add("show");
  setTimeout(() => {
    toastNotice.classList.remove("show");
  }, 3200);
}

// Event Listeners
function initEventListeners() {
  themeToggleBtn.addEventListener("click", toggleTheme);

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    
    // Close mobile nav on click
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Contact form: opens the visitor's mail app with the message pre-filled
  if (contactForm) {
    const sendContact = () => {
      const L = FORM_MSG[currentLang] || FORM_MSG.en;
      const v = id => document.getElementById(id).value.trim();
      const name = v("nameInput"), email = v("emailInput"), subject = v("subjectInput"), message = v("messageInput");
      if (!name || !email || !subject || !message) return;
      const body = `${message}\n\n— ${name} (${email})`;
      const to = "benofarouk8@gmail.com";
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const note = document.getElementById("formNote");
      if (note) {
        note.hidden = false; note.textContent = "";
        const msg = document.createElement("strong"); msg.textContent = L.ready; msg.style.display = "block";
        const row = document.createElement("div"); row.className = "form-actions";
        const mk = (txt, href) => { const x = document.createElement("a"); x.className = "btn btn-secondary btn-sm"; x.textContent = txt; x.href = href; x.target = "_blank"; x.rel = "noopener noreferrer"; return x; };
        const cp = document.createElement("button"); cp.type = "button"; cp.className = "btn btn-secondary btn-sm"; cp.textContent = L.copy;
        cp.onclick = () => window.copyToClipboard(`To: ${to}\nSubject: ${subject}\n\n${body}`);
        row.append(mk(L.gmail, gmail), mk(L.mail, mailto), cp);
        note.append(msg, row);
        note.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      showToast(L.toast);
    };
    // The button is a plain click handler (no native form submit), so it also works inside sandboxed frames
    contactForm.addEventListener("submit", (e) => { e.preventDefault(); sendContact(); });
    const sendBtn = contactForm.querySelector('button[type="submit"]');
    if (sendBtn) {
      sendBtn.type = "button";
      sendBtn.addEventListener("click", () => { if (contactForm.reportValidity()) sendContact(); });
    }
    contactForm.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.tagName === "INPUT") { e.preventDefault(); if (sendBtn) sendBtn.click(); }
    });
  }

  // Highlight the nav link of the section in view
  const spyLinks = [...document.querySelectorAll(".nav-link")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        spyLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["about", "projects", "skills", "timeline", "contact"].forEach(id => {
      const el = document.getElementById(id); if (el) spy.observe(el);
    });
  }
}

