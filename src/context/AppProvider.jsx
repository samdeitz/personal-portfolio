import { useReducer, useMemo, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { wmReducer } from "../window-management/reducer.js";
import { AppContext } from "./AppContext.js";
import { calculateLayout } from "../window-management/layout.js";

const layoutGrid = {
  cols: 60,
  rows: 40,
  gap: 4,
};

export const SPLIT_BREAKPOINT = 700;

export const AppProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: SPLIT_BREAKPOINT });
  const [wmState, dispatch] = useReducer(wmReducer, {
    windows: [],
    layoutTree: {},
    rootID: null,
    focusedWindowID: null,
  });

  useEffect(() => {
    if (isMobile) {
      let timer = setTimeout(() => {
        dispatch({
          type: "BREAK_TREE",
          payload: {},
        });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    let layoutTimer = setTimeout(() => {
      dispatch({
        type: "SET_LAYOUT_MODE",
        payload: {
          mode: isMobile ? "mobile" : "desktop",
        },
      });
    }, 800);

    return () => clearTimeout(layoutTimer);
  }, [isMobile]);

  useEffect(() => {
    console.log(wmState.windows);
  }, [wmState.windows]);
  useEffect(() => {
    console.log(wmState.layoutTree);
  }, [wmState.layoutTree]);
  useEffect(() => {
    console.log(wmState.rootID);
  }, [wmState.rootID]);
  useEffect(() => {
    console.log(wmState.focusedWindowID);
  }, [wmState.focusedWindowID]);

  const layouts = useMemo(() => {
    return calculateLayout(
      wmState.layoutTree,
      wmState.rootID,
      {},
      {
        colStart: 1,
        rowStart: 1,
        colEnd: layoutGrid.cols,
        rowEnd: layoutGrid.rows,
      },
    );
  }, [wmState.layoutTree]);

  // implement useMemo to avoid updating all states when one state changes
  const appValue = useMemo(
    () => ({
      layoutGrid,
      windows: wmState.windows,
      focusedWindowID: wmState.focusedWindowID,
      dispatch,
      layouts,
    }),
    [wmState, layouts],
  );

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
