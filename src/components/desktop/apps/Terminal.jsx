import VBox from "@/components/ui/VBox";
import HBox from "@/components/ui/HBox";

const Terminal = () => {
  return (
    <VBox className="bg-terminal w-full h-full rounded-lg z-200 p-4">
      <HBox className="gap-4">
        <p>home/samdeitz/ &gt;</p>
        <input
          autoFocus
          className="outline-none caret-terminal caret-tlight"
          type="text"
        />
      </HBox>
    </VBox>
  );
};

export default Terminal;
