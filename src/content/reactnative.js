// Content for the React Native portfolio site.
// This is the single source of truth for every piece of copy/data on the site.
// The UI (components/sections) is shared across sites — only this file changes per site.
const content = {
  meta: {
    title: "Abdullah Ansari — React Native Developer",
  },

  // Navbar menu items (must match the section ids used by react-scroll)
  nav: ["home", "services", "about", "works", "contact"],

  hero: {
    subTitle: "React Native Developer · 4+ Years",
    title: "Abdullah Ansari",
    text: `I build high-performance iOS & Android apps
that turn complex Figma designs into
pixel-perfect, real-time experiences`,
  },

  // Animated scrolling words above the Services section
  serviceSummary: {
    line1: "React Native",
    line2: { left: "iOS", right: "Android" },
    line3: { left: "Redux", middle: "Animations", right: "Real-time" },
    line4: "Performance",
  },

  services: {
    subTitle: "Behind the scene, Beyond the screen",
    title: "Services",
    text: `From Figma design to deployment, here's what I bring
    to building production-grade mobile apps:`,
    items: [
      {
        title: "Mobile Development",
        description: "High-performance cross-platform apps for iOS and Android",
        items: [
          { title: "React Native (iOS & Android)", description: "" },
          { title: "Cross-Platform Architecture", description: "" },
          { title: "Native Modules (Kotlin & Swift)", description: "" },
          { title: "Offline-First Design", description: "" },
        ],
      },
      {
        title: "State & Data Management",
        description: "Scalable state and reliable data flow",
        items: [
          { title: "Redux (RTK, Thunk, Query)", description: "" },
          { title: "React Query & Zustand", description: "" },
          { title: "RESTful API Integration", description: "" },
          { title: "MMKV & SQLite Storage", description: "" },
        ],
      },
      {
        title: "Mobile UI/UX & Animation",
        description: "Pixel-perfect interfaces from Figma to code",
        items: [
          { title: "Figma/XD-to-Code", description: "" },
          { title: "Reanimated & Shopify Skia", description: "" },
          { title: "NativeWind (Tailwind)", description: "" },
          { title: "Lottie Animations", description: "" },
        ],
      },
      {
        title: "Backend, Storage & Tools",
        description: "Real-time backends and production-grade tooling",
        items: [
          { title: "Firebase & Supabase", description: "" },
          { title: "Node.js & REST APIs", description: "" },
          { title: "Agora SDK (Voice/Video)", description: "" },
          { title: "Sentry & Firebase Crashlytics", description: "" },
        ],
      },
    ],
  },

  about: {
    subTitle: "Innovating with code, Growing through technology",
    title: "About",
    name: "Abdullah Ansari",
    image: "images/pfp.png",
    text: `Passionate about clean architecture
    I build scalable, high-performance mobile apps
    from Figma design to deployment`,
    aboutText: `I'm a React Native developer with 4+ years of experience shipping high-performance iOS and Android apps with 99.9% crash-free sessions. I specialize in Redux, REST API integration, offline-first architectures, and real-time communication—delivering scalable solutions for global clients.
  Outside of building:`,
    highlights: [
      {
        icon: "lucide:smartphone",
        label: "Exploring new React Native libraries and SDKs",
      },
      {
        icon: "lucide:users",
        label: "Mentoring junior developers and reviewing code",
      },
      {
        icon: "lucide:gauge",
        label: "Chasing smoother animations and better performance",
      },
      { icon: "lucide:gamepad-2", label: "Gaming" },
    ],
  },

  works: {
    subTitle: "Logic meets Aesthetics, Seamlessly",
    title: "Works",
    text: `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`,
    projects: [
      {
        id: 1,
        name: "OneTap — On-Demand Services Super App",
        description:
          "A multi-tenant super app supporting distinct workflows for Users, Taxi, Handyman, Towing, and Logistics, with live tracking, real-time ETAs, and secure multi-currency payments.",
        href: "https://play.google.com/store/apps/details?id=com.cmolds.onetap",
        appStore:
          "https://apps.apple.com/us/app/onetap-from-rides-to-repairs/id6762206508",
        playStore:
          "https://play.google.com/store/apps/details?id=com.cmolds.onetap",
        frameworks: [
          { id: 1, name: "React Native" },
          { id: 2, name: "Redux / RTK Query" },
          { id: 3, name: "Google Maps" },
          { id: 4, name: "Stripe" },
          { id: 5, name: "Firebase (FCM)" },
        ],
      },
      {
        id: 2,
        name: "Skelto — Real Estate Networking App",
        description:
          "A dual-interface platform connecting real estate agents with clients through niche search, a unique 'Nudges' engagement flow, in-app contracts, and a subscription model.",
        href: "https://play.google.com/store/apps/details?id=com.skelto.bytrix",
        appStore:
          "https://apps.apple.com/us/app/skelto-connect-with-re-pros/id6742109204",
        playStore:
          "https://play.google.com/store/apps/details?id=com.skelto.bytrix",
        frameworks: [
          { id: 1, name: "React Native" },
          { id: 2, name: "Agora SDK" },
          { id: 3, name: "Socket.io" },
          { id: 4, name: "Redux" },
          { id: 5, name: "REST API" },
        ],
      },
      {
        id: 3,
        name: "PointZero — Social Media & Marketplace",
        description:
          "A high-concurrency social ecosystem with posts, disappearing stories, 1:1 and group video calling, real-time messaging, and an integrated marketplace and ad program.",
        href: "https://play.google.com/store/apps/details?id=com.cmolds.point_zero_app",
        appStore: "https://apps.apple.com/pk/app/point-zero/id6739540097",
        playStore:
          "https://play.google.com/store/apps/details?id=com.cmolds.point_zero_app",
        frameworks: [
          { id: 1, name: "React Native" },
          { id: 2, name: "Agora SDK" },
          { id: 3, name: "Socket.io" },
          { id: 4, name: "Redux / RTK Query" },
        ],
      },
      {
        id: 4,
        name: "CNI Construct — Service Marketplace",
        description:
          "A dual-interface marketplace connecting service providers with users for home maintenance, featuring role-based portals, booking dashboards, earnings stats, and map-based discovery.",
        href: "https://play.google.com/store/apps/details?id=com.CniConstruct",
        appStore: "https://apps.apple.com/pk/app/cniconstruct/id6756973411",
        playStore: "https://play.google.com/store/apps/details?id=com.CniConstruct",
        frameworks: [
          { id: 1, name: "React Native" },
          { id: 2, name: "Maps & Geolocation" },
          { id: 3, name: "Redux" },
          { id: 4, name: "REST API" },
        ],
      },
    ],
  },

  contactSummary: {
    marqueeTop: ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"],
    marqueeBottom: ["contact us", "contact us", "contact us", "contact us", "contact us"],
    // Rendered as: " Let’s build a / {emphasis1} & {emphasis2} / {line2} {accent} "
    headline: {
      line1: "Let’s build a",
      emphasis1: "memorable",
      conjunction: "&",
      emphasis2: "inspiring",
      line2: "mobile app",
      accent: "together",
    },
  },

  contact: {
    subTitle: "You Dream It, I Code it",
    title: "Contact",
    text: `Got an app idea or a role in mind?
    I’d love to hear from you and discuss further!`,
    email: "abdullah.tariq.ansariata@gmail.com",
    phone: "+92 316 0120286",
    marquee: ["Say Hello", "Start A Project", "Open For Work", "Let's Chat", "Get In Touch"],
  },

  socials: [
    {
      name: "Email",
      href: "mailto:abdullah.tariq.ansariata@gmail.com",
      icon: "lucide:mail",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/abdullahansari2001",
      icon: "lucide:linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/abdullahansariata",
      icon: "lucide:github",
    },
  ],
};

export default content;
