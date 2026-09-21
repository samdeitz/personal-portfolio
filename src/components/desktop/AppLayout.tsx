import type { App, AppTitle } from "../../appInfo";

type Technology = {
  technology: string;
};

const vite: Technology = {
  technology: "Vite",
};
const tailwind: Technology = {
  technology: "TailwindCSS",
};
const svelte: Technology = {
  technology: "Svelte",
};
const react: Technology = {
  technology: "React.js",
};
const next: Technology = {
  technology: "Next.js",
};
const vercel: Technology = {
  technology: "Vercel",
};
const java: Technology = {
  technology: "Java",
};
const javaSwing: Technology = {
  technology: "Java Swing Library",
};
const javaHSA2: Technology = {
  technology: "Java HSA2 Library",
};

type HeaderImage = {
  type: "HeaderImage";
  className?: string;
};

type Paragraph = {
  type: "Paragraph";
  text: string;
};

type HorizontalBox = {
  type: "Horizontal Box";
  content: ContentBlock[];
};

type TechStack = {
  type: "Tech Stack";
  content: Technology[];
};

type RepoLink = {
  type: "RepoLink";
};

type Route = {
  type: "Route";
};

type Terminal = {
  type: "Terminal";
};

type ContentBlock =
  | HeaderImage
  | Paragraph
  | HorizontalBox
  | TechStack
  | RepoLink
  | Route
  | Terminal;

const workoutFinderApp: ContentBlock[] = [
  {
    type: "HeaderImage",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "Horizontal Box",
    content: [
      {
        type: "RepoLink",
      },
      {
        type: "Route",
      },
    ],
  },
  {
    type: "Tech Stack",
    content: [react, vite, tailwind],
  },
];
const rushHourApp: ContentBlock[] = [
  {
    type: "HeaderImage",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "RepoLink",
  },
  {
    type: "Tech Stack",
    content: [java, javaSwing],
  },
];
const dungeonEscapeApp: ContentBlock[] = [
  {
    type: "HeaderImage",
    className: "object-left",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "RepoLink",
  },
  {
    type: "Tech Stack",
    content: [java],
  },
];
const loadingIconApp: ContentBlock[] = [
  {
    type: "HeaderImage",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "RepoLink",
  },
  {
    type: "Tech Stack",
    content: [java, javaSwing],
  },
];
const snakeApp: ContentBlock[] = [
  {
    type: "HeaderImage",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "RepoLink",
  },
  {
    type: "Tech Stack",
    content: [java, javaSwing],
  },
];
const pongApp: ContentBlock[] = [
  {
    type: "HeaderImage",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "RepoLink",
  },
  {
    type: "Tech Stack",
    content: [java, javaHSA2],
  },
];
const punchInApp: ContentBlock[] = [
  {
    type: "HeaderImage",
    className: "",
  },
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
  {
    type: "Horizontal Box",
    content: [
      {
        type: "RepoLink",
      },
      {
        type: "Route",
      },
    ],
  },
  {
    type: "Tech Stack",
    content: [svelte, vite, tailwind],
  },
];
const aboutMeApp: ContentBlock[] = [
  {
    type: "HeaderImage",
    className: "object-[50%_20%]",
  },
  // {
  //     type: "Paragraph",
  //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  // }
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
];
const previousWorkApp: ContentBlock[] = [
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
];
const websiteImagesApp: ContentBlock[] = [
  {
    type: "Paragraph",
    text: "Details Coming soon...",
  },
];

const terminalApp: ContentBlock[] = [
  {
    type: "Terminal",
  },
];

export const appLayouts: Record<App, ContentBlock[]> = {
  "workout-finder": workoutFinderApp,
  "rush-hour": rushHourApp,
  "dungeon-escape": dungeonEscapeApp,
  "loading-icon": loadingIconApp,
  snake: snakeApp,
  pong: pongApp,
  "punch-in-page": punchInApp,
  "about-me": aboutMeApp,
  "previous-work": previousWorkApp,
  terminal: terminalApp,
};
