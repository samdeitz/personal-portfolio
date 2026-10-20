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
  content: [],
  story: {
    "overview": {
      "eyebrow": "Pong",
      "headline": "A game loop, two paddles, and a ball.",
      "summary": "Recreating Pong in Java was an early step from console programs into interactive graphics.",
      "facts": [
        {
          "label": "Context",
          "value": "Grade 11 project"
        },
        {
          "label": "Library",
          "value": "HSA2"
        },
        {
          "label": "Focus",
          "value": "Game-loop fundamentals"
        }
      ],
      "stack": [
        "Java",
        "HSA2"
      ],
      "image": {
        "type": "figure",
        "src": previewImage,
        "alt": "Pong project preview",
        "caption": "Pong — project preview"
      }
    },
    "chapters": [
      {
        "id": "first-game",
        "label": "The first game loop",
        "eyebrow": "01 / The first game loop",
        "title": "Learn interaction through a classic.",
        "blocks": [
          {
            "type": "figure",
            "src": previewImage,
            "alt": "Pong project preview",
            "caption": "Pong project preview."
          },
          {
            "type": "prose",
            "paragraphs": [
              "Pong was one of my early Java projects and was built during Grade 11.",
              "I recreated the basic Pong gameplay using the open-source Java HSA2 library, with paddles controlled by the player and a ball moving between them.",
              "The small scope made it a useful project for learning how interactive programs work without needing a large amount of application infrastructure."
            ]
          }
        ]
      },
      {
        "id": "interaction",
        "label": "Movement meets rules",
        "eyebrow": "02 / Movement meets rules",
        "title": "Independent movement. Shared game state.",
        "blocks": [
          {
            "type": "flow",
            "label": "Pong update cycle",
            "items": [
              {
                "label": "01",
                "title": "Input",
                "text": "Respond to paddle controls."
              },
              {
                "label": "02",
                "title": "Movement",
                "text": "Update the moving ball and paddles."
              },
              {
                "label": "03",
                "title": "Collisions",
                "text": "Change movement when the ball meets paddles or boundaries."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Unlike earlier programs that primarily waited for input and produced an answer, Pong needed to continuously update what was happening on screen.",
              "The paddles had to respond to player input while the ball moved independently.",
              "That introduced me to the idea of repeatedly updating object positions to create real-time movement."
            ]
          },
          {
            "type": "details",
            "title": "Turning collisions into game rules",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "The game also needed logic for interactions between the ball, paddles, and edges of the playing area.",
                  "Building those mechanics gave me early experience with collision detection and changing movement based on what the ball hit.",
                  "Even with a simple game like Pong, I started seeing how several small rules could combine to create a complete interactive system."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "next-step",
        "label": "Beyond the console",
        "eyebrow": "03 / Beyond the console",
        "title": "A foundation for the next game.",
        "blocks": [
          {
            "type": "takeaways",
            "items": [
              {
                "title": "Real-time updates",
                "text": "Keep the screen changing while handling player input."
              },
              {
                "title": "Collision logic",
                "text": "Translate contact between objects into changes in movement."
              },
              {
                "title": "Connected state",
                "text": "Combine small rules into a playable system."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Pong was one of the projects that helped move my Java experience beyond simple console programs.",
              "It introduced concepts such as animation, keyboard input, collision logic, and continuous game state, which I later expanded on in more complicated games and Java Swing projects."
            ]
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default pong;
