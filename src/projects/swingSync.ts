import type { Project } from "./types";
import swingsyncBanner from "../assets/images/swingsync-banner.jpg";
import ssDemo from "../assets/storyImages/swingSync/ssDemoSlow.gif";

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
  content: [],
  story: {
    overview: {
      eyebrow: "SwingSync",
      headline: "Change the UI. Keep the window open.",
      summary:
        "A Java utility that rebuilds Swing interfaces at runtime, shortening the stop–rebuild–restart cycle.",
      facts: [
        {
          label: "My role",
          value: "Library developer",
        },
        {
          label: "Focus",
          value: "Runtime UI rebuilding",
        },
        {
          label: "Audience",
          value: "Swing developers",
        },
      ],
      stack: ["Java", "Reflection", "ClassLoaders"],
      image: {
        type: "figure",
        src: swingsyncBanner,
        alt: "SwingSync project preview",
        caption: "SwingSync: project preview",
      },
    },
    chapters: [
      {
        id: "feedback-loop",
        label: "The feedback loop",
        eyebrow: "01 / The feedback loop",
        title: "The restart was getting in the way.",
        blocks: [
          {
            type: "comparison",
            items: [
              {
                title: "The old loop",
                text: "Stop the app, rebuild, start it again, and navigate back to the screen.",
              },
              {
                title: "The goal",
                text: "Rebuild the interface while keeping the application window open.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "SwingSync came from a problem I experienced while building Java Swing projects: every UI change required stopping the application, rebuilding it, starting it again, and navigating back to the screen I was working on.",
            ],
          },
        ],
      },
      {
        id: "runtime",
        label: "Under the hood",
        eyebrow: "02 / Under the hood",
        title: "A fresh interface from fresh classes.",
        blocks: [
          {
            type: "flow",
            label: "SwingSync reload lifecycle",
            items: [
              {
                label: "01",
                title: "Watch",
                text: "Detect changes in the compiled build directory.",
              },
              {
                label: "02",
                title: "Load",
                text: "Create a new ClassLoader for the updated classes.",
              },
              {
                label: "03",
                title: "Rebuild",
                text: "Tear down the old UI and reconstruct the root panel.",
              },
            ],
          },
          {
            type: "details",
            title: "Reflection and construction",
            blocks: [
              {
                type: "prose",
                paragraphs: [
                  "SwingSync watches the project's compiled build directory for changes. When it detects an update, it identifies the application's root, creates a new ClassLoader, tears down the old UI hierarchy, and reconstructs the root panel using the newly loaded classes.",
                  "Java Reflection is used to inspect the necessary classes and rebuild the interface with the constructor parameters supplied by the developer.",
                ],
              },
            ],
          },
          {
            type: "callout",
            label: "The hard part",
            text: "The hardest part of the project was learning how those systems work well enough to design an architecture around them. Building the utility forced me to understand how compiled classes, object construction, and runtime class loading interact inside a running Java application.",
          },
        ],
      },
      {
        id: "api",
        label: "A small public API",
        eyebrow: "03 / A small public API",
        title: "Keep the setup approachable.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  "I wanted SwingSync to be approachable for students.",
                  "After adding the dependency, a developer provides the JFrame, root JPanel, and constructor parameters to the Syncher and starts it. SwingSync handles the file watching and runtime rebuilding from there.",
                ],
              },
              {
                type: "prose",
                paragraphs: [
                  "Before SwingSync, I had very little experience with Reflection or ClassLoaders.",
                ],
              },
              {
                type: "callout",
                label: "What I learned",
                text: "How compiled classes, constructor parameters, and runtime class loading work together.",
              },
            ],
            visual: {
              type: "figure",
              src: ssDemo,
              alt: "SwingSync project preview",
              caption:
                "Once you save your file and the file watcher sees that it has been modified, it rebuilds from the new classloader and updates your change.",
            },
          },
        ],
      },
    ],
  },
} as const satisfies Project;

export default swingSync;
