import {
  createContext,
  useContext,
  useState,
  type SetStateAction,
} from "react";
import { filesystem, type FileNode } from "../filesystem";
import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";

export type HistoryRecord = {
  input: string;
  output: CommandOutput;
};

interface FileSystemValue {
  filesystem: FileNode;
  setFileSystem: React.Dispatch<SetStateAction<FileNode>>;

  history: HistoryRecord[];
  setHistory: React.Dispatch<SetStateAction<HistoryRecord[]>>;

  historyIndex: number;
  setHistoryIndex: React.Dispatch<SetStateAction<number>>;
}

interface FileSystemProps {
  children: React.ReactNode;
}

export const FileSystemContext = createContext<FileSystemValue>(null);

export const FileSystemProvider = ({ children }: FileSystemProps) => {
  const [fileSystem, setFileSystem] = useState(filesystem);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  console.log(historyIndex);
  const value = {
    filesystem: fileSystem,
    setFileSystem,
    history,
    setHistory,
    historyIndex,
    setHistoryIndex,
  };

  return (
    <FileSystemContext.Provider value={value}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = () => {
  const ctx = useContext(FileSystemContext);
  if (!ctx) throw new Error("Cannot use context outside of provider");
  return ctx;
};
