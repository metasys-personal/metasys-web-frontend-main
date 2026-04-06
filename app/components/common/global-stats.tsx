"use client";

type StatItem = {
  value: string;
  description: string;
};

type StatsSectionProps = {
  title?: string;
  stats: StatItem[];
  className?: string;
};

export default function GlobalStats({
  title,
  stats,
  className = "",
}: StatsSectionProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className={`relative px-2 md:px-6 lg:px-8 mt-20 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {stats.map((stat, index) => (
          <div key={index}>
            <span className="block w-6 h-[3px] bg-white mb-6" />

            <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              {stat.value}
            </h3>

            <p className="text-white leading-relaxed max-w-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
