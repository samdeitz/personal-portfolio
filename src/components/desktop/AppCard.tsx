import VBox from "../ui/VBox";
import type { ComponentPropsWithRef } from "react";

type AppCardProps = ComponentPropsWithRef<"div"> & {
  apptitle: string;
  imgsrc: string;
};

const AppCard = ({
  apptitle,
  imgsrc,
  className = "",
  ...props
}: AppCardProps) => {

  return (
    <VBox
      {...props}
      className={`
        relative h-fit w-[clamp(6rem,20vw,8.75rem)] max-w-full shrink-0
        transition-[transform,opacity] transform-gpu duration-1000
        project-app hover:animate-shake cursor-pointer
        ${className}
      `}
    >
      <img
        className="w-full aspect-square object-contain rounded-t-lg bg-theme-card-image"
        src={imgsrc}
        alt={apptitle}
      />

      <h3
        title={apptitle}
        className="flex h-11 shrink-0 w-full items-center justify-center px-1 py-1.5 text-center text-[clamp(0.75rem,1.5vw,0.875rem)] leading-tight font-bold wrap-break-word text-tlight rounded-b-lg bg-theme-card-label"
      >
        <span className="line-clamp-2">{apptitle}</span>
      </h3>
    </VBox>
  );
};

export default AppCard;
