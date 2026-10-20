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
  content: [],
  story: {
    "overview": {
      "eyebrow": "Childcan",
      "headline": "Make important information easier to find.",
      "summary": "A nonprofit website redesign spanning navigation, reusable content, team support, and a client-driven move to Webflow.",
      "facts": [
        {
          "label": "My role",
          "value": "Senior frontend developer"
        },
        {
          "label": "Team",
          "value": "7 developers"
        },
        {
          "label": "Scope",
          "value": "20+ existing pages"
        }
      ],
      "stack": [
        "React",
        "Next.js",
        "Webflow"
      ],
      "image": {
        "type": "figure",
        "src": childcanBanner,
        "alt": "Childcan project preview",
        "caption": "Childcan — project preview"
      }
    },
    "chapters": [
      {
        "id": "navigation",
        "label": "Finding a way through",
        "eyebrow": "01 / Finding a way through",
        "title": "Start with the people looking for help.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "The existing site had more than 20 pages and one of its biggest problems was navigability. Visitors had difficulty finding the information they needed, so the redesign focused heavily on accessibility, discoverability, and making important actions such as donating easier to find."
                ]
              },
              {
                "type": "prose",
                "paragraphs": [
                  "I was one of two senior frontend developers on a seven-person team rebuilding Childcan's website alongside five junior developers."
                ]
              },
              {
                "type": "callout",
                "label": "Working together",
                "text": "Part of my role was taking on more complicated React work and acting as a technical resource for junior developers."
              }
            ],
            "visual": {
              "type": "figure",
              "src": childcanBanner,
              "alt": "Childcan project preview",
              "caption": "Childcan project preview."
            }
          }
        ]
      },
      {
        "id": "systems",
        "label": "A shared foundation",
        "eyebrow": "02 / A shared foundation",
        "title": "Build the pattern, then build the pages.",
        "blocks": [
          {
            "type": "flow",
            "label": "Structured content to pages",
            "items": [
              {
                "label": "01",
                "title": "Content",
                "text": "Typed titles, paragraphs, and other page content."
              },
              {
                "label": "02",
                "title": "Renderer",
                "text": "Shared components apply consistent structure and styling."
              },
              {
                "label": "03",
                "title": "Pages",
                "text": "Reuse the pattern across more than 10 similarly structured pages."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "More than 10 pages shared a similar content structure, so manually rebuilding each page would have created a lot of repeated markup.",
              "I created a typed content-rendering system that could receive structured content such as titles and paragraphs and render the correct components and styles. This gave us a consistent way to build large content-heavy pages."
            ]
          },
          {
            "type": "details",
            "title": "Routes and search",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "Family stories and events needed individual pages, so I designed a slug-based dynamic-routing system for them. The goal was to let future CMS content generate pages without manually creating a route for every story or event.",
                  "I also built the responsive header and frontend interface for a fuzzy-search feature. Another senior developer handled the fuzzy-search logic while I focused on the user-facing experience."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "change",
        "label": "Changing direction",
        "eyebrow": "03 / Changing direction",
        "title": "The right platform changed with the brief.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "The original build",
                "text": "React, Next.js, TypeScript, and Tailwind CSS, with Sanity integration underway."
              },
              {
                "title": "The final delivery",
                "text": "The client wanted drag-and-drop layout control, so the launched site used Webflow."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The final site launched through Webflow, while the earlier React work shaped the redesign and gave me experience adapting technical plans when client needs changed."
            ]
          },
          {
            "type": "callout",
            "label": "What the live link shows",
            "text": "The published Webflow site. My earlier React work shaped the redesign; it is not the stack serving the final site."
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default childcan;
