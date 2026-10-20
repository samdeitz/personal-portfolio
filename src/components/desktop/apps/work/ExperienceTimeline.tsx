import { useApp } from "../../../../context/AppContext";
import { allProjects } from "../../../../projects";
import AppElement from "../../AppElement";
import ContentImage from "../../content/ContentImage";
import threeDW from "../../../../assets/images/3dw_poster.jpg";
import childCan from "../../../../assets/logos/childcanLogo.jpg";
import tract from "../../../../assets/logos/tractLogo.jpg";
import punchIn from "../../../../assets/logos/mdLogo.jpg";

// Keep role-specific copy here; artwork and technology buttons reuse the project data.
const experience = [
  {
    project: allProjects.tract,
    image: tract,
    company: "trACT Software",
    role: "Full Stack Developer Intern",
    dates: "May 2026 – Present",
    summary:
      "Replacing Wix with a custom web platform, editable content, and connected analytics.",
    contributions: [
      "Marketing website and Payload CMS architecture",
      "Analytics, account-management tools, and AWS infrastructure",
    ],
    note: "",
  },
  {
    project: allProjects["3d-western"],
    image: threeDW,
    company: "3D Western",
    role: "Full Stack Developer",
    dates: "May 2026 – Present",
    summary:
      "Giving the marketing team control over content through a reusable CMS foundation.",
    contributions: [
      "CMS architecture, permissions, and a shared data layer",
      "Caching and automated Instagram synchronization",
    ],
    note: "",
  },
  {
    project: allProjects.childcan,
    image: childCan,
    company: "Childcan",
    role: "Senior Frontend Developer · Tethos",
    dates: "October 2025 – March 2026",
    summary:
      "One of two senior frontend developers on a seven-person team, rebuilding a nonprofit website and supporting junior developers.",
    contributions: [
      "Reusable content rendering and dynamic routes",
      "Navigation, search interfaces, and responsive components",
    ],
    note: "I contributed to the React rebuild; the final site launched in Webflow after a client-driven platform change.",
  },
  {
    project: allProjects["punch-in-page"],
    image: punchIn,
    company: "MarketDental",
    role: "Frontend Developer",
    dates: "July 2025 – August 2025",
    summary:
      "Rebuilt the employee punch-in interface around mobile usability, the existing API, and direct client feedback.",
    contributions: [
      "Svelte frontend and backend integration",
      "Responsive employee table, filtering, and print support",
    ],
    note: "",
  },
];

type Experience = (typeof experience)[number];

function ExperienceEntry({ entry }: { entry: Experience }) {
  const { openApp } = useApp();
  const { project, company, role, dates, summary, contributions, note } = entry;
  return (
    <li className="grid gap-4 border-b border-theme-foreground/15 py-8 @min-[700px]:grid-cols-[125px_minmax(0,1fr)] @min-[700px]:gap-0">
      <p className="text-xs text-theme-secondary @min-[700px]:pr-5 @min-[700px]:pt-1">
        {dates}
      </p>
      <div className="relative grid min-w-0 gap-6 border-l border-theme-foreground/20 pl-5 @min-[700px]:pl-8 @min-[950px]:grid-cols-[1.25fr_1fr]">
        <span
          aria-hidden="true"
          className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-theme-focused"
        />
        <section aria-label={`${company} experience`}>
          <h2 className="font-[Georgia,serif] text-2xl leading-tight">
            {company}
          </h2>
          <p className="mt-1 text-sm text-theme-secondary">{role}</p>
          <p className="mt-4 text-sm">{summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-theme-secondary">
            {contributions.map((contribution) => (
              <li key={contribution} className="flex gap-3">
                <span aria-hidden="true" className="text-theme-focused">
                  →
                </span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
          {note && <p className="mt-4 text-xs text-theme-secondary">{note}</p>}
          <div className="mt-4 text-xs leading-tight [&_p]:m-0">
            <AppElement
              element={{
                type: "technologies",
                technologies: project.metadata.technologies.slice(0, 3),
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => openApp(project.id)}
            aria-label={`Read the ${company} project story`}
            className="mt-5 min-h-10 cursor-pointer rounded-lg border border-theme-focused/60 px-3 py-2 text-sm font-semibold text-theme-focused hover:bg-theme-focused/10"
          >
            Read the project story <span aria-hidden="true">→</span>
          </button>
        </section>
        <ContentImage
          image={{
            type: "figure",
            src: entry.image,
            alt: `${company} project artwork`,
            caption: "Existing artwork used as a placeholder.",
            placeholder: true,
          }}
        />
      </div>
    </li>
  );
}

export default function ExperienceTimeline() {
  return (
    <ol className="list-none p-0">
      {experience.map((entry) => (
        <ExperienceEntry key={entry.project.id} entry={entry} />
      ))}
    </ol>
  );
}
