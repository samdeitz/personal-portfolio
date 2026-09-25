export default function PreviousWork() {
  return (
    <article className="w-full max-w-[76ch] shrink-0 space-y-8 p-4 leading-relaxed" aria-label="Work Experience">
      <section className="space-y-3">
        <header>
          <h2 className="text-lg font-bold">trACT Software</h2>
          <p className="font-semibold">Full Stack Developer Intern</p>
          <p className="text-sm opacity-70">May 2026 – Present</p>
        </header>
        <p>I work across the frontend, backend, CMS, analytics, and infrastructure for trACT Software's web platform.</p>
        <p>My main project has been replacing the company's Wix site with a custom Next.js application backed by Payload CMS. I have also worked on account-management tools, a custom analytics dashboard using Google Analytics, Search Console, and Microsoft Clarity, and the AWS infrastructure used to support the platform.</p>
      </section>
      <section className="space-y-3">
        <header>
          <h2 className="text-lg font-bold">3D Western</h2>
          <p className="font-semibold">Full Stack Developer</p>
          <p className="text-sm opacity-70">May 2026 – Present</p>
        </header>
        <p>I help develop and maintain 3D Western's website, with most of my work focused on CMS architecture, data fetching, permissions, automation, and testing.</p>
        <p>I designed the Payload CMS structure used across the site, built a reusable data-access layer for its content, added caching for dynamic content, and created an automated Instagram synchronization system using the Meta API.</p>
      </section>
      <section className="space-y-3">
        <header>
          <h2 className="text-lg font-bold">Childcan</h2>
          <p className="font-semibold">Senior Frontend Developer — Tethos</p>
          <p className="text-sm opacity-70">October 2025 – March 2026</p>
        </header>
        <p>I was one of two senior frontend developers on a seven-person team rebuilding Childcan's nonprofit website.</p>
        <p>I worked on reusable content systems, dynamic routing, navigation, search interfaces, and responsive components while also helping support junior developers. I also contributed to the site's design and accessibility work before the project transitioned from its original React implementation to Webflow.</p>
      </section>
      <section className="space-y-3">
        <header>
          <h2 className="text-lg font-bold">MarketDental</h2>
          <p className="font-semibold">Frontend Developer</p>
          <p className="text-sm opacity-70">July 2025 – August 2025</p>
        </header>
        <p>I rebuilt MarketDental's employee punch-in interface using Svelte, JavaScript, and Tailwind CSS.</p>
        <p>I integrated the frontend with an existing backend, built the responsive employee table and filtering interface, improved mobile usability, added print support, and worked directly from client feedback before the application was deployed internally.</p>
      </section>
    </article>
  );
}
