import type { Project } from "./types";
import previewImage from "../assets/images/pong-banner.jpg";

const pong = {
  kind: "project",
  id: "pong",
  title: "Pong",
  desktopImageSrc: "pong.jpg",
  metadata: {
    summary: "A recreation of Pong built in Java using the open-source HSA2 library. I created it as a Grade 11 programming project while learning the fundamentals of game loops, movement, collision logic, and keyboard input.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/pong",
        label: "Go to repo",
        icon: "github",
      },
    ],
    technologies: [
      "Java",
      "Java HSA2 Library",
    ],
    banner: {
      src: previewImage,
      alt: "Pong preview",
    },
  },
  content: [
    {
      type: "heading",
      text: "Recreating a classic game",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Pong was one of my early Java projects and was built during Grade 11.",
    },
    {
      type: "paragraph",
      text: "I recreated the basic Pong gameplay using the open-source Java HSA2 library, with paddles controlled by the player and a ball moving between them.",
    },
    {
      type: "paragraph",
      text: "The small scope made it a useful project for learning how interactive programs work without needing a large amount of application infrastructure.",
    },
    {
      type: "heading",
      text: "Controlling movement through code",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Unlike earlier programs that primarily waited for input and produced an answer, Pong needed to continuously update what was happening on screen.",
    },
    {
      type: "paragraph",
      text: "The paddles had to respond to player input while the ball moved independently.",
    },
    {
      type: "paragraph",
      text: "That introduced me to the idea of repeatedly updating object positions to create real-time movement.",
    },
    {
      type: "heading",
      text: "Implementing game rules",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The game also needed logic for interactions between the ball, paddles, and edges of the playing area.",
    },
    {
      type: "paragraph",
      text: "Building those mechanics gave me early experience with collision detection and changing movement based on what the ball hit.",
    },
    {
      type: "paragraph",
      text: "Even with a simple game like Pong, I started seeing how several small rules could combine to create a complete interactive system.",
    },
    {
      type: "heading",
      text: "An introduction to game programming",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Pong was one of the projects that helped move my Java experience beyond simple console programs.",
    },
    {
      type: "paragraph",
      text: "It introduced concepts such as animation, keyboard input, collision logic, and continuous game state, which I later expanded on in more complicated games and Java Swing projects.",
    },
  ],
} as const satisfies Project;

export default pong;
