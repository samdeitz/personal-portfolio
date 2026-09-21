import type { Project } from "./types";
import previewImage from "../assets/images/snake-banner.jpg";

const snake = {
  kind: "project",
  id: "snake",
  title: "Snake",
  desktopImageSrc: "snake.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Snake preview"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "link",
      href: "https://github.com/samdeitz/snakegame",
      label: "Go to repo",
      icon: "github"
    },
    {
      type: "technologies",
      technologies: [
        "Java",
        "Java Swing Library"
      ]
    }
  ]
} as const satisfies Project;

export default snake;
