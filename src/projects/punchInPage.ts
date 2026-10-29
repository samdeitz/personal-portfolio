import type { Project } from "./types";
import previewImage from "../assets/images/punch-in-banner2.png";
import formImage from "../assets/storyImages/punchin/form.png";

const punchInPage = {
  kind: "project",
  id: "punch-in-page",
  title: "Punch-in Page",
  desktopImageSrc: "punch-in.jpg",
  metadata: {
    summary:
      "A responsive replacement for MarketDental's outdated employee punch-in interface. I handled the Svelte frontend implementation, backend integration, state management, and responsive employee table while working directly with the client. The linked GitHub repository is a demo version with a fake backend.",
    status: "Deployed",
    links: [
      {
        href: "https://github.com/samdeitz/md-punch-in",
        label: "GitHub",
        icon: "github",
      },
      {
        href: "https://punchin.samdeitz.ca",
        label: "Visit Demo",
        icon: "open",
      },
    ],
    technologies: ["Svelte", "JavaScript", "Vite", "Tailwind CSS"],
    banner: {
      src: previewImage,
      alt: "Punch-in Page preview",
    },
  },
  content: [],
  story: {
    overview: {
      eyebrow: "Punch-in Page",
      headline: "A better start to the workday.",
      summary:
        "A responsive punch-in interface for MarketDental, connected to the existing backend and refined with client feedback.",
      facts: [
        {
          label: "My role",
          value: "Frontend implementation",
        },
        {
          label: "Collaboration",
          value: "Design partner + client",
        },
        {
          label: "Delivery",
          value: "Internal deployment",
        },
      ],
      stack: ["Svelte", "JavaScript", "Tailwind CSS"],
      image: {
        type: "figure",
        src: previewImage,
        alt: "Punch-in Page project preview",
        caption: "Punch-in Page: project preview",
      },
    },
    chapters: [
      {
        id: "daily-task",
        label: "The daily task",
        eyebrow: "01 / The daily task",
        title: "Make a routine task feel effortless.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  "I rebuilt MarketDental's outdated and unresponsive employee punch-in interface using Svelte, JavaScript, and Tailwind CSS.",
                  "I worked with a partner who handled most of the design while I focused on frontend implementation. Mobile usability was especially important, and we refined the interface through direct client feedback.",
                ],
              },
              {
                type: "callout",
                label: "My contribution",
                text: "My partner handled most of the design; I focused on implementing the frontend.",
              },
            ],
            visual: {
              type: "figure",
              src: formImage,
              alt: "Punch-in Page project preview",
              caption: "The punch-in interface.",
            },
          },
        ],
      },
      {
        id: "integration",
        label: "Working with the API",
        eyebrow: "02 / Working with the API",
        title: "New interface. Existing infrastructure.",
        blocks: [
          {
            type: "flow",
            label: "Punch-in integration",
            items: [
              {
                label: "01",
                title: "Employee action",
                text: "Punch in or punch out from the interface.",
              },
              {
                label: "02",
                title: "Existing API",
                text: "GET and POST endpoints supply status and employee information.",
              },
              {
                label: "03",
                title: "Shared state",
                text: "Svelte stores make fetched data available across components.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "I connected the frontend to existing GET and POST endpoints for punch-in and punch-out actions, employee information, punch status, and styling settings.",
              "The backend already handled authentication and validation. I used the supplied Docker image to run the backend locally while developing against its existing API.",
            ],
          },
          {
            type: "details",
            title: "Developing against the real API",
            blocks: [
              {
                type: "prose",
                paragraphs: [
                  "I used the supplied Docker image to run the backend locally. Authentication and validation remained the backend’s responsibility.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "delivery",
        label: "From screen to handoff",
        eyebrow: "03 / From screen to handoff",
        title: "Useful on a phone. Useful on paper.",
        blocks: [
          {
            type: "comparison",
            items: [
              {
                title: "On screen",
                text: "A responsive employee table shows punch status, with optional office and position information.",
              },
              {
                title: "On paper",
                text: "Print styling makes the employee information usable outside the application.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "I also optimized the table for printing. Svelte stores let components reuse fetched data instead of making unnecessary requests, while reusable components and loading states kept the interface consistent.",
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "We worked directly with the client, completed a round of feedback, implemented the requested changes, and handed the frontend back for internal deployment.",
            ],
            title: "Refining it with the client",
          },
          {
            type: "callout",
            label: "Try it safely",
            text: "The linked repository and public demo use a fake backend.",
          },
        ],
      },
    ],
  },
} as const satisfies Project;

export default punchInPage;
