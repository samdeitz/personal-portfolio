import { desktopApps as apps } from "../../apps/registry.js";
import { useApp } from "../../context/AppContext.js";
import AppCard from "./AppCard";
import DesktopPagination from "./DesktopPagination";
import { usePageSlide } from "../../hooks/usePageSlide";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";
import { useState } from "react";
import { useGridCapacity } from "../../hooks/useGridCapacity";

// Glob images for apps
const appImages = import.meta.glob<string>("@/assets/icons/appIcons/*", {
  eager: true,
  import: "default",
});

// change keys to be by image name rather than path
const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url]),
);

const allApps = Object.values(apps);

const Desktop = () => {
  const { dispatch } = useApp(); // Get function to open an app
  const breakpoint = useBreakpoint();
  const columns = { sm: 2, md: 3, lg: 4, xl: 5 }[breakpoint];
  const { gridRef, cardRef, pageSize } = useGridCapacity(columns);
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(allApps.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);
  usePageSlide(gridRef, currentPage);

  const desktopApps = allApps.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize,
  );
  const gridClasses =
    "grid items-start justify-items-center gap-x-4 gap-y-6 sm:gap-8";

  return (
    <section
      className="relative z-98 flex min-h-0 w-full flex-1 flex-col px-4 sm:px-8"
      aria-label="Desktop apps"
    >
      <div className="relative min-h-0 flex-1 justify-self-center">
        <div
          ref={gridRef}
          className={`${gridClasses} h-full content-start`}
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {desktopApps.map((app, index) => (
            <AppCard
              key={app.id}
              ref={index === 0 ? cardRef : undefined}
              apptitle={app.title}
              imgsrc={imagesByName[app.desktopImageSrc]}
              onClick={() =>
                dispatch({
                  type: "CREATE_WINDOW",
                  payload: { windowID: app.id },
                })
              }
            />
          ))}
        </div>
      </div>
      <DesktopPagination
        page={currentPage}
        pageCount={pageCount}
        onPageChange={setPage}
      />
    </section>
  );
};

export default Desktop;
