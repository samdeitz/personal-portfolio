import VBox from "./ui/VBox";

const Header = () => {
  return (
    <VBox
      className="
        p-4
      pb-5
        pt-13
        shrink-0
        text-center
        z-98
        "
    >
      <h1 className="text-lg sm:text-2xl leading-tight font-normal text-theme-secondary">
        Hello,
      </h1>
      <h1 className="text-5xl leading-tight font-bold -mt-2 title-gradient">
        I'm Sam Deitz
      </h1>
      <h1 className="text-lg sm:text-2xl leading-tight font-normal text-theme-secondary">
        A Front End Developer
      </h1>
    </VBox>
  );
};

export default Header;
