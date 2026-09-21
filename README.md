# 📁 My Personal Portfolio

A smooth front-end design to display and explain my 
previous projects, work experience, and resume.
---

## 🌐 View the website

### Website Link 
[My Portfolio](https://samdeitz.ca)


## Project content

Each project has its own file in `src/projects/`, such as `workoutFinder.ts`
or `pong.ts`. Edit that file to update a project; to add one, create a file
exporting an object with `as const satisfies Project`, then import and register
it in `src/projects/index.ts` using `[project.id]: project`. Each entry owns its
ID, title, desktop icon filename, and ordered `content` array. Project IDs and
app titles are inferred from the registries. Desktop and Projects filesystem
entries are generated from the same data.

Blocks are defined in `src/content/types.ts`: `heading`, `paragraph`, `image`
(including GIFs), `link`, `technologies`, and recursive `group` blocks with
horizontal or vertical direction. Every block accepts an optional `className`.
Images use imported asset URLs and links carry their own destinations, so a
project can include multiple demos, images, and links anywhere in its layout.
Technology names are derived from `src/content/technologies.ts`.

`AppElement.tsx` renders blocks; `AppContent.tsx` dispatches projects and special
apps. Terminal, About Me, and Previous Work have separate components and
metadata in `src/apps/specialApps.ts`. The combined app registry lives in
`src/apps/registry.ts`; filesystem node types live in `src/filesystem/types.ts`.

Validation commands: `npx tsc -b --pretty false`, `npm run lint`, and
`npm run build`. The build writes to `docs/`.
