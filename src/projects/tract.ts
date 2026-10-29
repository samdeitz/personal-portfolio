import type { Project } from "./types";
import tractBanner from "../assets/images/tract-banner.jpg";
import beforeAfter from "../assets/storyImages/tract/tract-before-after.jpg";
import blogPage from "../assets/storyImages/tract/blog.png";
import analyticsDashboard from "../assets/storyImages/tract/analyticsDashboard.png";
import analyticsDashboard2 from "../assets/storyImages/tract/analyticsDashboard2.png";
import analyticsDashboard3 from "../assets/storyImages/tract/analyticsDashboard3.png";
import accountsDashboard from "../assets/storyImages/tract/accountsDashboard.png";

const tract = {
  kind: "project",
  id: "tract",
  title: "trACT Software",
  desktopImageSrc: "tract.jpg",
  metadata: {
    summary:
      "A full-stack rebuild of trACT Software's marketing website, CMS, analytics experience, and account-management tools. I worked across frontend development, Payload CMS architecture, analytics integrations, and AWS infrastructure while helping move the client away from Wix.",
    status: "Finalizing",
    links: [],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Payload CMS",
      "AWS EC2",
      "Amazon RDS",
      "Amazon S3",
      "Microsoft Clarity",
      "Google Analytics",
      "Google Search Console",
      "Chart.js",
    ],
    banner: {
      src: tractBanner,
      alt: "trACT",
    },
  },
  content: [],
  story: {
    overview: {
      eyebrow: "trACT Software / Web platform",
      headline: "From a website builder to a custom platform.",
      summary:
        "Rebuilding the marketing website, editable content, and analytics tools behind trACT’s web platform.",
      image: {
        type: "figure",
        src: tractBanner,
        alt: "trACT project banner, used as placeholder imagery",
        caption: "Project preview",
        placeholder: true,
      },
      facts: [
        {
          label: "My role",
          value: "Full Stack Developer Intern",
        },
        {
          label: "Scope",
          value: "9 marketing pages",
        },
        {
          label: "Content",
          value: "13 CMS collections",
        },
      ],
      stack: ["Next.js", "Payload CMS", "AWS"],
    },
    chapters: [
      {
        id: "beyond-wix",
        label: "Beyond Wix",
        eyebrow: "01 / The challenge",
        title: "More control. A better everyday experience.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  "I helped move trACT’s nine-page marketing website from Wix into a custom React and Next.js application. Recreating the pages was one part of the job; improving how they worked was the other.",
                  "I started by reviewing navigation, mobile layouts, page speed, metadata, and heading structure. Those findings shaped the rebuild, from the page layouts to the graphics and animations.",
                ],
              },
              {
                type: "callout",
                label: "The focus",
                text: "Make the site easier to navigate, while giving the team more control over what comes next.",
              },
            ],
            visual: {
              type: "figure",
              src: beforeAfter,
              alt: "trACT before after comparison",
              caption: "Comparison of landing page above the fold content.",
            },
          },
          {
            type: "comparison",
            items: [
              {
                label: "Starting point",
                title: "A website built in Wix",
                text: "Review the existing experience and identify where navigation, responsiveness, and SEO needed attention.",
              },
              {
                label: "The direction",
                title: "A custom foundation",
                text: "Rebuild the marketing pages in Next.js and connect them to a content system the team can manage.",
              },
            ],
          },
        ],
      },
      {
        id: "content",
        label: "Content ownership",
        eyebrow: "02 / Content ownership",
        title: "Give the team the keys.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  "I designed 13 Payload CMS collections for content including blog posts, FAQs, pricing, SEO metadata, and images. The goal was to move that content out of hardcoded files and into the team’s hands.",
                  "The storage architecture uses the client’s existing Amazon RDS infrastructure for CMS data, with images designed to live in Amazon S3.",
                ],
              },
              {
                type: "callout",
                label: "A deliberate choice",
                text: "Let editors work with content, while the frontend handles how that content is presented.",
              },
            ],
            visual: {
              type: "figure",
              src: blogPage,
              alt: "Blog page for tractsoftware.ca",
              caption: "Reworked trACT blogs page.",
            },
          },
          {
            type: "flow",
            label: "Content publishing flow",
            items: [
              {
                label: "01",
                title: "Content team",
                text: "Creates and edits content",
              },
              {
                label: "02",
                title: "Payload CMS",
                text: "Structures content and media",
              },
              {
                label: "03",
                title: "Marketing site",
                text: "Presents the content in Next.js",
              },
            ],
          },
          {
            type: "details",
            title: "Under the hood: one data-access pattern",
            blocks: [
              {
                type: "prose",
                paragraphs: [
                  "The blog’s “More Posts” interaction needs data from the client, but Payload’s Local API runs on the server. I used Next.js Server Actions to bridge the two, keeping data access consistent instead of mixing Local API queries and REST requests.",
                  "React Context holds shared client state, including loaded blog posts and responsive state.",
                ],
              },
            ],
          },
        ],
        intro: "Routine content changes shouldn’t need a frontend code change.",
      },
      {
        id: "analytics",
        label: "Connected analytics",
        eyebrow: "03 / Connected analytics",
        title: "One view of the bigger picture.",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "I researched alternatives and combined Microsoft Clarity, Google Analytics, and Google Search Console into a custom dashboard. Their rate limits shaped the design: collect data on a daily schedule, store it in S3, and let the dashboard use that stored data.",
            ],
          },
          {
            type: "flow",
            label: "Analytics data flow",
            items: [
              {
                label: "Sources",
                title: "Three perspectives",
                text: "Clarity · Analytics · Search Console",
              },
              {
                label: "Collection",
                title: "A daily process",
                text: "Scheduled analytics requests",
              },
              {
                label: "Storage",
                title: "Amazon S3",
                text: "Collected data for the dashboard",
              },
              {
                label: "Experience",
                title: "One dashboard",
                text: "A shared place to explore the data",
              },
            ],
          },
          {
            type: "split",
            splitImagesVert: true,
            visual: [
              {
                type: "figure",
                src: analyticsDashboard,
                alt: "Analytics Dashboard page 1",
                caption: "Preview of page one of the trACT analytics dashboard",
                placeholder: true,
              },
              {
                type: "figure",
                src: analyticsDashboard2,
                alt: "Analytics Dashboard page 2",
                caption: "Preview of page two of the trACT analytics dashboard",
                placeholder: true,
              },
              {
                type: "figure",
                src: analyticsDashboard3,
                alt: "Analytics Dashboard page 3",
                caption:
                  "Preview of page three of the trACT analytics dashboard",
                placeholder: true,
              },
              {
                type: "figure",
                src: accountsDashboard,
                alt: "Analytics Dashboard",
                caption:
                  "Preview of the accounts dashboard for internal trACT employees",
                placeholder: true,
              },
            ],
          },
          {
            type: "prose",
            title: "The people behind the platform",
            paragraphs: [
              "I also built a two-page account-management dashboard where users can update their profile and, with the right permissions, invite analytics or CMS users by email.",
            ],
          },
        ],
        intro:
          "Leaving Wix also meant replacing the analytics experience the client relied on.",
      },
      {
        id: "decisions",
        label: "The decisions behind it",
        eyebrow: "04 / Bringing it together",
        title: "The decisions behind the build.",
        blocks: [
          {
            type: "takeaways",
            items: [
              {
                title: "Content the team can own",
                text: "Structured collections put routine updates in the CMS.",
              },
              {
                title: "Consistent access to data",
                text: "Server Actions keep client interactions connected to Payload’s Local API.",
              },
              {
                title: "Integrations shaped by constraints",
                text: "A daily analytics pipeline accounts for the services’ rate limits.",
              },
            ],
          },
        ],
        intro:
          "The work connected the public website with the systems supporting it.",
      },
    ],
  },
} as const satisfies Project;

export default tract;
