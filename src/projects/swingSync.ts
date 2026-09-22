import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const swingSync = {
  kind: "project",
  id: "swing-sync",
  title: "SwingSync",
  desktopImageSrc: "swingsync.jpg",
  content: [
    {
      type: "heading",
      text: "Shortening the Swing development loop",
    },
    {
      type: "paragraph",
      text: "After building a Java Swing project, I was frustrated by having to restart the application for every UI change. I built SwingSync as a developer utility that reloads a Swing interface while keeping its window open, so developers can see their changes without repeatedly relaunching the application.",
    },
    {
      type: "heading",
      text: "Watching compiled classes and rebuilding the UI",
    },
    {
      type: "paragraph",
      text: "SwingSync watches the Java build folder for file changes. When compiled classes change, it uses reflection and a new ClassLoader to rebuild the root interface with the supplied constructor parameters and replace the active UI. Watching build output means changes become visible after compilation, rather than merely when a source file is saved.",
    },
    {
      type: "heading",
      text: "Keeping the integration small",
    },
    {
      type: "paragraph",
      text: "I wanted the setup to be simple enough for the high-school projects that originally inspired it. A developer provides a JFrame, a root JPanel, and the panel’s constructor parameters to the Syncher, then calls start. I published the library on JitPack so it can be added as a Maven or Gradle dependency.",
    },
    {
      type: "heading",
      text: "Learning the runtime architecture",
    },
    {
      type: "paragraph",
      text: "I learned reflection and ClassLoaders while building the tool. The hardest part was understanding how to load a new version of the UI classes and reconstruct the interface around them. The result is a reusable library built around a specific development frustration; I had not recorded external adoption at the time of this project account.",
    },
    {
      type: "link",
      label: "View source",
      href: "https://github.com/samdeitz/SwingSync",
      icon: "github",
    },
    {
      type: "technologies",
      technologies: ["Java", "Java Swing Library"],
    },
  ],
} as const satisfies Project;

export default swingSync;
