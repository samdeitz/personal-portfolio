import type { Project } from "./types";
import previewImage from "../assets/images/exercise-finder-banner.jpg";
import landing from "../assets/storyImages/workoutFinder/landing.png";

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
  content: [],
  story: {
    overview: {
      eyebrow: "Workout Finder",
      headline: "My first React app, built around a real search.",
      summary:
        "An exercise finder that brought components, state, API requests, and useful results together in one project.",
      facts: [
        {
          label: "Milestone",
          value: "First React project",
        },
        {
          label: "Experience",
          value: "Exercise search",
        },
        {
          label: "Data",
          value: "External API",
        },
      ],
      stack: ["React", "JavaScript"],
      image: {
        type: "figure",
        src: previewImage,
        alt: "Workout Finder project preview",
        caption: "Workout Finder: project preview",
      },
    },
    chapters: [
      {
        id: "learning",
        label: "Learning by building",
        eyebrow: "01 / Learning by building",
        title: "A practical reason to learn React.",
        blocks: [
          {
            type: "split",
            content: [
              {
                type: "prose",
                paragraphs: [
                  "Workout Finder was the first project I built with React.",
                  "Rather than only following small tutorials, I wanted a project that would make me work with components, state, data fetching, and user interaction together.",
                  "I chose an exercise search application because it gave me a straightforward interface while still requiring data from an external source.",
                ],
              },
            ],
            visual: {
              type: "figure",
              src: landing,
              alt: "Workout finder database",
              caption: "Workout finder database searching web app.",
            },
          },
        ],
      },
      {
        id: "search",
        label: "From query to result",
        eyebrow: "02 / From query to result",
        title: "Turn an API response into something useful.",
        blocks: [
          {
            type: "flow",
            label: "Exercise search",
            items: [
              {
                label: "01",
                title: "Search",
                text: "Enter a query for an exercise.",
              },
              {
                label: "02",
                title: "Fetch",
                text: "Request exercise information from an external API.",
              },
              {
                label: "03",
                title: "Explore",
                text: "Read the returned images, descriptions, and instructions.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "The main feature lets users search through a database of exercises.",
              "Instead of storing the exercise information directly in the application, I fetched the data from an API and used the returned results to build the interface.",
              "This was my first practical experience requesting external data and then using that data to control what appeared on the page.",
            ],
          },
          {
            type: "details",
            title: "Building the result views",
            blocks: [
              {
                type: "prose",
                paragraphs: [
                  "Search results provide more than just the name of an exercise.",
                  "Users can view supporting information such as images, descriptions, and instructions explaining how an exercise is performed.",
                  "Building those result views helped me understand how React components could take structured data and turn it into reusable interface elements.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "foundation",
        label: "The foundation",
        eyebrow: "03 / The foundation",
        title: "Small project. Lasting building blocks.",
        blocks: [
          {
            type: "takeaways",
            items: [
              {
                title: "Components",
                text: "Break the interface into reusable pieces.",
              },
              {
                title: "State and interaction",
                text: "Respond to input and render the current results.",
              },
              {
                title: "Asynchronous data",
                text: "Connect an external API to the interface.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "The biggest value of Workout Finder was what it taught me rather than the complexity of the finished application.",
              "Those concepts became the foundation for the much larger React and Next.js projects I built later.",
            ],
          },
        ],
      },
    ],
  },
} as const satisfies Project;

export default workoutFinder;
