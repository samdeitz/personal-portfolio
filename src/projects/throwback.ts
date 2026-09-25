import type { Project } from "./types";
import throwbackBanner from "../assets/images/throwback-banner.jpg";

const throwback = {
  kind: "project",
  id: "throwback",
  title: "Throwback",
  desktopImageSrc: "throwback.jpg",
  metadata: {
    summary:
      "A product-design concept for helping university students reconnect with old friends. Our three-person team took the idea from early wireframes to an interactive high-fidelity prototype during a 24-hour design sprint.",
    status: "Completed",
    links: [
      {
        label: "Explore the presentation",
        href: "https://colorful-goal-666822.framer.app/",
        icon: "open",
      },
    ],
    technologies: ["Framer", "Product Design"],
    banner: {
      src: throwbackBanner,
      alt: "ThrowBack",
    },
  },
  content: [
    {
      type: "heading",
      text: "Designing around reconnection",
      level: 3,
    },
    {
      type: "paragraph",
      text: 'Throwback was created around the theme "2016" and the idea of reconnecting with people from earlier parts of your life.',
    },
    {
      type: "paragraph",
      text: "Users would enter information such as their age, school, and the part of the city they grew up in. The app would use those shared connections to recommend old friends or people they may have known.",
    },
    {
      type: "paragraph",
      text: "The concept also included messaging, event scheduling, and invitations.",
    },
    {
      type: "heading",
      text: "Going from idea to prototype in 24 hours",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Our three-person team worked collaboratively through ideation, low-fidelity wireframes, mid-fidelity designs, a user persona, and a complete high-fidelity interactive prototype.",
    },
    {
      type: "paragraph",
      text: "The core idea stayed relatively consistent, so most of our iteration focused on making the experience feel familiar and easy to understand.",
    },
    {
      type: "heading",
      text: "Designing for familiarity and accessibility",
      level: 3,
    },
    {
      type: "paragraph",
      text: "We used familiar navigation patterns, strong contrast, and straightforward interactions so users would not have to learn an unusual interface before using the app.",
    },
    {
      type: "paragraph",
      text: "That emphasis on usability contributed to the project receiving the Most Accessible Design award.",
    },
    {
      type: "heading",
      text: "Presenting the product",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I contributed heavily to the presentation. We built a Framer site showing our design process, persona, screens, and final prototype and presented the concept to judges at an event with approximately 150 participants.",
    },
  ],
} as const satisfies Project;

export default throwback;
