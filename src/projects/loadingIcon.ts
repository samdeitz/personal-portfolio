import type { Project } from "./types";
import previewImage from "../assets/images/loading-banner.gif";

const loadingIcon = {
  kind: "project",
  id: "loading-icon",
  title: "Loading Icon",
  desktopImageSrc: "loading.jpg",
  metadata: {
    summary:
      "A Java animation project built around mathematical movement rather than a traditional game or application. I created a hexagonal loading icon where a dotted line travels between the vertices and around the shape while leaving a fading shadow behind it.",
    status: "Completed",
    links: [
      {
        href: "https://github.com/samdeitz/loadingicon",
        label: "Go to repo",
        icon: "github",
      },
    ],
    technologies: ["Java", "Java Swing"],
    banner: {
      src: previewImage,
      alt: "Loading Icon preview",
    },
  },
  content: [],
  story: {
    "overview": {
      "eyebrow": "Loading Icon",
      "headline": "Make geometry move.",
      "summary": "A hexagonal Java animation with a dotted path and a fading trail, built from coordinates and repeated updates.",
      "facts": [
        {
          "label": "Focus",
          "value": "Programmatic motion"
        },
        {
          "label": "Shape",
          "value": "Hexagon"
        },
        {
          "label": "Effect",
          "value": "Fading trail"
        }
      ],
      "stack": [
        "Java",
        "Java Swing"
      ],
      "image": {
        "type": "figure",
        "src": previewImage,
        "alt": "Loading Icon project preview",
        "caption": "Loading Icon: project preview"
      }
    },
    "chapters": [
      {
        "id": "motion",
        "label": "The moving shape",
        "eyebrow": "01 / The moving shape",
        "title": "Six sides, one continuous path.",
        "blocks": [
          {
            "type": "figure",
            "src": previewImage,
            "alt": "Loading Icon project preview",
            "caption": "The loading animation in motion."
          },
          {
            "type": "prose",
            "paragraphs": [
              "The goal of this project was to create a loading animation in Java using mathematical calculations to control how elements moved on screen.",
              "I designed mine around a hexagon with a dotted animated line moving around it.",
              "Instead of using a premade animation, I had to calculate how the moving points should progress around the shape."
            ]
          }
        ]
      },
      {
        "id": "geometry",
        "label": "Coordinates to motion",
        "eyebrow": "02 / Coordinates to motion",
        "title": "Turn the perimeter into positions.",
        "blocks": [
          {
            "type": "flow",
            "label": "Animation progression",
            "items": [
              {
                "label": "01",
                "title": "Geometry",
                "text": "Use the hexagon’s vertices and edges."
              },
              {
                "label": "02",
                "title": "Position",
                "text": "Calculate where the moving points belong."
              },
              {
                "label": "03",
                "title": "Frame",
                "text": "Update the drawing as the animation progresses."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The animation follows the vertices and edges of a hexagon, continuously moving the dotted line around its perimeter.",
              "That required translating the geometry of the shape into positions that could be updated as the animation progressed.",
              "The project made the relationship between coordinate-based graphics and mathematics much more concrete for me."
            ]
          }
        ]
      },
      {
        "id": "trail",
        "label": "Leaving a trace",
        "eyebrow": "03 / Leaving a trace",
        "title": "The previous frame still has a role.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "The current position",
                "text": "The dotted line advances around the shape."
              },
              {
                "title": "Recent positions",
                "text": "Earlier positions remain temporarily visible as a fading trail."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "This meant keeping track of more than just the object's current position and thinking about how previous animation states could contribute to the next frame."
            ]
          },
          {
            "type": "details",
            "title": "What this small project taught me",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "This project was much smaller than some of my later applications, but it was useful because the challenge came from the animation itself rather than application architecture.",
                  "It gave me early experience using calculations, coordinates, and repeated state updates to create motion programmatically."
                ]
              }
            ]
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default loadingIcon;
