import type { Project } from "./types";
import previewImage from "../assets/images/exercise-finder-banner.jpg";

const workoutFinder = {
  kind: "project",
  id: "workout-finder",
  title: "Workout Finder",
  desktopImageSrc: "exercise-finder.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Workout Finder preview"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "group",
      direction: "horizontal",
      content: [
        {
          type: "link",
          href: "https://github.com/samdeitz/exercisefinder",
          label: "Go to repo",
          icon: "github"
        },
        {
          type: "link",
          href: "/exercisefinder",
          label: "Visit Site",
          icon: "open"
        }
      ]
    },
    {
      type: "technologies",
      technologies: [
        "React.js",
        "Vite",
        "TailwindCSS"
      ]
    }
  ]
} as const satisfies Project;

export default workoutFinder;
