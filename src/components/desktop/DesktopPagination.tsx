import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { twMerge } from "tailwind-merge";

interface DesktopPaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const buttonClass =
  "h-11 w-11 cursor-pointer flex items-center justify-center rounded-lg hover-over disabled:cursor-default disabled:opacity-30";

export default function DesktopPagination({
  page,
  pageCount,
  onPageChange,
}: DesktopPaginationProps) {
  const { isDark } = useTheme();
  return (
    <nav
      aria-label="Desktop pages"
      className={twMerge(
        `flex h-14 shrink-0 items-center justify-center gap-4 `,
        pageCount === 1 && "invisible",
        !isDark && "text-theme-inverse-foreground lg:text-inherit",
      )}
    >
      <button
        type="button"
        aria-label="Previous apps"
        className={buttonClass}
        disabled={page === 0}
        onClick={() => onPageChange(page - 1)}
      >
        <FaArrowLeft />
      </button>
      <span aria-live="polite" className="text-sm tabular-nums">
        {page + 1} / {pageCount}
      </span>
      <button
        type="button"
        aria-label="Next apps"
        className={buttonClass}
        disabled={page === pageCount - 1}
        onClick={() => onPageChange(page + 1)}
      >
        <FaArrowRight />
      </button>
    </nav>
  );
}
