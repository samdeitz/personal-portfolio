import { useMediaQuery } from "react-responsive";

// Minimum viewport widths in pixels. Keep these in ascending order.
// Anything below md is sm.
const breakpoints = {
  md: 520,
  lg: 700,
  xl: 900,
};

export type Breakpoint = "sm" | "md" | "lg" | "xl";

/** Returns the current viewport size category and updates on resize. */
export function useBreakpoint(): Breakpoint {
  const isMd = useMediaQuery({ minWidth: breakpoints.md });
  const isLg = useMediaQuery({ minWidth: breakpoints.lg });
  const isXl = useMediaQuery({ minWidth: breakpoints.xl });

  if (isXl) return "xl";
  if (isLg) return "lg";
  if (isMd) return "md";
  return "sm";
}
