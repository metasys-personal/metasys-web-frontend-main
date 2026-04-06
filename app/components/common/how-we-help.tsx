import { HowWeHelpAccordionItem } from "./accordion-item";


type AccordionData = {
  title: string;
  content: string;
};

type HowWeHelpAccordionProps = {
  data: AccordionData[];
};

export default function HowWeHelpAccordion({
  data,
}: HowWeHelpAccordionProps) {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:py-10">
      <div className="">
        <h2 className="mb-4 md:mb-8 text-2xl sm:text-xl md:text-4xl lg:text-5xl font-semibold">
          How we help
        </h2>

        <div>
          {data.map((item, index) => (
            <HowWeHelpAccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}