import type { Project } from "./types";
import previewImage from "../assets/images/escape-banner.jpg";

const dungeonEscape = {
  kind: "project",
  id: "dungeon-escape",
  title: "Dungeon Escape",
  desktopImageSrc: "escape.jpg",
  metadata: {
    summary: "A text-based Java adventure game where the player explores a dungeon, completes different trials, collects four keys, and unlocks the final door to escape. The project combined small games such as trivia and Hangman with exploration and inventory management.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/riddlegame",
        label: "Go to repo",
        icon: "github",
      },
    ],
    technologies: [
      "Java",
    ],
    banner: {
      src: previewImage,
      alt: "Dungeon Escape preview",
    },
  },
  content: [
    {
      type: "heading",
      text: "Building a text-based dungeon adventure",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Dungeon Escape is a text-based adventure game built around a simple objective: find four keys hidden throughout a dungeon and use them to unlock the exit.",
    },
    {
      type: "paragraph",
      text: "Instead of moving through a graphical world, the player progresses through text prompts, choices, rooms, and different challenges.",
    },
    {
      type: "paragraph",
      text: "The project was an early opportunity for me to think beyond individual programming exercises and build multiple systems that worked together as one game.",
    },
    {
      type: "heading",
      text: "Turning rooms into different challenges",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Progress through the dungeon required completing different trials instead of simply finding the keys immediately.",
    },
    {
      type: "paragraph",
      text: "Some of those challenges included trivia questions and a Hangman-style game.",
    },
    {
      type: "paragraph",
      text: "Combining different mechanics inside the same adventure made me think about how separate pieces of logic could fit into a larger game flow without everything becoming one large block of code.",
    },
    {
      type: "heading",
      text: "Managing the player's inventory",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I used Java collections such as ArrayList and HashMap to manage information used throughout the game, including the player's inventory.",
    },
    {
      type: "paragraph",
      text: "The four keys needed to persist as the player moved through different parts of the dungeon, so the game had to keep track of what the player had already collected and use that state later.",
    },
    {
      type: "paragraph",
      text: "This was one of my earlier experiences using data structures for an actual application rather than only practicing them in isolation.",
    },
    {
      type: "heading",
      text: "Learning to organize a larger program",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Dungeon Escape helped me understand how a larger program could be separated into different pieces of functionality while still sharing state.",
    },
    {
      type: "paragraph",
      text: "It also gave me more experience with Java collections, game state, user input, and designing a program around a sequence of player decisions.",
    },
  ],
} as const satisfies Project;

export default dungeonEscape;
