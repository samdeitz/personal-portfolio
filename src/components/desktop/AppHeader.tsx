import { LuMinus, LuX } from "react-icons/lu";

import { useApp } from "../../context/AppContext";
import HBox from "../ui/HBox";

const AppHeader = ({ title, notMobile, appID }) => {
  const { dispatch } = useApp();

  return (
    <HBox
      className="bg-theme-surface shrink-0 justify-between rounded-t-lg"
    >
      {/* App Title */}
      <h1 className="self-center pl-2 font-bold">{title}</h1>

      {/* Close/Minimize buttons */}
      <HBox>
        {notMobile && (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "MINIMIZE_WINDOW",
                payload: {
                  windowID: appID,
                },
              })
            }
            aria-label="Minimize window"
            className="hover-over size-10 p-2 rounded-lg cursor-pointer"
          >
            <LuMinus className="size-6" aria-hidden="true" />
          </button>
        )}
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "CLOSE_WINDOW",
              payload: {
                windowID: appID,
              },
            })
          }
          className="size-10 p-2 hover-over rounded-lg cursor-pointer"
          aria-label="Close window"
        >
          <LuX className="size-6" aria-hidden="true" />
        </button>
      </HBox>
    </HBox>
  );
};

export default AppHeader;
