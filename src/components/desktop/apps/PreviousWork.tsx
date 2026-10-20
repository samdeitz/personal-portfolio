import ResumeLink from "../content/ResumeLink";
import ExperienceTimeline from "./work/ExperienceTimeline";
import WorkSummary from "./work/WorkSummary";

export default function PreviousWork() {

  return (
    <article className="@container w-full max-w-6xl shrink-0 font-sans leading-relaxed text-theme-foreground" aria-label="Work Experience">
      <div className="p-5 @min-[700px]:p-10">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-theme-foreground/15 pb-8">
          <div className="max-w-[40rem]">
            <p className="mb-4 text-xs font-semibold tracking-[.18em] text-theme-focused uppercase">Experience</p>
            <h1 className="font-[Georgia,serif] text-4xl leading-[1.08] tracking-tight text-balance @min-[900px]:text-5xl">The work behind the projects.</h1>
            <p className="mt-4 text-sm text-theme-secondary">Building interfaces, content systems, and the infrastructure that supports them.</p>
          </div>
          <ResumeLink />
        </header>

        <ExperienceTimeline />
        <WorkSummary />
      </div>
    </article>
  );
}
