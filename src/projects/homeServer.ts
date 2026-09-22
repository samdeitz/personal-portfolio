import type { Project } from "./types";

// Based on the project account in resume_eval.md.
const homeServer = {
  kind: "project",
  id: "home-server",
  title: "Home Server",
  desktopImageSrc: "server.png",
  content: [
    {
      type: "heading",
      text: "Giving an old computer a new job",
    },
    {
      type: "paragraph",
      text: "I repurposed an old PC from my basement into an Ubuntu Server for hosting my web applications and a remote notes vault. This became a hands-on way to learn Docker and understand the infrastructure behind the applications I build.",
    },
    {
      type: "heading",
      text: "Separating services into containers",
    },
    {
      type: "paragraph",
      text: "I wrote Docker images for my web apps and ran each service in its own container, including the notes vault and a Caddy reverse proxy. The containers share a Docker network for internal communication, giving each service its own runtime while allowing the proxy to reach the applications.",
    },
    {
      type: "heading",
      text: "Routing traffic and accessing the server remotely",
    },
    {
      type: "paragraph",
      text: "I configured Caddy as the entry point for the hosted services, with the server exposing ports 80 and 443 for HTTP and HTTPS. I also set up Tailscale so I can access the server remotely from my laptop. Working through the containers, internal network, and reverse proxy helped me connect application packaging with how requests actually reach a running service.",
    },
  ],
} as const satisfies Project;

export default homeServer;
