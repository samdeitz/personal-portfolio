import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

const HBox = (props: ComponentPropsWithRef<"div">) => {
  return (
    <div
      {...props}
      className={twMerge(` flex flex-row flex-wrap`, props.className)}
    />
  );
};

export default HBox;
