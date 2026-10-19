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
  openApp: (appID: string) => void;
}

// context in a separate file ensures that HMR will be updated correctly
// and not recreate context
export const AppContext = createContext<AppContextValue | null>(null);
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("App requires AppProvider");
  return context;
};
