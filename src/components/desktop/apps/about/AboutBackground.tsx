import { useApp } from "../../../../context/AppContext";

export function AboutOrigins() {
  return (
    <section aria-labelledby="about-start">
      <p className="mb-3 text-xs tracking-[.15em] text-theme-secondary uppercase">
        Where it started
      </p>
      <h2
        id="about-start"
        className="font-[Georgia,serif] text-3xl leading-tight text-balance"
      >
        Building things became teaching things.
      </h2>
      <div className="mt-6 grid gap-7 @min-[700px]:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-sm text-theme-secondary">
          <p>
            Ever since I was young, I’ve been drawn to creating things:
            programming, physics projects, or tinkering with whatever I had
            around me. I learned Python in Grade 9. Not long after, a friend and
            I started a club to teach programming to other students.
          </p>
          <p>
            Explaining ideas to someone else pushed me to understand them more
            deeply than practicing alone. It also made me realize how much I
            enjoyed programming.
          </p>
        </div>
        <aside className="flex items-center border-l-2 border-theme-focused pl-5">
          <div className="flex-col">
            <p className="mb-2 text-xs tracking-widest text-theme-focused uppercase">
              An early lesson
            </p>
            <p className="font-[Georgia,serif] text-2xl leading-snug">
              Teaching someone else made me a better learner.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function AboutProblemSolving() {
  return (
    <section
      className="grid gap-7 border-t border-theme-foreground/15 pt-9 @min-[700px]:grid-cols-[1fr_1.4fr]"
      aria-labelledby="about-problems"
    >
      <div>
        <p className="mb-3 text-xs tracking-[.15em] text-theme-secondary uppercase">
          Learning to think
        </p>
        <h2
          id="about-problems"
          className="font-[Georgia,serif] text-3xl leading-tight text-balance"
        >
          Getting comfortable with being stuck.
        </h2>
      </div>
      <div className="space-y-4 text-sm text-theme-secondary">
        <p>
          I discovered competitive programming in Grade 10 through the Canadian
          Computing Competition. A friend and I spent a lot of time working
          through problems together, learning to break them down, recognize
          patterns, and look for efficient solutions.
        </p>
        <p>
          That practice stayed with me. When I reached Data Structures and
          Algorithms at university, many of the ideas felt familiar. More
          importantly, I had learned to enjoy trying different approaches until
          something worked.
        </p>
      </div>
    </section>
  );
}

export function AboutMotivation() {
  const { openApp } = useApp();
  return (
    <section
      className="grid gap-6 rounded-xl border border-theme-foreground/15 bg-theme-surface/40 p-6 @min-[700px]:grid-cols-[1.5fr_1fr]"
      aria-labelledby="about-next"
    >
      <div>
        <p className="mb-3 text-xs tracking-[.15em] text-theme-focused uppercase">
          What keeps me going
        </p>
        <h2
          id="about-next"
          className="font-[Georgia,serif] text-2xl leading-tight"
        >
          Something meaningful to build.
        </h2>
        <p className="mt-3 text-sm text-theme-secondary">
          My last summer was busy with projects and responsibilities, and I
          liked having so much to work toward. It could be overwhelming, but I
          grew more than I had in any previous summer. I want to keep that
          momentum: challenging problems, people I can learn from, and more
          opportunities to build.
        </p>
      </div>
      <div className="flex items-center @min-[700px]:border-l @min-[700px]:border-theme-foreground/15 @min-[700px]:pl-6">
        <button
          type="button"
          onClick={() => openApp("previous-work")}
          className="min-h-10 cursor-pointer py-2 text-sm font-semibold text-theme-focused underline-offset-4 hover:underline"
        >
          See my experience <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
