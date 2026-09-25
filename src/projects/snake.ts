import type { Project } from "./types";
import previewImage from "../assets/images/snake-banner.jpg";

const snake = {
  kind: "project",
  id: "snake",
  title: "Snake",
  desktopImageSrc: "snake.jpg",
  metadata: {
    summary: "A Java Swing recreation of Snake built as a Grade 11 programming project. The game helped me learn basic GUI game development, continuous movement, player input, collision rules, and changing game state over time.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/snakegame",
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
      alt: "Snake preview",
    },
  },
  content: [
    {
      type: "heading",
      text: "Building Snake with Java Swing",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Snake was one of my early Java game projects and one of my first experiences building an interactive game with Swing.",
    },
    {
      type: "paragraph",
      text: "The goal was to recreate the familiar Snake gameplay where the player controls a continuously moving snake and changes its direction to navigate the board.",
    },
    {
      type: "paragraph",
      text: "It was a simple project, but it required several concepts that were new to me at the time.",
    },
    {
      type: "heading",
      text: "Managing continuous movement",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The snake cannot simply move once whenever the player presses a key. It needs to continue moving automatically while keyboard input changes its direction.",
    },
    {
      type: "paragraph",
      text: "Implementing that behavior helped me understand how games update their state repeatedly over time rather than only reacting directly to individual input events.",
    },
    {
      type: "heading",
      text: "Tracking the snake and collisions",
      level: 3,
    },
    {
      type: "paragraph",
      text: "As the game runs, the program needs to keep track of the snake's changing position and determine when important interactions occur.",
    },
    {
      type: "paragraph",
      text: "That includes handling the rules that determine when the snake can continue moving and when a collision ends the game.",
    },
    {
      type: "paragraph",
      text: "Implementing those mechanics gave me more experience representing game state and updating several connected pieces of data together.",
    },
    {
      type: "heading",
      text: "Building early experience with Swing",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Snake helped me become more comfortable using Java Swing for interactive programs instead of only traditional desktop interfaces.",
    },
    {
      type: "paragraph",
      text: "It introduced patterns around keyboard controls, drawing, movement, and game state that I would later use in increasingly larger Java projects such as RushHour and Party Islands.",
    },
  ],
} as const satisfies Project;

export default snake;
