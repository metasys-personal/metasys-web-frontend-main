import Link from "next/link";

type GlobalInsightBannerProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  align?: "left" | "center"; // NEW prop
  className?: string;
};

export default function GlobalInsightBanner({
  title,
  description,
  buttonLabel,
  buttonHref,
  align = "left", // default is left
  className = "",
}: GlobalInsightBannerProps) {
  // Tailwind class based on alignment
  const textAlignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section
      className={`relative bg-[#0f0f12] text-white
        px-4 md:px-8 lg:px-16
        py-16 md:py-20
        ${className}
      `}
    >
      <div className={`max-w-4xl space-y-4 ${textAlignClass}`}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {title}
        </h2>

        <p className={`text-sm md:text-lg lg:text-xl md:max-w-2xl text-white/80 leading-relaxed ${align === 'left' ? 'text-start' : "mx-auto"}`}>
          {description}
        </p>

        {buttonLabel && buttonHref && (
          <div className="pt-4">
            <Link
              href={buttonHref}
              className="inline-flex items-center
                border border-white/30
                px-6 py-3
                text-sm md:text-base
                font-medium
                hover:bg-white hover:text-black
                transition"
            >
              {buttonLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
