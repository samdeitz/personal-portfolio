import type { Project } from "./types";
import swingsyncBanner from "../assets/images/swingsync-banner.jpg";

const swingSync = {
  kind: "project",
  id: "swing-sync",
  title: "SwingSync",
  desktopImageSrc: "swingsync.jpg",
  metadata: {
    summary:
      "A Java developer utility that hot-reloads Swing interfaces without restarting the application. I built it using file watching, Java Reflection, and custom ClassLoaders to make Swing UI development faster and less frustrating.",
    status: "Published",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/samdeitz/SwingSync",
        icon: "github",
      },
    ],
    technologies: [
      "Java",
      "Java Swing",
      "Reflection",
      "ClassLoaders",
      "WatchService",
      "JitPack",
      "Maven",
      "Gradle",
    ],
    banner: {
      src: swingsyncBanner,
      alt: "SwingSync",
    },
  },
  content: [
    {
      type: "heading",
      text: "Solving a frustrating Swing workflow",
      level: 3,
    },
    {
      type: "paragraph",
      text: "SwingSync came from a problem I experienced while building Java Swing projects: every UI change required stopping the application, rebuilding it, starting it again, and navigating back to the screen I was working on.",
    },
    {
      type: "paragraph",
      text: "I wanted Swing development to have a faster feedback loop, so I built a utility that can rebuild the interface while keeping the application window open.",
    },
    {
      type: "heading",
      text: "Rebuilding the UI at runtime",
      level: 3,
    },
    {
      type: "paragraph",
      text: "SwingSync watches the project's compiled build directory for changes. When it detects an update, it identifies the application's root, creates a new ClassLoader, tears down the old UI hierarchy, and reconstructs the root panel using the newly loaded classes.",
    },
    {
      type: "paragraph",
      text: "Java Reflection is used to inspect the necessary classes and rebuild the interface with the constructor parameters supplied by the developer.",
    },
    {
      type: "heading",
      text: "Learning Java internals through the project",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Before SwingSync, I had very little experience with Reflection or ClassLoaders.",
    },
    {
      type: "paragraph",
      text: "The hardest part of the project was learning how those systems work well enough to design an architecture around them. Building the utility forced me to understand how compiled classes, object construction, and runtime class loading interact inside a running Java application.",
    },
    {
      type: "heading",
      text: "Keeping the API simple",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I wanted SwingSync to be approachable for students.",
    },
    {
      type: "paragraph",
      text: "After adding the dependency, a developer provides the JFrame, root JPanel, and constructor parameters to the Syncher and starts it. SwingSync handles the file watching and runtime rebuilding from there.",
    },
  ],
} as const satisfies Project;

export default swingSync;
