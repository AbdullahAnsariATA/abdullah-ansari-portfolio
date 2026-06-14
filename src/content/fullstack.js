// Content for the Full Stack portfolio site.
// Same shape as reactnative.js — the shared UI reads these exact fields.
// Do NOT change the structure/keys.
const content = {
  meta: {
    title: "Abdullah Ansari — Full Stack Developer",
  },

  // Navbar menu items (must match the section ids used by react-scroll)
  nav: ["home", "services", "about", "works", "contact"],

  hero: {
    subTitle: "Full Stack Engineer · 4+ Years",
    title: "Abdullah Ansari",
    text: `I build scalable web applications
with Next.js, React & Node.js — from
Figma design to production deployment`,
  },

  // Animated scrolling words above the Services section
  serviceSummary: {
    line1: "Full Stack",
    line2: { left: "React", right: "Next.js" },
    line3: { left: "Node.js", middle: "APIs", right: "Databases" },
    line4: "Scalability",
  },

  services: {
    subTitle: "Behind the scene, Beyond the screen",
    title: "Services",
    text: `From Figma design to deployment, here's what I bring
    to building production-grade web applications:`,
    items: [
      {
        title: "Frontend Development",
        description: "Modern, responsive web interfaces built to scale",
        items: [
          { title: "React.js & Next.js (App Router)", description: "" },
          { title: "TypeScript & JavaScript (ES6+)", description: "" },
          { title: "Tailwind CSS & NextUI", description: "" },
          { title: "GSAP & Framer Motion", description: "" },
        ],
      },
      {
        title: "Backend & APIs",
        description: "Scalable services and reliable data flow",
        items: [
          { title: "Node.js, NestJS & Express.js", description: "" },
          { title: "RESTful API Design & Integration", description: "" },
          { title: "MongoDB, Firebase & Supabase", description: "" },
          { title: "JWT / Bearer Token Auth", description: "" },
        ],
      },
      {
        title: "State & Data Management",
        description: "Predictable state across the entire app",
        items: [
          { title: "Redux (RTK, Thunk, Query)", description: "" },
          { title: "React Query & Zustand", description: "" },
          { title: "Axios Client & Interceptors", description: "" },
          { title: "Redux Persist & Context API", description: "" },
        ],
      },
      {
        title: "Integrations & Delivery",
        description: "Real-time features and production-grade tooling",
        items: [
          { title: "Stripe Payments & Wallets", description: "" },
          { title: "Socket.IO & Firebase (FCM)", description: "" },
          { title: "Google Maps & i18n / RTL", description: "" },
          { title: "Git, Vite, Sentry & Agile", description: "" },
        ],
      },
    ],
  },

  about: {
    subTitle: "Building for the web, Engineering for scale",
    title: "About",
    name: "Abdullah Ansari",
    image: "images/pfp.png",
    text: `Passionate about clean architecture
    I build scalable, high-performance web apps
    from Figma design to production deployment`,
    aboutText: `I'm a Full Stack Engineer with 4+ years of experience designing, building, and maintaining scalable digital products. I specialize in Next.js, React, Node.js, and TypeScript—delivering clean, maintainable code and solving real business problems from Figma design to production deployment.
  Outside of building:`,
    highlights: [
      {
        icon: "lucide:code",
        label: "Exploring new web frameworks and tooling",
      },
      {
        icon: "lucide:server",
        label: "Designing scalable APIs and backend services",
      },
      {
        icon: "lucide:gauge",
        label: "Chasing faster load times and better performance",
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
        name: "HagerBet — Ethiopian VOD Streaming Platform",
        description:
          "A bilingual (English & Amharic) Netflix-style streaming platform with Stripe tiered & gift subscriptions, a resume-progress player, watchlists, ratings, multi-profile support (up to 4 per account), and real-time live agent chat.",
        href: "https://hagerbet.tv",
        appStore: "",
        playStore: "",
        frameworks: [
          { id: 1, name: "Next.js 15" },
          { id: 2, name: "TypeScript" },
          { id: 3, name: "Redux Toolkit" },
          { id: 4, name: "Stripe" },
          { id: 5, name: "Socket.IO" },
        ],
      },
      {
        id: 2,
        name: "Cabbidder — Ride & Parcel Bidding Marketplace",
        description:
          "A dual-interface reverse-auction marketplace connecting customers with operators/drivers for rides, airport transfers, and parcel deliveries—featuring role-based auth, Stripe bid settlements and operator wallets, real-time chat, and Google Maps routing.",
        href: "https://cabbidder.com",
        appStore: "",
        playStore: "",
        frameworks: [
          { id: 1, name: "Next.js 15" },
          { id: 2, name: "TypeScript" },
          { id: 3, name: "Redux Toolkit" },
          { id: 4, name: "Stripe" },
          { id: 5, name: "Google Maps" },
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
      line2: "web application",
      accent: "together",
    },
  },

  contact: {
    subTitle: "You Dream It, I Build It",
    title: "Contact",
    text: `Got a product idea or a role in mind?
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
