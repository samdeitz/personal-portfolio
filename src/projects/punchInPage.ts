import type { Project } from "./types";
import previewImage from "../assets/images/punch-in-banner2.jpg";

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
  content: [
    {
      type: "heading",
      text: "Modernizing the employee punch-in experience",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I rebuilt MarketDental's outdated and unresponsive employee punch-in interface using Svelte, JavaScript, and Tailwind CSS.",
    },
    {
      type: "paragraph",
      text: "I worked with a partner who handled most of the design while I focused on frontend implementation. Mobile usability was especially important, and we refined the interface through direct client feedback.",
    },
    {
      type: "heading",
      text: "Integrating with the existing backend",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I connected the frontend to existing GET and POST endpoints for punch-in and punch-out actions, employee information, punch status, and styling settings.",
    },
    {
      type: "paragraph",
      text: "The backend already handled authentication and validation. I used the supplied Docker image to run the backend locally while developing against its existing API.",
    },
    {
      type: "heading",
      text: "Making employee information easier to use",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I built a responsive employee table showing who was punched in and when, with optional office and position information.",
    },
    {
      type: "paragraph",
      text: "I also optimized the table for printing. Svelte stores let components reuse fetched data instead of making unnecessary requests, while reusable components and loading states kept the interface consistent.",
    },
    {
      type: "heading",
      text: "Delivering the new interface",
      level: 3,
    },
    {
      type: "paragraph",
      text: "We worked directly with the client, completed a round of feedback, implemented the requested changes, and handed the frontend back for internal deployment.",
    },
  ],
} as const satisfies Project;

export default punchInPage;
