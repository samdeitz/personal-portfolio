import assert from "node:assert/strict";
import { test } from "node:test";
import { parseCommand } from "../src/commands/parser";
import { executeCommand } from "../src/commands/registry";
import { completeCommand } from "../src/commands/completion";
import { resolvePath } from "../src/filesystem/traversal";
import { filesystem } from "../src/filesystem";
import { createSession, sessionReducer, HISTORY_LIMIT, TRANSCRIPT_LIMIT } from "../src/terminal/session";
import { wmReducer } from "../src/window-management/reducer";
import type { WMState } from "../src/context/types";
const context = { cwd: "/home/sam", filesystem, isDark: true };
const initialWindowState = (): WMState => ({ windows: [], layoutTree: {}, rootID: null, focusedWindowID: null, layoutMode: "desktop" });
const open = (state: WMState, id: string) => wmReducer(state, { type: "CREATE_WINDOW", payload: { windowID: id } });

test("blank input, quotes, escapes, and malformed commands", () => {
  assert.deepEqual(parseCommand("   "), ["", []]);
  for (const input of ['launch "About Me"', "launch 'About Me'", "launch About\\ Me"]) assert.deepEqual(parseCommand(input), ["launch", ["About Me"]]);
  assert.equal(executeCommand("", context).output, null);
  assert.equal(executeCommand('cat "unfinished', context).output?.type, "errorMessage");
  assert.equal(executeCommand("toString", context).output?.type, "errorMessage");
});

test("paths normalize and cd rejects files", () => {
  assert.equal(resolvePath("/", "../../"), "/");
  assert.equal(resolvePath("/home/sam/Documents", ".././Projects"), "/home/sam/Projects");
  assert.equal(resolvePath("/", "~/Documents"), "/home/sam/Documents");
  assert.equal(executeCommand("cd Documents/about.txt", context).output?.type, "errorMessage");
  assert.deepEqual(executeCommand("cd /", context).effects, [{ type: "changeDirectory", path: "/" }]);
  assert.equal(executeCommand("cat missing.txt", context).output?.type, "errorMessage");
  assert.equal(executeCommand("ls Documents", context).output?.type, "list");
});

test("completion preserves quoted app names and completes nested paths", () => {
  const line = "launch Desktop/Ab";
  const completion = completeCommand(line, line.length, context);
  assert.deepEqual(parseCommand(completion.input), ["launch", ["Desktop/About Me"]]);
  assert.deepEqual(executeCommand(completion.input, context).effects, [{ type: "openApp", appID: "about-me" }]);
  const nested = "cat ~/Documents/ab";
  assert.equal(completeCommand(nested, nested.length, context).input, "cat ~/Documents/about.txt");
  assert.equal(completeCommand("pw", 2, context).input, "pwd");
  const middle = "cat Documents/abZZ";
  assert.equal(completeCommand(middle, middle.length - 2, context).input, "cat Documents/about.txt");
});

test("history navigates immediately in both directions and restores draft", () => {
  let state = createSession();
  for (const command of ["ls", 'cat "a>b"']) state = sessionReducer(state, { type: "submit", command, output: null });
  state = sessionReducer(state, { type: "input", value: "unfinished" });
  state = sessionReducer(state, { type: "recall", direction: -1 });
  assert.equal(state.input, 'cat "a>b"');
  state = sessionReducer(state, { type: "recall", direction: -1 });
  assert.equal(state.input, "ls");
  state = sessionReducer(state, { type: "recall", direction: 1 });
  assert.equal(state.input, 'cat "a>b"');
  state = sessionReducer(state, { type: "recall", direction: 1 });
  assert.equal(state.input, "unfinished");
  assert.equal(state.historyCursor, null);
});

test("clear preserves recall, entries capture old cwd, and buffers are bounded", () => {
  let state = sessionReducer(createSession(), { type: "submit", command: "cd /", cwd: "/", output: null });
  assert.equal(state.transcript[0].cwd, "/home/sam");
  state = sessionReducer(state, { type: "submit", command: "clear", clear: true, output: null });
  assert.equal(state.transcript.length, 0);
  assert.deepEqual(state.commandHistory, ["cd /", "clear"]);
  for (let i = 0; i < 400; i++) state = sessionReducer(state, { type: "submit", command: `command ${i}`, output: null });
  assert.equal(state.commandHistory.length, HISTORY_LIMIT);
  assert.equal(state.transcript.length, TRANSCRIPT_LIMIT);
});

test("theme explicitly selects requested value", () => {
  assert.deepEqual(executeCommand("theme dark", context).effects, [{ type: "theme", theme: "dark" }]);
  assert.deepEqual(executeCommand("chthm", context).effects, [{ type: "theme", theme: "light" }]);
  assert.equal(executeCommand("theme unknown", context).output?.type, "errorMessage");
});

test("launch reuses apps, restores minimized apps, and allows independent terminals", () => {
  let state = open(initialWindowState(), "about-me");
  const id = state.windows[0].id;
  state = open(state, "about-me");
  assert.equal(state.windows.length, 1);
  state = wmReducer(state, { type: "MINIMIZE_WINDOW", payload: { windowID: id } });
  state = open(state, "about-me");
  assert.equal(state.windows[0].minimized, false);
  state = open(open(state, "terminal"), "terminal");
  assert.equal(state.windows.filter((window) => window.type === "terminal").length, 2);
});

test("mobile launch switches apps and restores terminal by its window id", () => {
  let state = open({ ...initialWindowState(), layoutMode: "mobile" }, "terminal");
  const terminalID = state.windows[0].id;
  state = open(state, "about-me");
  assert.equal(state.windows.find((window) => window.id === terminalID)?.minimized, true);
  state = wmReducer(state, { type: "RESTORE_WINDOW", payload: { windowID: terminalID } });
  assert.equal(state.focusedWindowID, terminalID);
  assert.equal(state.windows.filter((window) => !window.minimized).length, 1);
});

test("closing a split window leaves a valid root and supports later launches", () => {
  let state = open(open(initialWindowState(), "terminal"), "about-me");
  const id = state.windows[0].id;
  state = wmReducer(state, { type: "CLOSE_WINDOW", payload: { windowID: id } });
  assert.equal(state.layoutTree[state.rootID!].parent, null);
  state = open(state, "previous-work");
  assert.equal(state.windows.length, 2);
  assert.ok(state.layoutTree[state.focusedWindowID!]);
});
