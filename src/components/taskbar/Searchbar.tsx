import { LuSearch } from "react-icons/lu";
import { useSearch } from "../../context/SearchContext";
import HBox from "../ui/HBox";

const Searchbar = () => {
  const { isSearching, toggleSearching, handleSearchQuery } = useSearch();

  // handles if a user clicks the search icon
  const handleSearchClick = () => {
    toggleSearching(); // toggle searching
    handleSearchQuery(""); // reset search value
  };

  return (
    <HBox
      className={`
                gap-1
                items-center
                origin-left
                flex-shrink-0
                ${isSearching ? "bg-theme-inverse-surface" : "bg-theme-surface"}
        `}
    >
      {/* icon to toggle searching */}
      <button type="button" onClick={handleSearchClick} className="taskbar-item" aria-label="Search apps" aria-expanded={isSearching}>
        <LuSearch className="size-7" aria-hidden="true" />
      </button>
    </HBox>
  );
};

export default Searchbar;
