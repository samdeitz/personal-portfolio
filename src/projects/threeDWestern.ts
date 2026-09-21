import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const threeDWestern = {
  kind: "project",
  id: "3d-western",
  title: "3D Western",
  desktopImageSrc: "3dw.jpg",
  content: [
    {
      type: "heading",
      text: "Making a makerspace website maintainable",
    },
    {
      type: "paragraph",
      text: "I worked with a partner to rebuild an eight-page marketing website for 3D Western, a university makerspace with 3D printers, CNC equipment, laser cutters, and woodworking facilities. My partner led the design and most of the frontend; I focused on CMS integration, the data layer, and testing. The main problem was that adding content required changing hardcoded pages.",
    },
    {
      type: "heading",
      text: "Designing the content model",
    },
    {
      type: "paragraph",
      text: "I designed 18 Payload collections from scratch, including media, blogs, projects, events, announcements, student spotlights, sponsors, team members, and Instagram posts. The structure lets non-technical staff manage the site’s changing content and upload images. Collection-level permissions let administrators control which content each user can create or edit.",
    },
    {
      type: "heading",
      text: "Replacing duplicated fetching code",
    },
    {
      type: "paragraph",
      text: "Rather than maintain nearly identical fetching files for all 18 collections, I built a configuration-driven API that generates the common fetch methods. Adding a collection means adding its configuration and a transform function. Unusual queries use explicit overrides, keeping the common API small while allowing collection-specific behavior.",
    },
    {
      type: "heading",
      text: "Loading only the content a visitor needs",
    },
    {
      type: "paragraph",
      text: "I used React Context for incremental blog and project loading. The events calendar presented a different problem: it needed the selected month’s events without downloading the entire calendar. With SWR, each month is fetched and cached as the visitor navigates, allowing previously viewed months to be reused without fetching the same data again.",
    },
    {
      type: "heading",
      text: "Automation and cleanup",
    },
    {
      type: "paragraph",
      text: "I built a daily cron job that retrieves Instagram account information and the ten most recent posts through the Meta API, transforms the response, and writes it into a read-only Payload collection. I also removed unused files, split oversized components, reduced duplicated code, and reorganized TypeScript types. The site uses React, Next.js, TypeScript, Tailwind CSS, and Radix UI.",
    },
  ],
} as const satisfies Project;

export default threeDWestern;
