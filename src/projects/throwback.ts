import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const throwback = {
  kind: "project",
  id: "throwback",
  title: "Throwback",
  desktopImageSrc: "logo-dark.png",
  content: [
    {
      type: "heading",
      text: "Designing a way to reconnect"
    },
    {
      type: "paragraph",
      text: "Throwback is a social-app concept for university students who want to reconnect with old friends. During a 24-hour design sprint with a “2016” theme, our team explored recommendations based on shared schools and the areas where people grew up. The concept also included messaging and planning events together."
    },
    {
      type: "heading",
      text: "From an idea to an interactive prototype"
    },
    {
      type: "paragraph",
      text: "I contributed to ideation, low- and mid-fidelity wireframes, the prototype, and the presentation. We developed a user persona and screens for the main app flows, then brought them together in a high-fidelity interactive prototype. Familiar navigation and clear contrast were important to making the design approachable."
    },
    {
      type: "heading",
      text: "Presenting the process"
    },
    {
      type: "paragraph",
      text: "We created a Framer presentation site showing the persona, design process, screens, and final prototype. I helped present the work to judges at an event with approximately 150 participants, where our team won Most Accessible Design. The deliverable was a design prototype and presentation site, rather than an implemented social network."
    },
    {
      type: "link",
      label: "Explore the presentation",
      href: "https://colorful-goal-666822.framer.app/",
      icon: "open"
    }
  ]
} as const satisfies Project;

export default throwback;
