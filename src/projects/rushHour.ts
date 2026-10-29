import type { Project } from "./types";
import previewImage from "../assets/images/rush-hour-banner.jpg";

const rushHour = {
  kind: "project",
  id: "rush-hour",
  title: "Rush Hour",
  desktopImageSrc: "rush-hour.jpg",
  metadata: {
    summary:
      "A Java Swing recreation of the classic Rush Hour board game, built with a partner as my Grade 12 final project. The game included six playable levels, scoring, timing, pausing, and supporting screens such as instructions and credits.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/rushhour",
        label: "Go to repo",
        icon: "github",
      },
    ],
    technologies: ["Java", "Java Swing"],
    banner: {
      src: previewImage,
      alt: "Rush Hour preview",
    },
  },
  content: [],
  story: {
    "overview": {
      "eyebrow": "Rush Hour",
      "headline": "Find a way out of the traffic.",
      "summary": "A Java Swing puzzle game with six boards, movement rules, timing, and scoring.",
      "facts": [
        {
          "label": "Context",
          "value": "Grade 12 final project"
        },
        {
          "label": "Team",
          "value": "Built with a partner"
        },
        {
          "label": "Playable scope",
          "value": "6 levels"
        }
      ],
      "stack": [
        "Java",
        "Java Swing"
      ],
      "image": {
        "type": "figure",
        "src": previewImage,
        "alt": "Rush Hour project preview",
        "caption": "Rush Hour: project preview"
      }
    },
    "chapters": [
      {
        "id": "puzzle",
        "label": "The puzzle",
        "eyebrow": "01 / The puzzle",
        "title": "Turn a physical board into a digital game.",
        "blocks": [
          {
            "type": "figure",
            "src": previewImage,
            "alt": "Rush Hour project preview",
            "caption": "Rush Hour board preview."
          },
          {
            "type": "prose",
            "paragraphs": [
              "RushHour was my Grade 12 final project and one of the larger Java applications I had built at the time.",
              "My partner and I based it on the classic Rush Hour board game, where the player moves vehicles around a crowded board to clear a path for the target car to escape.",
              "Turning that idea into a digital game meant thinking about how the board, vehicles, movement rules, and game state could all be represented programmatically."
            ]
          }
        ]
      },
      {
        "id": "rules",
        "label": "Boards and rules",
        "eyebrow": "02 / Boards and rules",
        "title": "Same rules. A different starting point.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "The game contained six different levels, each with its own starting vehicle arrangement and puzzle.",
                  "Players could interact with the vehicles and attempt to solve each board while the game kept track of their progress.",
                  "Creating multiple levels made the project more than a single hardcoded puzzle and gave us experience organizing different game states within one application."
                ]
              }
            ],
            "visual": {
              "type": "figure",
              "src": previewImage,
              "alt": "Rush Hour project preview",
              "caption": "The project preview stands in for the individual level captures."
            }
          },
          {
            "type": "flow",
            "label": "Puzzle interaction",
            "items": [
              {
                "label": "01",
                "title": "Read the board",
                "text": "Start from a level’s vehicle arrangement."
              },
              {
                "label": "02",
                "title": "Move vehicles",
                "text": "Use the game’s movement rules to change the board."
              },
              {
                "label": "03",
                "title": "Clear the exit",
                "text": "Create a path for the target car."
              }
            ]
          }
        ]
      },
      {
        "id": "complete-game",
        "label": "Beyond the board",
        "eyebrow": "03 / Beyond the board",
        "title": "Build the experience around the puzzle.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "During play",
                "text": "Timing and scoring provide feedback on progress."
              },
              {
                "title": "Around play",
                "text": "Pausing, credits, and supporting screens round out the experience."
              }
            ]
          },
          {
            "type": "details",
            "title": "What working with a partner taught me",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "RushHour gave me experience organizing a larger Java Swing application and working collaboratively on a project over a longer period of time.",
                  "It also helped me become more comfortable managing state and interactions across multiple parts of a GUI application, experience that I later carried into more complicated Swing projects."
                ]
              }
            ]
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default rushHour;
