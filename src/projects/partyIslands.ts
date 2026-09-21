import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const partyIslands = {
  kind: "project",
  id: "party-islands",
  title: "Party Islands",
  desktopImageSrc: "logo-dark.png",
  content: [
    {
      type: "heading",
      text: "A multiplayer typing game over LAN"
    },
    {
      type: "paragraph",
      text: "I co-led a five-person team building Party Islands, a real-time multiplayer typing game in Java Swing. Players compete over three rounds, lose life for typing mistakes, and use power-ups such as word skips, score boosts, and restored life. My main contributions were LAN lobby discovery and the event-driven screen navigation system."
    },
    {
      type: "heading",
      text: "Finding and joining a lobby"
    },
    {
      type: "paragraph",
      text: "I built UDP broadcasting and discovery so hosts can advertise a room on the local network. Players scan for available lobbies and join using the connection information in the broadcast. I also implemented the login, find-lobby, waiting-room, and player interfaces. A teammate built the game-state system that drives the shared multiplayer experience."
    },
    {
      type: "heading",
      text: "Decoupling more than ten screens"
    },
    {
      type: "paragraph",
      text: "I introduced an EventBus interface with listener and window-event implementations so screens could request a transition without holding direct references to each other. Static screens use goToScreen, while screens that need fresh parameters use createDynamicScreen. A separate manager handles the in-game window flow after a player joins a lobby."
    },
    {
      type: "heading",
      text: "Working through the development lifecycle"
    },
    {
      type: "paragraph",
      text: "Over roughly a month and a half, we worked through requirements, UML design, implementation, and testing. I built reusable Swing components for consistency and wrote tests for the EventBus and UDP broadcasting. The architecture let us coordinate more than ten screens while keeping screen changes separate from the gameplay state owned by my teammate."
    },
    {
      type: "link",
      label: "View course repository",
      href: "https://gitlab.sci.uwo.ca/courses/2026/01/COMPSCI2212/group44/-/tree/28d4dbca10e28def07f63d0d3bf2d2ff4b349f38/",
      icon: "open"
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

export default partyIslands;
