import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../context/ThemeContext";
import HBox from "../ui/HBox";

const Searchbar = ({ searchImg }) => {
  const { isDark } = useTheme(); // theme context
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
                ${isSearching ? (!isDark ? "bg-dark-grey" : "bg-light-grey") : !isDark ? "bg-light-grey" : "bg-dark-grey"}
        `}
    >
      {/* icon to toggle searching */}
      <div onClick={handleSearchClick} className="taskbar-item">
        <img src={searchImg} alt="search" />
      </div>
    </HBox>
  );
};

export default Searchbar;
