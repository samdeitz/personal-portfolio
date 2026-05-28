import HBox from "@/components/ui/HBox.jsx";
import { useTheme } from "@/context/ThemeContext.js";

import closeBlack from "@/assets/icons/close-black.svg";
import closeWhite from "@/assets/icons/close-white.svg";

import minimizeWhite from "@/assets/icons/minimize-white.svg";
import minimizeBlack from "@/assets/icons/minimize-black.svg";
import { useApp } from "../../context/AppContext";

const AppHeader = ({ title, notMobile, appID }) => {
  const { isDark } = useTheme();
  const { dispatch } = useApp();

  return (
    <HBox
      className={`
                ${isDark ? "bg-dark-grey" : "bg-light-grey"} 
                justify-between
                rounded-t-lg
            `}
    >
      {/* App Title */}
      <h1 className="self-center pl-2 font-bold">{title}</h1>

      {/* Close/Minimize buttons */}
      <HBox>
        {notMobile && (
          <img
            onClick={() =>
              dispatch({
                type: "MINIMIZE_WINDOW",
                payload: {
                  windowID: appID,
                },
              })
            }
            src={isDark ? minimizeWhite : minimizeBlack}
            className="hover-over w-10 h-fit p-2 rounded-lg"
          />
        )}
        <img
          onClick={() =>
            dispatch({
              type: "CLOSE_WINDOW",
              payload: {
                windowID: appID,
              },
            })
          }
          className="w-10 p-2 h-fit hover-over rounded-lg"
          src={isDark ? closeWhite : closeBlack}
        />
      </HBox>
    </HBox>
  );
};

export default AppHeader;
