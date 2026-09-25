import type { Project } from "./types";
import islandsBanner from "../assets/images/party-islands-banner.jpg";

const partyIslands = {
  kind: "project",
  id: "party-islands",
  title: "Party Islands",
  desktopImageSrc: "islandBg.jpg",
  metadata: {
    summary:
      "A real-time multiplayer typing game built in Java Swing by a five-person team. I co-led the project and focused on UDP lobby discovery, application navigation architecture, and several major player-facing screens.",
    status: "Completed",
    links: [
      {
        label: "View course repository",
        href: "https://gitlab.sci.uwo.ca/courses/2026/01/COMPSCI2212/group44/-/tree/28d4dbca10e28def07f63d0d3bf2d2ff4b349f38/",
        icon: "open",
      },
    ],
    technologies: ["Java", "Java Swing", "UDP", "Sockets"],
    banner: {
      src: islandsBanner,
      alt: "Party Islands Banner",
    },
  },
  content: [
    {
      type: "heading",
      text: "Building a real-time multiplayer game",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Party Islands was a month-and-a-half project built by a five-person team. I acted as one of three co-leads and worked across networking, application flow, and UI implementation.",
    },
    {
      type: "paragraph",
      text: "Players compete across three typing rounds, lose life for mistakes, use power-ups, and can see other players' progress in real time.",
    },
    {
      type: "heading",
      text: "Discovering multiplayer lobbies over LAN",
      level: 3,
    },
    {
      type: "paragraph",
      text: "My largest networking contribution was the LAN lobby discovery system.",
    },
    {
      type: "paragraph",
      text: "Hosts broadcast lobby information using UDP sockets. From the Find Lobby screen, players can scan the local network, see available rooms, and join one using information contained in the host's broadcast.",
    },
    {
      type: "paragraph",
      text: "Inside the lobby, players use their account name, receive an assigned color, ready up, and enter the game together.",
    },
    {
      type: "heading",
      text: "Managing more than 10 screens",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The application had more than 10 screens, and I did not want individual screens to hold direct references to every other screen they could navigate to.",
    },
    {
      type: "paragraph",
      text: "I designed an EventBus-based window manager that lets screens request navigation at a higher level.",
    },
    {
      type: "paragraph",
      text: "Static screens can be reused after initialization, while dynamic screens can be created when their state depends on the current session. This gave us a consistent way to manage screen transitions across the application.",
    },
    {
      type: "heading",
      text: "Building and testing the player-facing flow",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I implemented the login, lobby discovery, broadcast-room, waiting-room, and player-facing interfaces using reusable Swing components.",
    },
    {
      type: "paragraph",
      text: "The project also went through requirements gathering, UML design, implementation, and testing, including tests for parts of the EventBus and UDP networking.",
    },
  ],
} as const satisfies Project;

export default partyIslands;
