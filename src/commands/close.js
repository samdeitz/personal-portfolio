export const close = ({ state }) => {
  state.dispatch({
    type: "CLOSE_WINDOW",
    payload: {
      windowID: state.focusedWindowID,
    },
  });
};
