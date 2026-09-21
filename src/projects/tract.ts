import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const tract = {
  kind: "project",
  id: "tract",
  title: "trACT Software",
  desktopImageSrc: "logo-dark.png",
  content: [
    {
      type: "heading",
      text: "Rebuilding a marketing site around the client"
    },
    {
      type: "paragraph",
      text: "As a full-stack developer intern at trACT, I helped rebuild a nine-page Wix marketing website with React, Next.js, JavaScript, and Tailwind CSS. The work grew beyond a visual refresh: the client also needed editable content, account management, and a replacement for Wix’s built-in analytics."
    },
    {
      type: "heading",
      text: "Starting with the existing problems"
    },
    {
      type: "paragraph",
      text: "I reviewed the original site for layout, mobile responsiveness, navigation, heading structure, missing metadata, and page-speed issues. We used that review and client feedback to guide the rebuild, incorporating updated Figma designs, graphics, and animations. Biweekly conversations with the client helped connect the implementation to what she needed to manage day to day."
    },
    {
      type: "heading",
      text: "Content and account management"
    },
    {
      type: "paragraph",
      text: "I built a 13-collection Payload CMS structure covering blogs, FAQs, pricing, SEO metadata, images, and authors so content could change without editing code. I also built a two-page account dashboard where users can update their name, email, and password. Users with the appropriate permission can invite others by email to become analytics or CMS members."
    },
    {
      type: "heading",
      text: "One approach to fetching CMS data"
    },
    {
      type: "paragraph",
      text: "Some client components needed additional Payload data, including a “load more” interaction for blogs. I used Next.js Server Actions to access Payload’s Local API on the server, keeping CMS queries consistent rather than maintaining separate REST and Local API implementations. A blog Context stores the loaded posts and appends new results for consuming components; a separate Context shares mobile-layout state."
    },
    {
      type: "heading",
      text: "Replacing analytics and planning deployment"
    },
    {
      type: "paragraph",
      text: "I researched Microsoft Clarity, Google Analytics, and Google Search Console as replacements for Wix analytics. We built a two-page dashboard with Chart.js to bring more than 20 metrics into one interface. To accommodate external rate limits, the analytics design uses a daily cron job to collect data and store it in Amazon S3."
    },
    {
      type: "paragraph",
      text: "At the time of this project account, deployment was not complete. The plan was to reuse the client’s existing EC2, RDS, and S3 infrastructure for hosting, Payload data, and images, with the goal of eliminating the Wix subscription. The final domain and EC2 routing configuration was still to be decided; cost savings had not yet been measured."
    }
  ]
} as const satisfies Project;

export default tract;
