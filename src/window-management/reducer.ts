import apps from "@/appInfo.js";
import { insertNode, removeWindow, getNewFocusID } from "./tree";

export const wmReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_WINDOW": {
      if (state.layoutTree[action.payload.windowID] != null) return state;
      if (
        state.layoutMode === "mobile" &&
        Object.values(state.layoutTree).length >= 1
      )
        return state;
      let appType = Object.values(apps).find(
        (appInfo) => appInfo.id === action.payload.windowID,
      ).title;

      let newWindow = {
        id: crypto.randomUUID(),
        type: appType,
        title: appType,
        layout: null,
        minimized: false,
        zIndex: state.windows.length != 0 ? state.windows[0].zIndex + 1 : 100,
      };

      // Add new windows
      let newWindows = [...state.windows, newWindow];
      const result = insertNode({
        tree: state.layoutTree,
        rootID: state.rootID,
        parentID: state.focusedWindowID ?? "root",
        window: newWindow,
      });

      // Update state
      return {
        ...state,
        windows: newWindows,
        layoutTree: result.tree,
        focusedWindowID: newWindow.id,
        rootID: result.rootID,
      };
    }
    case "RESTORE_WINDOW": {
      if (state.layoutTree[action.payload.windowID] != null) return state;
      if (
        state.layoutMode === "mobile" &&
        Object.values(state.layoutTree).length >= 1
      )
        return state;
      let windowToRestore = {};
      const newWindows = state.windows.map((window) => {
        if (window.id == action.payload.windowID) {
          windowToRestore = window;
          return {
            ...window,
            minimized: false,
          };
        } else return window;
      });
      const result = insertNode({
        tree: state.layoutTree,
        rootID: state.rootID,
        parentID: state.focusedWindowID,
        window: windowToRestore,
      });
      return {
        ...state,
        windows: newWindows,
        layoutTree: result.tree,
        rootID: result.rootID,
        focusedWindowID: windowToRestore.id,
      };
    }
    case "MINIMIZE_WINDOW": {
      // update context
      const newWindows = state.windows.map((window) =>
        window.id === action.payload.windowID
          ? { ...window, minimized: true }
          : window,
      );
      let newFocus = getNewFocusID(state.layoutTree, action.payload.windowID);
      let result = removeWindow({
        tree: state.layoutTree,
        rootID: state.rootID,
        windowID: action.payload.windowID,
      });
      return {
        ...state,
        windows: newWindows,
        layoutTree: result.tree,
        rootID: result.rootID,
        focusedWindowID: newFocus,
      };
    }
    case "CLOSE_WINDOW": {
      const newWindows = state.windows.filter(
        (window) => window.id != action.payload.windowID,
      );
      const newFocus = getNewFocusID(state.layoutTree, action.payload.windowID);
      const result = removeWindow({
        tree: state.layoutTree,
        rootID: state.rootID,
        windowID: action.payload.windowID,
      });
      return {
        ...state,
        windows: newWindows,
        layoutTree: result.tree,
        rootID: result.rootID,
        focusedWindowID: newFocus,
      };
    }
    case "FOCUS_CHANGE": {
      return {
        ...state,
        focusedWindowID: action.payload.windowID,
      };
    }
    case "SET_LAYOUT_MODE": {
      return {
        ...state,
        layoutMode: action.payload.mode,
      };
    }
    case "BREAK_TREE": {
      if (Object.keys(state.layoutTree).length > 1) {
        let newTree = {};
        let newRoot = null;
        let newWindows = [];

        let ID = state.layoutTree[state.rootID].children[0];
        let node = state.layoutTree[ID];
        newTree = {
          [ID]: {
            ...node,
            parent: null,
          },
        };
        newRoot = ID;

        newWindows = state.windows.map((window) => {
          if (window.id != newRoot) {
            return {
              ...window,
              minimized: true,
            };
          } else return window;
        });

        console.log(newTree);
        return {
          ...state,
          windows: newWindows,
          layoutTree: newTree,
          rootID: newRoot,
          focusedWindowID: newRoot,
        };
      } else return state;
    }
    default: {
      console.log(`No dispatch for ${action.type}`);
      return state;
    }
  }
};
