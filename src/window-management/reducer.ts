import apps from "../apps/registry";
import type { AppWindow, WMAction, WMState } from "../context/types";
import { insertNode, removeWindow, getNewFocusID } from "./tree";
import { createNodeID } from "./createNodeID";


// Shared by launch and restore so desktop, search, and terminal use the same lifecycle.
function showWindow(state: WMState, window: AppWindow): WMState {
  if (state.layoutMode === "mobile") {
    // Keep other windows registered (and their terminal sessions alive), but show one app.
    return { ...state,
      windows: state.windows.map((item) => ({ ...item, minimized: item.id !== window.id })),
      rootID: window.id, focusedWindowID: window.id,
      layoutTree: { [window.id]: { id: window.id, nodeType: "window", parent: null, windowType: window.type } },
    };
  }
  if (state.layoutTree[window.id]) return { ...state, focusedWindowID: window.id };
  const result = insertNode({ tree: state.layoutTree, rootID: state.rootID,
    parentID: state.focusedWindowID ?? state.rootID ?? "root", window });
  return { ...state, windows: state.windows.map((item) => item.id === window.id ? { ...item, minimized: false } : item),
    layoutTree: result.tree, rootID: result.rootID, focusedWindowID: window.id };
}

export const wmReducer = (state: WMState, action: WMAction): WMState => {
  switch (action.type) {
    case "CREATE_WINDOW": {
      const app = apps[action.payload.windowID];
      if (!Object.hasOwn(apps, action.payload.windowID) || !app) return state;
      // Terminals can have independent sessions; other apps reuse their window.
      const existing = app.id === "terminal" ? undefined : state.windows.find((window) => window.type === app.id);
      if (existing) return showWindow(state, existing);
      const window: AppWindow = {
        id: createNodeID(), type: app.id, title: app.title,
        layout: null, minimized: false, zIndex: state.windows.length + 100,
      };
      return showWindow({ ...state, windows: [...state.windows, window] }, window);
    }
    case "RESTORE_WINDOW": {
      const window = state.windows.find((item) => item.id === action.payload.windowID);
      return window ? showWindow(state, window) : state;
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
      const newFocus = state.layoutTree[action.payload.windowID]
        ? getNewFocusID(state.layoutTree, action.payload.windowID) : state.focusedWindowID;
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

        let rootNode = state.layoutTree[state.rootID as string];
        if (rootNode.nodeType !== "container") return state; // narrows type, plus a real safety check
        let ID = rootNode.children[0];
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
      console.log(`No dispatch for ${(action as WMAction).type}`);
      return state;
    }
  }
};
