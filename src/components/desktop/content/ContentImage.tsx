import type { StoryFigure } from "../../../content/story";

export default function ContentImage({
  image,
  hero = false,
}: {
  image: StoryFigure;
  hero?: boolean;
}) {
  return (
    <figure
      className={`m-0 min-w-0 ${hero ? "flex min-h-16 flex-1 flex-col" : ""}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading={hero ? "eager" : "lazy"}
        className={`block w-full rounded-lg bg-theme-surface object-cover ${hero ? "aspect-auto h-0 min-h-0 flex-1" : "aspect-[4/3]"}`}
      />
      <figcaption
        className={`text-[.67rem] leading-[1.5] text-theme-secondary ${hero ? "mt-1 flex-none" : "mt-2.5"}`}
      >
        {image.placeholder && (
          <span className="mr-2 inline-block font-[650]">Preview image</span>
        )}
        {image.caption}
      </figcaption>
    </figure>
  );
}
