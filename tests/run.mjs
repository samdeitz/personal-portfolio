import { build } from "vite";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
const directory = await mkdtemp(join(tmpdir(), "portfolio-tests-"));
try {
  const outfile = join(directory, "terminal.test.mjs");
  await build({
    configFile: false,
    logLevel: "silent",
    resolve: { alias: { "@": resolve("src") } },
    build: {
      ssr: "tests/terminal.test.ts",
      outDir: directory,
      rollupOptions: { output: { entryFileNames: "terminal.test.mjs" } },
    },
  });
  const result = spawnSync(process.execPath, [outfile], { stdio: "inherit" });
  process.exitCode = result.status ?? 1;
} finally {
  await rm(directory, { recursive: true, force: true });
}
