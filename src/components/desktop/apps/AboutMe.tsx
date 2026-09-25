import family from "../../../assets/images/family.jpg";

export default function AboutMe() {
  return (
    <>
      <img className="self-center h-2/5 shrink-0 max-w-full min-w-0 w-full block object-cover object-[50%_20%]" src={family} alt="Family photograph" />
      <article className="w-full max-w-[76ch] shrink-0 space-y-4 p-4 leading-relaxed" aria-label="About Me">
        <h2 className="text-xl font-bold">A little about me</h2>
        <p>I'm Sam, a Computer Science student at Western University who likes building things that sit somewhere between software engineering, web development, and experimenting with technology just because I want to understand how it works.</p>
        <p>Most of my recent work has been full-stack web development. I've worked with React, Next.js, TypeScript, Payload CMS, AWS, APIs, databases, and deployment infrastructure across internships, client projects, and student organizations.</p>
        <p>A lot of the projects I enjoy most start with me asking how something works underneath the abstraction. That has led me from building websites to experimenting with things like Java class loading, networking with UDP sockets, Docker, Linux servers, reverse proxies, and my own React-based window manager for this portfolio.</p>
        <p>I tend to learn best by building something real. My first React project was a simple workout finder so I could learn components and API requests. Later projects became multiplayer games, CMS-backed websites, developer tools, analytics systems, and self-hosted infrastructure.</p>
        <p>Outside of coursework, I like working on projects where I can own a problem from the initial idea through implementation and deployment. I especially enjoy frontend architecture and UI work, but I increasingly find myself moving deeper into backend systems, infrastructure, and software architecture as well.</p>
        <p>This portfolio is a good example of that mindset. Instead of making a traditional portfolio page, I built a desktop environment with its own window manager, applications, search system, themes, and terminal because it sounded more interesting to build.</p>
        <p>I'm currently continuing to improve my full-stack and systems knowledge while looking for opportunities where I can work on challenging software with people I can learn from.</p>
      </article>
    </>
  );
}
