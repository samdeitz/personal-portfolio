import type { Project } from "./types";
import previewImage from "../assets/images/exercise-finder-banner.jpg";

const workoutFinder = {
  kind: "project",
  id: "workout-finder",
  title: "Workout Finder",
  desktopImageSrc: "exercise-finder.jpg",
  metadata: {
    summary:
      "My first React project, built to learn component-based development, API fetching, and basic React concepts. The application lets users search for exercises and view information such as images, descriptions, and instructions.",
    status: "Deployed",
    links: [
      {
        href: "https://github.com/samdeitz/exercisefinder",
        label: "Go to repo",
        icon: "github",
      },
      {
        href: "https://exercisefinder.samdeitz.ca",
        label: "Visit Site",
        icon: "open",
      },
    ],
    technologies: ["React", "JavaScript", "Vite"],
    banner: {
      src: previewImage,
      alt: "Workout Finder preview",
    },
  },
  content: [
    {
      type: "heading",
      text: "Learning React by building something practical",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Workout Finder was the first project I built with React.",
    },
    {
      type: "paragraph",
      text: "Rather than only following small tutorials, I wanted a project that would make me work with components, state, data fetching, and user interaction together.",
    },
    {
      type: "paragraph",
      text: "I chose an exercise search application because it gave me a straightforward interface while still requiring data from an external source.",
    },
    {
      type: "heading",
      text: "Searching an exercise database",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The main feature lets users search through a database of exercises.",
    },
    {
      type: "paragraph",
      text: "Instead of storing the exercise information directly in the application, I fetched the data from an API and used the returned results to build the interface.",
    },
    {
      type: "paragraph",
      text: "This was my first practical experience requesting external data and then using that data to control what appeared on the page.",
    },
    {
      type: "heading",
      text: "Displaying useful exercise information",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Search results provide more than just the name of an exercise.",
    },
    {
      type: "paragraph",
      text: "Users can view supporting information such as images, descriptions, and instructions explaining how an exercise is performed.",
    },
    {
      type: "paragraph",
      text: "Building those result views helped me understand how React components could take structured data and turn it into reusable interface elements.",
    },
    {
      type: "heading",
      text: "Building my foundation in React",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The biggest value of Workout Finder was what it taught me rather than the complexity of the finished application.",
    },
    {
      type: "paragraph",
      text: "It introduced me to the basic React workflow: breaking an interface into components, managing data and state, responding to user input, fetching information asynchronously, and rerendering the interface when that information changes.",
    },
    {
      type: "paragraph",
      text: "Those concepts became the foundation for the much larger React and Next.js projects I built later.",
    },
  ],
} as const satisfies Project;

export default workoutFinder;
