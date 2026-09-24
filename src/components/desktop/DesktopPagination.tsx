import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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
  return (
    <nav
      aria-label="Desktop pages"
      className={`flex h-14 shrink-0 items-center justify-center gap-4 ${pageCount === 1 ? "invisible" : ""}`}
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
