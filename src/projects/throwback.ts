import type { Project } from "./types";
import throwbackBanner from "../assets/images/throwback-banner.jpg";
import landing from "../assets/storyImages/throwback/landing.png";
import appPages from "../assets/storyImages/throwback/appPages.png";

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
  content: [],
  story: {
    overview: {
      eyebrow: "Throwback",
      headline: "Find a familiar face from another chapter.",
      summary:
        "A 24-hour design challenge exploring reconnection, shared memories, and accessible interaction.",
      facts: [
        {
          label: "Team",
          value: "3 designers",
        },
        {
          label: "Timebox",
          value: "24 hours",
        },
        {
          label: "Recognition",
          value: "Most Accessible Design",
        },
      ],
      stack: ["Figma", "Framer"],
      image: {
        type: "figure",
        src: throwbackBanner,
        alt: "Throwback project preview",
        caption: "Throwback: project preview",
      },
    },
    chapters: [
      {
        id: "reconnection",
        label: "The idea",
        eyebrow: "01 / The idea",
        title: "A shared past as a starting point.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  'Throwback was created around the theme "2016" and the idea of reconnecting with people from earlier parts of your life.',
                  "Users would enter information such as their age, school, and the part of the city they grew up in. The app would use those shared connections to recommend old friends or people they may have known.",
                  "The concept also included messaging, event scheduling, and invitations.",
                ],
              },
            ],
            visual: {
              type: "figure",
              src: landing,
              alt: "Throwback project preview",
              caption: "Throwback prototype preview.",
            },
          },
        ],
      },
      {
        id: "process",
        label: "From idea to prototype",
        eyebrow: "02 / From idea to prototype",
        title: "One day to make the idea tangible.",
        blocks: [
          {
            type: "flow",
            label: "Design progression",
            items: [
              {
                label: "01",
                title: "Explore",
                text: "Ideation and a user persona.",
              },
              {
                label: "02",
                title: "Structure",
                text: "Low- and mid-fidelity wireframes.",
              },
              {
                label: "03",
                title: "Prototype",
                text: "A high-fidelity interactive experience.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "Our three-person team worked collaboratively through ideation, low-fidelity wireframes, mid-fidelity designs, a user persona, and a complete high-fidelity interactive prototype.",
              "The core idea stayed relatively consistent, so most of our iteration focused on making the experience feel familiar and easy to understand.",
            ],
          },
        ],
      },
      {
        id: "accessibility",
        label: "Familiar by design",
        eyebrow: "03 / Familiar by design",
        title: "Spend less effort learning the interface.",
        blocks: [
          {
            type: "comparison",
            items: [
              {
                title: "Navigation",
                text: "Familiar patterns and straightforward interactions.",
              },
              {
                title: "Readability",
                text: "Strong contrast and accessible visual choices.",
              },
            ],
          },
          {
            type: "callout",
            label: "Recognition",
            text: "That emphasis on usability contributed to the project receiving the Most Accessible Design award.",
          },
          {
            type: "figure",
            src: appPages,
            alt: "Throwback project preview",
            caption:
              "The existing design preview; individual prototype screens can replace it.",
          },
        ],
      },
      {
        id: "presentation",
        label: "Telling the story",
        eyebrow: "04 / Telling the story",
        title: "Bring the judges into the process.",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "I contributed heavily to the presentation. We built a Framer site showing our design process, persona, screens, and final prototype and presented the concept to judges at an event with approximately 150 participants.",
            ],
          },
          {
            type: "callout",
            label: "My contribution",
            text: "I contributed heavily to the presentation, connecting the persona, design iterations, and final prototype.",
          },
        ],
      },
    ],
  },
} as const satisfies Project;

export default throwback;
