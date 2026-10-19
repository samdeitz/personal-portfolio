import type { CommandOutput } from "../commands/types";
import { HOME_PATH } from "../filesystem/traversal";

// Bound both buffers independently: clearing visible output must not erase recall.
export const HISTORY_LIMIT = 200;
export const TRANSCRIPT_LIMIT = 300;

export interface TranscriptEntry {
  id: number;
  cwd: string;
  command: string;
  output: CommandOutput | null;
}

export interface TerminalSession {
  cwd: string;
  input: string;
  draft: string;
  // null means editing the draft; a number indexes commandHistory.
  historyCursor: number | null;
  commandHistory: string[];
  transcript: TranscriptEntry[];
  nextEntryID: number;
}

export const createSession = (): TerminalSession => ({
  cwd: HOME_PATH,
  input: "",
  draft: "",
  historyCursor: null,
  commandHistory: [],
  transcript: [],
  nextEntryID: 0,
});

export type SessionAction =
  | { type: "input"; value: string }
  | { type: "recall"; direction: -1 | 1 }
  | {
      type: "submit";
      command: string;
      output: CommandOutput | null;
      cwd?: string;
      clear?: boolean;
    };

export function sessionReducer(
  state: TerminalSession,
  action: SessionAction,
): TerminalSession {
  // Editing a recalled command makes it the new draft and exits history browsing.
  if (action.type === "input") {
    return {
      ...state,
      input: action.value,
      draft: action.value,
      historyCursor: null,
    };
  }

  if (action.type === "recall") {
    if (
      !state.commandHistory.length ||
      (state.historyCursor === null && action.direction === 1)
    )
      return state;

    // One position past the newest command represents the saved draft.
    // Compute input and cursor together to avoid reading a stale React state value.
    const cursor = Math.max(
      0,
      Math.min(
        state.commandHistory.length,
        (state.historyCursor ?? state.commandHistory.length) + action.direction,
      ),
    );
    // Save the unfinished input only when entering recall, not on every arrow press.
    const draft = state.historyCursor === null ? state.input : state.draft;
    const atDraft = cursor === state.commandHistory.length;
    return {
      ...state,
      draft,
      historyCursor: atDraft ? null : cursor,
      input: atDraft ? draft : state.commandHistory[cursor],
    };
  }

  if (!action.command.trim()) {
    return { ...state, input: "", draft: "", historyCursor: null };
  }

  // Repeated submissions still appear in the transcript, but adjacent duplicates
  // only occupy one recall slot. Keep the raw command, including any ">" characters.
  const commandHistory =
    state.commandHistory.at(-1) === action.command
      ? state.commandHistory
      : [...state.commandHistory, action.command].slice(-HISTORY_LIMIT);
  // Capture the prompt before applying a directory change.
  const entry = {
    id: state.nextEntryID,
    cwd: state.cwd,
    command: action.command,
    output: action.output,
  };

  return {
    ...state,
    cwd: action.cwd ?? state.cwd,
    input: "",
    draft: "",
    historyCursor: null,
    commandHistory,
    transcript: action.clear
      ? []
      : [...state.transcript, entry].slice(-TRANSCRIPT_LIMIT),
    nextEntryID: state.nextEntryID + 1,
  };
}
