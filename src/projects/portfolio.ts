import type { Project } from "./types";

const portfolio = {
  kind: "project",
  id: "portfolio",
  title: "Portfolio Website",
  desktopImageSrc: "portfolio.png",
  metadata: {
    summary:
      "A desktop-inspired portfolio built from scratch around a custom Hyprland-style window manager. Projects, experience, search, themes, and terminal features all behave like applications inside the desktop environment.",
    status: "Deployed",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/samdeitz/personal-portfolio",
        icon: "github",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  content: [
    {
      type: "heading",
      text: "Building a portfolio that behaves like a desktop",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I did not want my portfolio to feel like a conventional list of cards and sections. I designed it as a desktop environment where projects, experience, and information about me behave like applications.",
    },
    {
      type: "paragraph",
      text: "The entire interface and interaction model were designed and built by me.",
    },
    {
      type: "heading",
      text: "Building the window manager",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The most important part of the project is the custom window manager. I liked the way Hyprland handles tiled windows, so I used that idea as the foundation for the portfolio.",
    },
    {
      type: "paragraph",
      text: "Users can open, focus, minimize, close, and interact with windows. I built the state manager using React Context, reducers, and tree-based state.",
    },
    {
      type: "paragraph",
      text: "The application tracks themes, open windows, minimized windows, focused windows, filesystem data, and terminal command history.",
    },
    {
      type: "heading",
      text: "Making the interface feel like an operating system",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The taskbar keeps track of minimized applications, while the search interface lets users find projects or apps by name and open them directly into a window.",
    },
    {
      type: "paragraph",
      text: "The site also includes light and dark themes and a working terminal with a growing set of commands.",
    },
    {
      type: "heading",
      text: "Adapting the experience to mobile",
      level: 3,
    },
    {
      type: "paragraph",
      text: "A desktop window manager does not translate directly to a phone, so the mobile experience changes the interaction model instead of simply shrinking it.",
    },
    {
      type: "paragraph",
      text: "On mobile, only one application is open at a time and its content becomes vertically scrollable. Window minimization is removed because the taskbar no longer has enough room to function like the desktop version.",
    },
  ],
} as const satisfies Project;

export default portfolio;
