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
  content: [],
  story: {
    "overview": {
      "eyebrow": "3D Western",
      "headline": "Put the marketing team in control.",
      "summary": "An editable website backed by a reusable CMS data layer, collection permissions, and automated content updates.",
      "facts": [
        {
          "label": "My focus",
          "value": "CMS + data architecture"
        },
        {
          "label": "Scope",
          "value": "8 marketing pages"
        },
        {
          "label": "Content",
          "value": "18 collections"
        }
      ],
      "stack": [
        "Next.js",
        "Payload CMS",
        "SWR"
      ],
      "image": {
        "type": "figure",
        "src": makerspacesBanner,
        "alt": "3D Western project preview",
        "caption": "3D Western — project preview"
      }
    },
    "chapters": [
      {
        "id": "ownership",
        "label": "Content ownership",
        "eyebrow": "01 / Content ownership",
        "title": "Updates should not wait for a developer.",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "I worked with one other frontend developer to rebuild 3D Western's existing site from scratch. Together we implemented eight marketing pages. My partner focused more heavily on visual frontend work while I focused on CMS integration, data architecture, and testing.",
              "The main problem with the old site was that much of its content was hardcoded. Even routine updates could require a developer, so I focused on making the site manageable by the non-technical marketing team."
            ]
          },
          {
            "type": "comparison",
            "items": [
              {
                "title": "Before",
                "text": "Much of the site’s content was hardcoded, so routine updates could require a developer."
              },
              {
                "title": "The goal",
                "text": "Let the non-technical marketing team manage almost all non-static content through Payload."
              }
            ]
          },
          {
            "type": "figure",
            "src": makerspacesBanner,
            "alt": "3D Western project preview",
            "caption": "3D Western project artwork; CMS captures can be added here."
          }
        ]
      },
      {
        "id": "architecture",
        "label": "The reusable foundation",
        "eyebrow": "02 / The reusable foundation",
        "title": "Eighteen collections. One shared approach.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "I designed an 18-collection Payload CMS architecture so almost all non-static website content can be changed without editing code.",
                  "Key collections include Users, Media, Blogs, Projects, Events, Announcements, Student Spotlights, Sponsors, Team Members, and Instagram Posts.",
                  "I also implemented collection-level permissions so administrators can decide which areas of the CMS each user is allowed to edit."
                ]
              },
              {
                "type": "callout",
                "label": "Permissions matter",
                "text": "Administrators decide which collections each user can edit."
              }
            ],
            "visual": {
              "type": "figure",
              "src": makerspacesBanner,
              "alt": "3D Western project preview",
              "caption": "Project artwork used as a visual placeholder for the content system."
            }
          },
          {
            "type": "details",
            "title": "How the data layer avoids repeated code",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "With 18 collections, creating a separate fetch file for each one would have produced a large amount of repeated code. I built a config-driven data layer instead.",
                  "Standard collections can be added through a configuration entry and transform function, while unusual collections can override the generic behavior when needed. Every CMS-backed component uses this layer, making new content types easier to add without duplicating fetching logic."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "automation",
        "label": "Keeping content fresh",
        "eyebrow": "03 / Keeping content fresh",
        "title": "Load what is needed. Sync what changes.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "Browsing events",
                "text": "SWR caches the current calendar month and loads another month when the user navigates to it."
              },
              {
                "title": "Browsing posts",
                "text": "Shared state keeps already-loaded blogs and projects available for reuse."
              }
            ]
          },
          {
            "type": "flow",
            "label": "Instagram synchronization",
            "items": [
              {
                "label": "01",
                "title": "Daily job",
                "text": "Run the scheduled collection process."
              },
              {
                "label": "02",
                "title": "Meta API",
                "text": "Retrieve account information and the 10 latest Instagram posts."
              },
              {
                "label": "03",
                "title": "Payload CMS",
                "text": "Transform the response and synchronize the collections."
              }
            ]
          },
          {
            "type": "callout",
            "label": "My scope",
            "text": "I focused on CMS integration, data architecture, and testing while my partner concentrated more heavily on the visual frontend."
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default threeDWestern;
