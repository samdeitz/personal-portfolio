import { open } from "./open.js";
import { close } from "./close.js";
import { changeTheme } from "./theme.js";
import type { Dispatch, SetStateAction } from "react";
import type { AppWindow, WMAction } from "../context/types.js";
import type { DesktopApp } from "../apps/registry.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";
import type { HistoryRecord } from "../components/desktop/apps/Terminal.js";
import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput.js";
import clear from "./clear.js";
import cat from "./cat.js";
import { parseCommand } from "../filesystem/utils.js";

export const commands = {
  launch: open,
  close,
  chthm: changeTheme,
  cd: cd,
  ls: ls,
  clear: clear,
  cat: cat,
};
export interface State {
  isDark: boolean;
  toggleTheme: () => void;
  dispatch: Dispatch<WMAction>;
  windows: AppWindow[];
  focusedWindowID: string;
  apps: Record<string, DesktopApp>;
  path: string;
  setPath: React.Dispatch<SetStateAction<string>>;
  setHistory: React.Dispatch<SetStateAction<HistoryRecord[]>>;
}

export interface CommandPayloadArgs {
  args: string[];
  state: State;
}

export interface CommandStateArg {
  state: State;
}

export const executeCommand = (line: string, state: State): CommandOutput => {
  const [name, args] = parseCommand(line);
  const command = commands[name];

  if (!command) {
    return {
      type: "errorMessage",
      content: `${name}: command not found`,
    };
  }
  return command({ args, state });
};
