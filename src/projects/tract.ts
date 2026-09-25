import type { Project } from "./types";
import tractBanner from "../assets/images/tract-banner.jpg";

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
  content: [
    {
      type: "heading",
      text: "Rebuilding the website beyond Wix",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I helped migrate trACT Software's entire nine-page marketing website away from Wix and into a custom React and Next.js application. The goal was not just to reproduce the old site, but to improve its layout, mobile responsiveness, navigation, SEO structure, graphics, and animations.",
    },
    {
      type: "paragraph",
      text: "Before rebuilding it, I reviewed the existing website for layout issues, missing metadata, heading structure, page speed, navigation problems, and poor mobile responsiveness. Those findings helped guide the redesign.",
    },
    {
      type: "heading",
      text: "Making content editable without code changes",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I designed a Payload CMS architecture with 13 collections covering content such as blog posts, FAQs, pricing, SEO metadata, images, and more.",
    },
    {
      type: "paragraph",
      text: "This moved site content out of hardcoded frontend files and into a CMS that non-technical users can manage. Images are designed to live in Amazon S3 while CMS data is stored through the client's existing Amazon RDS infrastructure.",
    },
    {
      type: "heading",
      text: "Keeping data access consistent",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Some client-side features still need to request Payload data even though Payload's Local API can only run on the server. A good example is the blog's \"More Posts\" functionality.",
    },
    {
      type: "paragraph",
      text: "I used Next.js Server Actions so client components can request new data while the server continues to use Payload's Local API. This keeps the application from mixing REST requests with Local API queries and gives the project one consistent data-access pattern.",
    },
    {
      type: "paragraph",
      text: "I also used React Context for shared client state, including responsive state and loaded blog posts.",
    },
    {
      type: "heading",
      text: "Replacing Wix analytics",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The client wanted to keep the analytics functionality they were getting from Wix. I researched alternatives and combined Microsoft Clarity, Google Analytics, and Google Search Console into one custom analytics dashboard.",
    },
    {
      type: "paragraph",
      text: "Because those services have rate limits, the system is designed around a daily cron process that collects analytics data and stores it in Amazon S3 for the dashboard to use.",
    },
    {
      type: "paragraph",
      text: "I also built a two-page account-management dashboard where users can update their profile and, when permitted, invite new analytics or CMS users by email.",
    },
  ],
} as const satisfies Project;

export default tract;
