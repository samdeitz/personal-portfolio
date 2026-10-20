export default function WorkSummary() {
  return (
    <footer className="grid gap-6 pt-8 @min-[700px]:grid-cols-[1fr_2fr]">
      <h2 className="font-[Georgia,serif] text-2xl leading-tight">Across these roles</h2>
      <div className="grid gap-5 @min-[550px]:grid-cols-3">
        {[
          ["Work with real constraints", "Existing systems, changing requirements, and client feedback."],
          ["Build reusable foundations", "Shared components and content systems that other people can work with."],
          ["Carry work through delivery", "Connect implementation with the people who will use it."],
        ].map(([title, text]) => <div key={title}><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs text-theme-secondary">{text}</p></div>)}
      </div>
    </footer>
  );
}
