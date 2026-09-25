import type { Project } from "./types";
import childcanBanner from "../assets/images/childcan-banner.jpg";

const childcan = {
  kind: "project",
  id: "childcan",
  title: "Childcan",
  desktopImageSrc: "childcan.jpg",
  metadata: {
    summary:
      "A large nonprofit website redesign focused on accessibility, navigation, and reusable frontend architecture. I co-led frontend development, supported junior developers, and built the content-rendering and dynamic-routing systems used across the site.",
    status: "Deployed",
    links: [
      {
        href: "https://childcan.com",
        label: "Visit Site",
        icon: "open",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Sanity",
      "Webflow",
    ],
    banner: {
      src: childcanBanner,
      alt: "childcan",
    },
  },
  content: [
    {
      type: "heading",
      text: "Improving a large nonprofit website",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I was one of two senior frontend developers on a seven-person team rebuilding Childcan's website alongside five junior developers.",
    },
    {
      type: "paragraph",
      text: "The existing site had more than 20 pages and one of its biggest problems was navigability. Visitors had difficulty finding the information they needed, so the redesign focused heavily on accessibility, discoverability, and making important actions such as donating easier to find.",
    },
    {
      type: "paragraph",
      text: "Part of my role was taking on more complicated React work and acting as a technical resource for junior developers.",
    },
    {
      type: "heading",
      text: "Standardizing content across the site",
      level: 3,
    },
    {
      type: "paragraph",
      text: "More than 10 pages shared a similar content structure, so manually rebuilding each page would have created a lot of repeated markup.",
    },
    {
      type: "paragraph",
      text: "I created a typed content-rendering system that could receive structured content such as titles and paragraphs and render the correct components and styles. This gave us a consistent way to build large content-heavy pages.",
    },
    {
      type: "heading",
      text: "Creating scalable routes and navigation",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Family stories and events needed individual pages, so I designed a slug-based dynamic-routing system for them. The goal was to let future CMS content generate pages without manually creating a route for every story or event.",
    },
    {
      type: "paragraph",
      text: "I also built the responsive header and frontend interface for a fuzzy-search feature. Another senior developer handled the fuzzy-search logic while I focused on the user-facing experience.",
    },
    {
      type: "heading",
      text: "Adapting to a client-driven platform change",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The original rebuild used React, Next.js, TypeScript, and Tailwind CSS, and we had started integrating Sanity.",
    },
    {
      type: "paragraph",
      text: "Before that version was completed, the client decided they wanted more direct drag-and-drop control over page layouts, so the project transitioned to Webflow.",
    },
    {
      type: "paragraph",
      text: "The final site launched through Webflow, while the earlier React work shaped the redesign and gave me experience adapting technical plans when client needs changed.",
    },
  ],
} as const satisfies Project;

export default childcan;
