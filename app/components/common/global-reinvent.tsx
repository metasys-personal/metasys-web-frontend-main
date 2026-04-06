import { ReinventImageCard } from "./reinvent-image-card";
import { ReinventTextCard } from "./reinvent-text-card";

export type ReinventItem =
  | {
      type: "text";
      subtitle: string;
      title: string;
      hoverTitle: string;
    }
  | {
      type: "image";
      image: string;
      alt?: string;
    };


type GlobalReinventProps = {
  title: string;
  items: ReinventItem[];

  /** how many cards to show */
  limit?: number;

  /** styling */
  rowHeight?: string;
  className?: string;
};

export default function GlobalReinvent({
  title,
  items,
  limit,
  rowHeight = "auto-rows-[280px]",
  className = "",
}: GlobalReinventProps) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <section className={`bg-black text-white ${className}`}>
      <div className="px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl md:max-w-3xl font-semibold mb-8 mt-16 md:mb-10 md:mt-16 lg:mt-0">
          {title}
        </h2>

        <div
          className={`
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            gap-8
            ${rowHeight}
          `}
        >
          {visibleItems.map((item, index) => (
            <div key={index} className="h-full w-full">
              {item.type === "text" ? (
                <ReinventTextCard
                  subtitle={item.subtitle}
                  title={item.title}
                  hoverTitle={item.hoverTitle}
                />
              ) : (
                <ReinventImageCard
                  image={item.image}
                  alt={item.alt}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
