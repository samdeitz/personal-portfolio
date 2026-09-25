import type { Project } from "./types";
import makerspacesBanner from "../assets/images/3dw_poster.jpg";

const threeDWestern = {
  kind: "project",
  id: "3d-western",
  title: "3D Western",
  desktopImageSrc: "3dw.jpg",
  metadata: {
    summary:
      "A complete rebuild of 3D Western's marketing website with a strong focus on content management and backend data architecture. I designed the Payload CMS structure, reusable data layer, caching strategy, permissions system, and automated Instagram integration.",
    status: "Finalizing",
    links: [],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Payload CMS",
      "SWR",
      "Meta API",
      "cron",
    ],
    banner: {
      src: makerspacesBanner,
      alt: "3dw poster",
    },
  },
  content: [
    {
      type: "heading",
      text: "Rebuilding around editable content",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I worked with one other frontend developer to rebuild 3D Western's existing site from scratch. Together we implemented eight marketing pages. My partner focused more heavily on visual frontend work while I focused on CMS integration, data architecture, and testing.",
    },
    {
      type: "paragraph",
      text: "The main problem with the old site was that much of its content was hardcoded. Even routine updates could require a developer, so I focused on making the site manageable by the non-technical marketing team.",
    },
    {
      type: "heading",
      text: "Designing the CMS from scratch",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I designed an 18-collection Payload CMS architecture so almost all non-static website content can be changed without editing code.",
    },
    {
      type: "paragraph",
      text: "Key collections include Users, Media, Blogs, Projects, Events, Announcements, Student Spotlights, Sponsors, Team Members, and Instagram Posts.",
    },
    {
      type: "paragraph",
      text: "I also implemented collection-level permissions so administrators can decide which areas of the CMS each user is allowed to edit.",
    },
    {
      type: "heading",
      text: "Building a reusable data layer",
      level: 3,
    },
    {
      type: "paragraph",
      text: "With 18 collections, creating a separate fetch file for each one would have produced a large amount of repeated code. I built a config-driven data layer instead.",
    },
    {
      type: "paragraph",
      text: "Standard collections can be added through a configuration entry and transform function, while unusual collections can override the generic behavior when needed. Every CMS-backed component uses this layer, making new content types easier to add without duplicating fetching logic.",
    },
    {
      type: "heading",
      text: "Loading and syncing content efficiently",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Blogs and projects use shared state so already-loaded content can be reused as users request more.",
    },
    {
      type: "paragraph",
      text: "Events required a different strategy because they appear in a custom calendar. I used SWR to fetch the current month, cache it, and load additional months only when the user navigates to them.",
    },
    {
      type: "paragraph",
      text: "I also built a daily cron process using Meta's API to retrieve 3D Western's account information and 10 latest Instagram posts, transform them into the Payload collection structure, and sync them automatically.",
    },
  ],
} as const satisfies Project;

export default threeDWestern;
