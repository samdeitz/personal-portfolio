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
  content: [
    {
      type: "heading",
      text: "Building an animation with mathematics",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The goal of this project was to create a loading animation in Java using mathematical calculations to control how elements moved on screen.",
    },
    {
      type: "paragraph",
      text: "I designed mine around a hexagon with a dotted animated line moving around it.",
    },
    {
      type: "paragraph",
      text: "Instead of using a premade animation, I had to calculate how the moving points should progress around the shape.",
    },
    {
      type: "heading",
      text: "Moving around the hexagon",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The animation follows the vertices and edges of a hexagon, continuously moving the dotted line around its perimeter.",
    },
    {
      type: "paragraph",
      text: "That required translating the geometry of the shape into positions that could be updated as the animation progressed.",
    },
    {
      type: "paragraph",
      text: "The project made the relationship between coordinate-based graphics and mathematics much more concrete for me.",
    },
    {
      type: "heading",
      text: "Creating the trailing effect",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I also wanted the animation to have more visual depth than a single point or line moving around the shape.",
    },
    {
      type: "paragraph",
      text: "As the dotted line moves, previous positions remain temporarily visible behind it, creating a trailing or shadow effect around the hexagon.",
    },
    {
      type: "paragraph",
      text: "This meant keeping track of more than just the object's current position and thinking about how previous animation states could contribute to the next frame.",
    },
    {
      type: "heading",
      text: "Learning graphics through movement",
      level: 3,
    },
    {
      type: "paragraph",
      text: "This project was much smaller than some of my later applications, but it was useful because the challenge came from the animation itself rather than application architecture.",
    },
    {
      type: "paragraph",
      text: "It gave me early experience using calculations, coordinates, and repeated state updates to create motion programmatically.",
    },
  ],
} as const satisfies Project;

export default loadingIcon;
