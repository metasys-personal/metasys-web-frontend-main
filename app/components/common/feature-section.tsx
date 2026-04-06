import { GlobalFeatureCard } from "./feature-card";


type Feature = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

type GlobalFeatureSectionProps = {
  features: Feature[];
  className?: string;
};

export function GlobalFeatureSection({
  features,
  className = "",
}: GlobalFeatureSectionProps) {
  return (
    <section className={`bg-black px-4 py-16 ${className}`}>
      <div
        className="
          mx-auto max-w-7xl
          grid gap-16
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {features.map((feature) => (
          <GlobalFeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}
