// Content for the Full Stack portfolio site.
// Same shape as reactnative.js — fill in the TODO placeholders with your full-stack copy.
// Do NOT change the structure/keys: the shared UI reads these exact fields.
const content = {
  meta: {
    title: "Abdullah Ansari — Full Stack Developer",
  },

  nav: ["home", "services", "about", "works", "contact"],

  hero: {
    subTitle: "Full Stack Developer · 4+ Years", // TODO
    title: "Abdullah Ansari",
    text: `TODO: hero tagline line one
TODO: hero tagline line two
TODO: hero tagline line three`,
  },

  serviceSummary: {
    line1: "Frontend", // TODO
    line2: { left: "React", right: "Next.js" }, // TODO
    line3: { left: "APIs", middle: "Databases", right: "Cloud" }, // TODO
    line4: "Scalability", // TODO
  },

  services: {
    subTitle: "TODO: services subtitle",
    title: "Services",
    text: `TODO: services intro line one
    TODO: services intro line two`,
    items: [
      {
        title: "TODO: Service group 1",
        description: "TODO: short description",
        items: [
          { title: "TODO: item 1", description: "" },
          { title: "TODO: item 2", description: "" },
          { title: "TODO: item 3", description: "" },
          { title: "TODO: item 4", description: "" },
        ],
      },
      {
        title: "TODO: Service group 2",
        description: "TODO: short description",
        items: [
          { title: "TODO: item 1", description: "" },
          { title: "TODO: item 2", description: "" },
          { title: "TODO: item 3", description: "" },
          { title: "TODO: item 4", description: "" },
        ],
      },
      {
        title: "TODO: Service group 3",
        description: "TODO: short description",
        items: [
          { title: "TODO: item 1", description: "" },
          { title: "TODO: item 2", description: "" },
          { title: "TODO: item 3", description: "" },
          { title: "TODO: item 4", description: "" },
        ],
      },
      {
        title: "TODO: Service group 4",
        description: "TODO: short description",
        items: [
          { title: "TODO: item 1", description: "" },
          { title: "TODO: item 2", description: "" },
          { title: "TODO: item 3", description: "" },
          { title: "TODO: item 4", description: "" },
        ],
      },
    ],
  },

  about: {
    subTitle: "TODO: about subtitle",
    title: "About",
    name: "Abdullah Ansari",
    image: "images/pfp.png",
    text: `TODO: about header line one
    TODO: about header line two
    TODO: about header line three`,
    aboutText: `TODO: about paragraph describing your full-stack background and focus.
  Outside of building:`,
    highlights: [
      { icon: "lucide:code", label: "TODO: highlight 1" },
      { icon: "lucide:server", label: "TODO: highlight 2" },
      { icon: "lucide:gauge", label: "TODO: highlight 3" },
      { icon: "lucide:gamepad-2", label: "TODO: highlight 4" },
    ],
  },

  works: {
    subTitle: "TODO: works subtitle",
    title: "Works",
    text: `TODO: works intro line one
    TODO: works intro line two
    TODO: works intro line three`,
    projects: [
      {
        id: 1,
        name: "TODO: Project name",
        description: "TODO: project description",
        href: "",
        appStore: "",
        playStore: "",
        frameworks: [
          { id: 1, name: "TODO" },
          { id: 2, name: "TODO" },
          { id: 3, name: "TODO" },
        ],
      },
      {
        id: 2,
        name: "TODO: Project name",
        description: "TODO: project description",
        href: "",
        appStore: "",
        playStore: "",
        frameworks: [
          { id: 1, name: "TODO" },
          { id: 2, name: "TODO" },
          { id: 3, name: "TODO" },
        ],
      },
      {
        id: 3,
        name: "TODO: Project name",
        description: "TODO: project description",
        href: "",
        appStore: "",
        playStore: "",
        frameworks: [
          { id: 1, name: "TODO" },
          { id: 2, name: "TODO" },
          { id: 3, name: "TODO" },
        ],
      },
    ],
  },

  contactSummary: {
    marqueeTop: ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"],
    marqueeBottom: ["contact us", "contact us", "contact us", "contact us", "contact us"],
    headline: {
      line1: "Let’s build a",
      emphasis1: "memorable",
      conjunction: "&",
      emphasis2: "inspiring",
      line2: "web application", // TODO
      accent: "together",
    },
  },

  contact: {
    subTitle: "TODO: contact subtitle",
    title: "Contact",
    text: `TODO: contact prompt line one
    TODO: contact prompt line two`,
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
