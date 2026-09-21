import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const portfolio = {
  kind: "project",
  id: "portfolio",
  title: "Portfolio Website",
  desktopImageSrc: "logo-dark.png",
  content: [
    {
      type: "heading",
      text: "A portfolio you can explore like a desktop"
    },
    {
      type: "paragraph",
      text: "I designed and built this single-page portfolio from scratch with React, TypeScript, Vite, and Tailwind CSS. Instead of presenting every project as a conventional section, I made each one an application that opens inside a desktop. The design takes inspiration from the tiling behavior I enjoy in Hyprland."
    },
    {
      type: "heading",
      text: "Building the window manager"
    },
    {
      type: "paragraph",
      text: "The window manager is the part I am most proud of. I used React Context, reducers, and a tree-based layout model to manage opening, focusing, minimizing, and closing windows. The taskbar keeps minimized apps available, and a desktop-style search lets visitors find a project by name and open it from the results."
    },
    {
      type: "heading",
      text: "Connecting the desktop pieces"
    },
    {
      type: "paragraph",
      text: "Shared state connects the theme, window focus, filesystem, and terminal history. The terminal supports a growing set of portfolio commands, turning the filesystem into another way to navigate the site. Project metadata and ordered content blocks now live together in individual typed files, so each project can tell its story with its own sequence of text, images, and links."
    },
    {
      type: "heading",
      text: "Adapting the interaction for mobile"
    },
    {
      type: "paragraph",
      text: "I kept the desktop metaphor but simplified it on smaller screens: apps become scrollable, only one window opens at a time, and minimizing is unavailable because the mobile taskbar has no room for saved windows. Light and dark themes and restrained animations keep the interface focused on the content. This was one of my first React projects, and building the window system gave me a reason to work through state and UI architecture in depth."
    },
    {
      type: "link",
      label: "View source",
      href: "https://github.com/samdeitz/personal-portfolio",
      icon: "github"
    },
    {
      type: "technologies",
      technologies: [
        "React.js",
        "Vite",
        "TailwindCSS"
      ]
    }
  ]
} as const satisfies Project;

export default portfolio;
