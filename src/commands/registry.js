import { open } from "./open.js";
import { close } from "./close.js";
import { changeTheme } from "./theme.js";

export const commands = {
  open,
  close,
  chthm: changeTheme,
};

export const executeCommand = (line, state) => {
  const [name, ...args] = line.trim().split(/\s+/);
  const command = commands[name];
  if (command === null) {
    console.log(`${name} is not a command.`);
  }
  command({ args, state });
};
