import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const childcan = {
  kind: "project",
  id: "childcan",
  title: "Childcan",
  desktopImageSrc: "childcan.jpg",
  content: [
    {
      type: "heading",
      text: "Helping families find the information they need",
    },
    {
      type: "paragraph",
      text: "Through Tethos, I worked as one of two senior developers alongside five junior developers on Childcan’s website redesign. The existing Squarespace site had more than 20 pages, and visitors struggled to find information. We worked together in Figma to rethink navigation, accessibility, and the path to donating.",
    },
    {
      type: "heading",
      text: "A reusable system for content pages",
    },
    {
      type: "paragraph",
      text: "My main contribution was a typed content renderer for the React and Next.js implementation. Many pages shared the same kinds of content, so I modeled elements such as paragraphs and titles and rendered each with consistent styling. This let us populate more than ten content pages without recreating the same markup and layout logic for each one.",
    },
    {
      type: "heading",
      text: "Routing, search, and team support",
    },
    {
      type: "paragraph",
      text: "I built slug-based routes for family stories and events, the responsive header, and the frontend of the fuzzy-search interface. The other senior developer implemented the fuzzy-matching logic. I took on the more complex React work and helped junior developers when they needed support. Our frontend used TypeScript and Tailwind CSS.",
    },
    {
      type: "heading",
      text: "Adapting to the client’s editing needs",
    },
    {
      type: "paragraph",
      text: "The client ultimately wanted the freedom to move page content around, and the project transitioned to Webflow, where the site launched. Our React implementation and early Sanity collections were not the final production platform. The content renderer and routing were my contributions to that earlier implementation; the change in direction made the client’s editing workflow a central part of the delivery decision.",
    },
  ],
} as const satisfies Project;

export default childcan;
