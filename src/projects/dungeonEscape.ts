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
  content: [],
  story: {
    "overview": {
      "eyebrow": "Dungeon Escape",
      "headline": "Four keys between you and the exit.",
      "summary": "A text adventure combining exploration, trivia, Hangman, and an inventory that follows the player.",
      "facts": [
        {
          "label": "Format",
          "value": "Text adventure"
        },
        {
          "label": "Goal",
          "value": "Collect 4 keys"
        },
        {
          "label": "Language",
          "value": "Java"
        }
      ],
      "stack": [
        "Java",
        "ArrayList",
        "HashMap"
      ],
      "image": {
        "type": "figure",
        "src": previewImage,
        "alt": "Dungeon Escape project preview",
        "caption": "Dungeon Escape: project preview"
      }
    },
    "chapters": [
      {
        "id": "adventure",
        "label": "Into the dungeon",
        "eyebrow": "01 / Into the dungeon",
        "title": "A world built from choices.",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Dungeon Escape is a text-based adventure game built around a simple objective: find four keys hidden throughout a dungeon and use them to unlock the exit.",
              "Instead of moving through a graphical world, the player progresses through text prompts, choices, rooms, and different challenges."
            ]
          },
          {
            "type": "figure",
            "src": previewImage,
            "alt": "Dungeon Escape project preview",
            "caption": "Dungeon Escape project preview."
          }
        ]
      },
      {
        "id": "trials",
        "label": "Rooms and trials",
        "eyebrow": "02 / Rooms and trials",
        "title": "Each room brings a different challenge.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "Trivia",
                "text": "Answer questions as part of the dungeon’s trials."
              },
              {
                "title": "Hangman",
                "text": "Solve a word challenge within the larger adventure."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Combining different mechanics inside the same adventure made me think about how separate pieces of logic could fit into a larger game flow without everything becoming one large block of code."
            ]
          },
          {
            "type": "flow",
            "label": "Adventure progression",
            "items": [
              {
                "label": "01",
                "title": "Explore",
                "text": "Choose a route through rooms and prompts."
              },
              {
                "label": "02",
                "title": "Complete trials",
                "text": "Work through the different challenges."
              },
              {
                "label": "03",
                "title": "Collect and escape",
                "text": "Keep the keys and use them to unlock the exit."
              }
            ]
          }
        ]
      },
      {
        "id": "state",
        "label": "Remembering the journey",
        "eyebrow": "03 / Remembering the journey",
        "title": "The inventory connects the rooms.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "I used Java collections such as ArrayList and HashMap to manage information used throughout the game, including the player's inventory.",
                  "The four keys needed to persist as the player moved through different parts of the dungeon, so the game had to keep track of what the player had already collected and use that state later.",
                  "This was one of my earlier experiences using data structures for an actual application rather than only practicing them in isolation."
                ]
              }
            ],
            "visual": {
              "type": "figure",
              "src": previewImage,
              "alt": "Dungeon Escape project preview",
              "caption": "The existing game preview; an inventory capture can replace this later."
            }
          },
          {
            "type": "details",
            "title": "Organizing a larger program",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "Dungeon Escape helped me understand how a larger program could be separated into different pieces of functionality while still sharing state.",
                  "It also gave me more experience with Java collections, game state, user input, and designing a program around a sequence of player decisions."
                ]
              }
            ]
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default dungeonEscape;
