import { twMerge } from "tailwind-merge";

const HBox = (props) => {
  return (
    <div
      {...props}
      className={twMerge(` flex flex-row flex-wrap`, props.className)}
    />
  );
};

export default HBox;
