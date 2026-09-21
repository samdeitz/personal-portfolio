export type NodeID = string;
export type AppID = string;

export interface AppWindow {
  id: NodeID;
  type: string;
  title: string;
  layout: null;
  minimized: boolean;
  zIndex: number;
}

export interface WindowNode {
  id: NodeID;
  nodeType: "window";
  parent: NodeID | null;
  windowType: string;
}

export interface ContainerNode {
  id: NodeID;
  nodeType: "container";
  parent: NodeID | null;
  children: [NodeID, NodeID];
}

export type LayoutNode = WindowNode | ContainerNode;
export type LayoutTree = Record<NodeID, LayoutNode>;
export type LayoutMode = "mobile" | "desktop";

export interface WMState {
  windows: AppWindow[];
  layoutTree: LayoutTree;
  rootID: NodeID | null;
  focusedWindowID: NodeID | null;
  layoutMode: LayoutMode;
}

export type WMAction =
  | { type: "CREATE_WINDOW"; payload: { windowID: AppID } }
  | { type: "RESTORE_WINDOW"; payload: { windowID: NodeID } }
  | { type: "MINIMIZE_WINDOW"; payload: { windowID: NodeID } }
  | { type: "CLOSE_WINDOW"; payload: { windowID: NodeID } }
  | { type: "FOCUS_CHANGE"; payload: { windowID: NodeID | null } }
  | { type: "SET_LAYOUT_MODE"; payload: { mode: LayoutMode } }
  | { type: "BREAK_TREE"; payload: Record<string, never> };
