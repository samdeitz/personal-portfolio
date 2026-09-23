import React, {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import apps from "../apps/registry";
import type { AppShape } from "../content/types";
import { useKeyDown } from "../hooks/useKeyDown";

const SearchContext = createContext<{
  isSearching: boolean;
  toggleSearching: () => void;
  searchValue: any;
  handleSearchQuery: (newQuery: string) => void;
  focusInput: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}>(null);

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ----- SEARCHING -----
  const allApps = Object.values(apps);
  const [searchValue, setSearchValue] = useState<[string, AppShape[]]>([
    "",
    allApps,
  ]); // search value state
  const [isSearching, setIsSearching] = useState(false); // user is searching
  const inputRef = useRef(null);

  const handleSearchQuery = (newQuery: string) => {
    setSearchValue((prev) => {
      const filtered = allApps.filter((app) =>
        app.title.toLocaleLowerCase().includes(newQuery.toLocaleLowerCase()),
      );
      return [newQuery, filtered];
    });
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useKeyDown((event) => {
    if (event.ctrlKey && event.code === "Space") {
      event.preventDefault();
      if (!event.repeat) setIsSearching((prev) => !prev);
    }
  });

  const toggleSearching = () => {
    setIsSearching((prev) => !prev);
  };

  return (
    <SearchContext.Provider
      value={{
        focusInput,
        inputRef,
        searchValue,
        handleSearchQuery,
        isSearching,
        toggleSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx)
    console.error(
      "Search context must be used only when wrapped by its provider",
    );
  return ctx;
};
