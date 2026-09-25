import type { Project } from "./types";
import previewImage from "../assets/images/rush-hour-banner.jpg";

const rushHour = {
  kind: "project",
  id: "rush-hour",
  title: "Rush Hour",
  desktopImageSrc: "rush-hour.jpg",
  metadata: {
    summary: "A Java Swing recreation of the classic Rush Hour board game, built with a partner as my Grade 12 final project. The game included six playable levels, scoring, timing, pausing, and supporting screens such as instructions and credits.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/rushhour",
        label: "Go to repo",
        icon: "github",
      },
    ],
    technologies: [
      "Java",
      "Java Swing",
    ],
    banner: {
      src: previewImage,
      alt: "Rush Hour preview",
    },
  },
  content: [
    {
      type: "heading",
      text: "Recreating a physical puzzle game in Java",
      level: 3,
    },
    {
      type: "paragraph",
      text: "RushHour was my Grade 12 final project and one of the larger Java applications I had built at the time.",
    },
    {
      type: "paragraph",
      text: "My partner and I based it on the classic Rush Hour board game, where the player moves vehicles around a crowded board to clear a path for the target car to escape.",
    },
    {
      type: "paragraph",
      text: "Turning that idea into a digital game meant thinking about how the board, vehicles, movement rules, and game state could all be represented programmatically.",
    },
    {
      type: "heading",
      text: "Building multiple playable levels",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The game contained six different levels, each with its own starting vehicle arrangement and puzzle.",
    },
    {
      type: "paragraph",
      text: "Players could interact with the vehicles and attempt to solve each board while the game kept track of their progress.",
    },
    {
      type: "paragraph",
      text: "Creating multiple levels made the project more than a single hardcoded puzzle and gave us experience organizing different game states within one application.",
    },
    {
      type: "heading",
      text: "Adding a complete game experience",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Beyond the main puzzle, we added systems for timing and scoring so players had more feedback than simply whether they completed a level.",
    },
    {
      type: "paragraph",
      text: "The application also supported pausing along with additional screens such as credits and other supporting game information.",
    },
    {
      type: "paragraph",
      text: "These features helped turn the project from a basic Swing interaction demo into a more complete desktop game.",
    },
    {
      type: "heading",
      text: "Building a larger Swing project with a partner",
      level: 3,
    },
    {
      type: "paragraph",
      text: "RushHour gave me experience organizing a larger Java Swing application and working collaboratively on a project over a longer period of time.",
    },
    {
      type: "paragraph",
      text: "It also helped me become more comfortable managing state and interactions across multiple parts of a GUI application, experience that I later carried into more complicated Swing projects.",
    },
  ],
} as const satisfies Project;

export default rushHour;
