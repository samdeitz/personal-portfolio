import { useTheme } from "@/context/ThemeContext.js";
import HBox from "@/components/ui/HBox.jsx";


const Searchbar = ({ searchImg, searchValue, setSearchValue, isSearching, setIsSearching }) => {
    const { isDark } = useTheme(); // theme context

    // handle user typing
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }


    // handles if a user clicks the search icon
    const handleSearchClick = () => {
        setIsSearching(!isSearching); // toggle searching
        setSearchValue(""); // reset search value
    }

    return (
        <HBox className={`
                gap-1 
                items-center 
                origin-left
                transition-all
                duration-500
                ease-in-out
                flex-shrink-0
                ${isSearching ? (!isDark ? "bg-dark-grey" : "bg-light-grey") : (!isDark ? "bg-light-grey" : "bg-dark-grey")}
        `}>

            {/* icon to toggle searching */}
            <div  onClick={handleSearchClick} className="taskbar-item">
                <img src={searchImg} alt="search" />
            </div>

            {/* searchbar, conditionally rendered by isSearching */}
            <input 
                className={`
                    transition-all
                    duration-500
                    ease-in-out
                    origin-left
                    ${isSearching ? "max-w-46.25 min-w-46.25 sm:min-w-50 md:min-w-60 lg:min-w-80 opacity-100" : "min-w-0 max-w-0 opacity-0"} 
                    ${isDark ? "text-[#151515]" : "text-[#d9d9d9]"}
                    h-12
                    rounded-sm 
                    pl-2 
                    outline-none
                `} 
                placeholder="Search" type="text" value={searchValue} onChange={handleInputChange}
            />
        </HBox>
    )
}


export default Searchbar;

