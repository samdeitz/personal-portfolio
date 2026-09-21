import type { Project } from "./types";
import previewImage from "../assets/images/punch-in-banner2.jpg";

const punchInPage = {
  kind: "project",
  id: "punch-in-page",
  title: "Punch-in Page",
  desktopImageSrc: "punch-in.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Punch-in Page preview",
    },
    {
      type: "heading",
      text: "Modernizing MarketDental’s employee punch-in page",
    },
    {
      type: "paragraph",
      text: "I rebuilt an outdated, unresponsive employee punch-in interface for MarketDental using Svelte, JavaScript, and Tailwind CSS. I worked with a partner who led the design while I handled the frontend implementation. Mobile usability was a priority, and we refined the interface through direct client feedback.",
    },
    {
      type: "heading",
      text: "Integrating with the existing backend",
    },
    {
      type: "paragraph",
      text: "I connected GET and POST requests for punch-in and punch-out actions, employee information, current status, and interface settings. The backend already handled authentication and validation. I used the supplied Docker image to run it locally while developing against its existing API.",
    },
    {
      type: "heading",
      text: "Making employee information easier to use",
    },
    {
      type: "paragraph",
      text: "I built a responsive employee table showing who was punched in and when, with controls for displaying office and position information. I also optimized the print layout so the table could be used on paper. Svelte stores let components reuse fetched data, while reusable components and loading states kept the UI consistent.",
    },
    {
      type: "heading",
      text: "Client feedback and delivery",
    },
    {
      type: "paragraph",
      text: "We worked through a round of client feedback, implemented the changes, and handed back the frontend. The interface was deployed for internal use; deployment was handled outside our team. The local portfolio demo and source code are linked below.",
    },
    {
      type: "group",
      direction: "horizontal",
      content: [
        {
          type: "link",
          href: "https://github.com/samdeitz/md-punch-in",
          label: "Go to repo",
          icon: "github",
        },
        {
          type: "link",
          href: "/md-punch-in",
          label: "Visit Site",
          icon: "open",
        },
      ],
    },
    {
      type: "technologies",
      technologies: ["Svelte", "Vite", "TailwindCSS"],
    },
  ],
} as const satisfies Project;

export default punchInPage;
