export const open = ({ args, state }) => {
  if (args.length === 0) return null;

  for (const arg of args) {
    switch (arg.toLowerCase()) {
      case "terminal": {
        state.dispatch({
          type: "CREATE_WINDOW",
          payload: {
            windowID: state.apps["Terminal"].id,
          },
        });
        break;
      }
      default:
        return {
          state,
          message: "No command exists",
        };
    }
  }
};
