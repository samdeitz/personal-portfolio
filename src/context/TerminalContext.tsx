import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useApp } from "./AppContext";
import {
  createSession,
  sessionReducer,
  type SessionAction,
  type TerminalSession,
} from "../terminal/session";

// Key by window ID so multiple terminals never share a directory or recall cursor.
type SessionStore = Record<string, TerminalSession>;
const TerminalContext = createContext<{
  sessions: SessionStore;
  update: (id: string, action: SessionAction) => void;
} | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const { windows } = useApp();
  const [sessions, setSessions] = useState<SessionStore>({});

  // Minimized windows remain in windows; closed windows release their sessions.
  useEffect(() => {
    setSessions((previous) => {
      const ids = new Set(windows.map((window) => window.id));
      if (Object.keys(previous).every((id) => ids.has(id))) return previous;
      return Object.fromEntries(
        Object.entries(previous).filter(([id]) => ids.has(id)),
      );
    });
  }, [windows]);

  // Register a session on its first action. Functional updates keep queued actions
  // working from the latest session rather than a render-time snapshot.
  const update = (id: string, action: SessionAction) => {
    setSessions((previous) => ({
      ...previous,
      [id]: sessionReducer(previous[id] ?? createSession(), action),
    }));
  };

  return (
    <TerminalContext.Provider value={{ sessions, update }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalSession(id: string) {
  const context = useContext(TerminalContext);
  if (!context) throw new Error("Terminal requires TerminalProvider");
  return {
    // An untouched terminal gets defaults without writing state during render.
    // update() stores the session when the user first interacts with it.
    session: context.sessions[id] ?? createSession(),
    update: (action: SessionAction) => context.update(id, action),
  };
}
