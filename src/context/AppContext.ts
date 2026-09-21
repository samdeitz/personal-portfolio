import { createContext, useContext } from "react";
import type { Dispatch } from "react";
import type { AppWindow, WMAction, NodeID } from "./types";
import type { Layouts } from "../window-management/layout";

interface AppContextValue {
  layoutGrid: { cols: number; rows: number; gap: number };
  windows: AppWindow[];
  focusedWindowID: NodeID | null;
  dispatch: Dispatch<WMAction>;
  layouts: Layouts;
}

// context in a separate file ensures that HMR will be updated correctly
// and not recreate context
export const AppContext = createContext<AppContextValue>(undefined);
export const useApp = () => useContext(AppContext);
