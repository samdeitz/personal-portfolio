export const changeTheme = ({ args, state }) => {
  let output = "";
  state.toggleTheme();
  output = `Theme changed to ${args[0]}.`;
  if (args.length > 1) output.concat(" Cannot change to multiple themes.");
};
