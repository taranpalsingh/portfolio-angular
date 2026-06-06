export const projects = [
  // ── Eckler (current) ──────────────────────────────────────────────────────
  {
    id: 'cmap',
    title: 'CMAP',
    company: 'Eckler',
    year: '2026–Present',
    description:
      'Capital Market Assumption Platform (CMAP) is an analytic platform that comes with a cross-platform Excel Web Add-in enabling 100% of actuaries to access Modelling directly in Excel.',
    'description-full': [
      'Architected and delivered a cross-platform Excel Web Add-in (Office JS + TypeScript + Vite) enabling 100% of actuaries to access Monte Carlo simulation data directly in Excel.',
      'Designed a function batching system consolidating Excel custom function calls into a single API request, reducing network overhead by ~90%.',
      'Built an Angular-based enterprise management platform with role-based modules for Assumption Sets, Asset Classes, Clients, and User Management.',
      'Integrated REST APIs delivering probabilistic financial datasets to enterprise clients.',
    ],
    tech: ['Office JS', 'TypeScript', 'Vite', 'Angular', 'REST API'],
    image: '/assets/projects/cmap.png',
    images: ['/assets/projects/cmap.png'],
  },
  {
    id: 'eds',
    title: 'Eckler Design System',
    company: 'Eckler',
    year: '2026–Present',
    description:
      'Reusable Angular component library — 15+ standalone components, 40+ UI overrides — with tokenized theming, Figma Code Connect integration, and Storybook docs.',
    'description-full': [
      'Architected and delivered a reusable Angular component library with 15+ standalone components and 40+ UI overrides.',
      'Built tokenized theming system using SCSS and CSS variables for consistent cross-application styling.',
      'Integrated Figma Code Connect to bridge design and development workflows.',
      'Developed Storybook documentation platform with accessibility auditing and interactive demos.',
      'Implemented CI-ready packaging and developer tooling with ng-packagr, linting, and automation.',
    ],
    tech: ['Angular', 'SCSS', 'CSS Variables', 'Storybook', 'Figma', 'ng-packagr'],
    image: '/assets/projects/eds.png',
    images: ['/assets/projects/eds.png', '/assets/projects/eds-2.png', '/assets/projects/eds-3.png'],
  },
  {
    id: 'connect',
    title: 'Connect',
    company: 'Eckler',
    year: '2023–2025',
    description:
      'Scalable financial analytics platform for enterprise investment analysis with feature flags, changelog tracking, and role-based access control.',
    'description-full': [
      'Developed a scalable financial analytics platform for enterprise investment analysis using Angular, GraphQL, MySQL, and .NET.',
      'Built a changelog mechanism to monitor feature updates, bug fixes, and enhancements for every release.',
      'Implemented a scalable feature flag system to dynamically control feature deployment across production and staging environments.',
    ],
    tech: ['Angular', 'GraphQL', 'MySQL', '.NET'],
    image: '/assets/projects/connect.png',
    images: ['/assets/projects/connect.png'],
  },

  // ── Falcon ────────────────────────────────────────────────────────────────
  {
    id: 'falcon-dart',
    title: 'Falcon Dart',
    company: 'Falcon',
    year: '2022–2023',
    description:
      'White-labelled SaaS delivering financial reports and analysis via charts and tables.',
    'description-full': [
      'A white-labelled SaaS product delivering financial reports and analysis on company finances via interactive charts and tables.',
      'Designed and developed the end-to-end application using Angular, Chart.js, and NestJS.',
      'Set up the CI/CD pipeline and automated deployment of the application using AWS.',
    ],
    tech: ['Angular', 'Chart.js', 'NestJS', 'RxJS', 'AWS', 'CI/CD'],
    image: '/assets/projects/kitePrepaid.png',
    images: [
      '/assets/projects/kitePrepaid.png',
      '/assets/projects/Prepaid2.PNG',
      '/assets/projects/Prepaid3.PNG',
    ],
  },

  // ── Other ─────────────────────────────────────────────────────────────────

  {
    id: 'reach',
    title: 'Remote Business',
    company: 'Reach',
    year: '2021',
    description:
      'Platform for expediting remote client interactions with on-the-fly form submissions.',
    'description-full': [
      'Platform for expediting remote client interactions with on-the-fly form submissions.',
    ],
    tech: ['Angular', 'Django', 'MySQL', 'Bootstrap', 'REST API'],
    image: '/assets/projects/reach.png',
    images: [
      '/assets/projects/reach.png',
      '/assets/projects/Reach1.PNG',
      '/assets/projects/Reach2.PNG',
    ],
  },
  {
    id: 'alchem-pharmacy',
    title: 'Pharmacy E-Commerce',
    company: 'Alchem Synergy',
    year: '2021',
    description:
      'Full pharmaceutical e-commerce platform with payment gateway integration, ShipRocket delivery integration, and Elastic Search for product discovery.',
    'description-full': [
      'Full pharmaceutical e-commerce platform with payment gateway integration, ShipRocket delivery integration, and Elastic Search for product discovery.',
    ],
    tech: ['Angular', 'NestJS', 'MySQL', 'NX Monorepo', 'Elastic Search', 'Paytm'],
    image: '/assets/projects/alchemsynergy.png',
    images: ['/assets/projects/alchemsynergy.png'],
  },
  {
    id: 'kite-tab',
    title: 'Kite Tab',
    company: 'Falcon',
    year: '2020–2021',
    description:
      'Enterprise finance dashboard for monthly expense analysis, receipt uploads and multi-level approval workflows.',
    'description-full': [
      'Enterprise finance dashboard for monthly expense analysis, receipt uploads and multi-level approval workflows.',
    ],
    tech: ['Angular', 'Chart.js', 'RxJS', 'Material UI', 'REST API'],
    image: '/assets/projects/kiteTab.png',
    images: ['/assets/projects/kiteTab.png'],
  },
  {
    id: 'socialize',
    title: 'Socialize',
    company: 'Cybergroup',
    year: '2020',
    description:
      'Social media automation tool with ML-driven sentiment analysis on posts and comments, and future post scheduling.',
    'description-full': [
      'Social media automation tool with ML-driven sentiment analysis on posts and comments, and future post scheduling.',
    ],
    tech: ['Angular', 'Chart.js', 'Node.js', 'MongoDB', 'Python', 'Twitter API'],
    image: '/assets/projects/Socialize.png',
    images: ['/assets/projects/Socialize.png'],
  },
]
