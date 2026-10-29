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
  content: [],
  story: {
    "overview": {
      "eyebrow": "Snake",
      "headline": "Keep moving. Choose the next turn.",
      "summary": "An early Java Swing game that taught me how input, movement, and collision rules work together.",
      "facts": [
        {
          "label": "Context",
          "value": "Grade 11 project"
        },
        {
          "label": "Interface",
          "value": "Java Swing"
        },
        {
          "label": "Focus",
          "value": "Continuous game state"
        }
      ],
      "stack": [
        "Java",
        "Java Swing"
      ],
      "image": {
        "type": "figure",
        "src": previewImage,
        "alt": "Snake project preview",
        "caption": "Snake: project preview"
      }
    },
    "chapters": [
      {
        "id": "game",
        "label": "The familiar game",
        "eyebrow": "01 / The familiar game",
        "title": "A small game with new ideas to learn.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "Snake was one of my early Java game projects and one of my first experiences building an interactive game with Swing.",
                  "The goal was to recreate the familiar Snake gameplay where the player controls a continuously moving snake and changes its direction to navigate the board.",
                  "It was a simple project, but it required several concepts that were new to me at the time."
                ]
              }
            ],
            "visual": {
              "type": "figure",
              "src": previewImage,
              "alt": "Snake project preview",
              "caption": "Snake game preview."
            }
          }
        ]
      },
      {
        "id": "movement",
        "label": "Movement and input",
        "eyebrow": "02 / Movement and input",
        "title": "The game cannot wait for a keypress.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "Automatic movement",
                "text": "The snake continues moving over time."
              },
              {
                "title": "Player input",
                "text": "Keyboard events change the direction of that movement."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The snake cannot simply move once whenever the player presses a key. It needs to continue moving automatically while keyboard input changes its direction.",
              "Implementing that behavior helped me understand how games update their state repeatedly over time rather than only reacting directly to individual input events."
            ]
          },
          {
            "type": "flow",
            "label": "Game-state cycle",
            "items": [
              {
                "label": "01",
                "title": "Track",
                "text": "Keep the snake’s current position."
              },
              {
                "label": "02",
                "title": "Update",
                "text": "Move it in the current direction."
              },
              {
                "label": "03",
                "title": "Check",
                "text": "Apply collision rules and decide whether play continues."
              }
            ]
          }
        ]
      },
      {
        "id": "lessons",
        "label": "Building experience",
        "eyebrow": "03 / Building experience",
        "title": "Several rules become one running system.",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "As the game runs, the program needs to keep track of the snake's changing position and determine when important interactions occur.",
              "That includes handling the rules that determine when the snake can continue moving and when a collision ends the game.",
              "Implementing those mechanics gave me more experience representing game state and updating several connected pieces of data together."
            ]
          },
          {
            "type": "callout",
            "label": "Where it led",
            "text": "It introduced patterns around keyboard controls, drawing, movement, and game state that I would later use in increasingly larger Java projects such as RushHour and Party Islands."
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default snake;
