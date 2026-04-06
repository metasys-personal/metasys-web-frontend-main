import Link from "next/link";

type GlobalGradientBannerProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  align?: "center" | "left"; // NEW
  className?: string;
};

export default function GlobalGradientBanner({
  title,
  description,
  buttonLabel,
  buttonHref,
  align = "center", // default stays as current behavior
  className = "",
}: GlobalGradientBannerProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`
        relative flex items-center
        ${isCenter ? "justify-center text-center" : "justify-start text-left"}
        text-white
        min-h-[40vh]
        px-4 md:px-8 lg:px-16
        ${className}
      `}
      style={{
        background:
          "linear-gradient(135deg, #0b0616 0%, #1a0f33 35%, #2a145a 65%, #1a0f33 100%)",
      }}
    >
      <div
        className={`
          max-w-3xl space-y-6
          ${isCenter ? "mx-auto" : ""}
        `}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h2>

        <p className="text-sm md:text-xl text-white/85 leading-relaxed">
          {description}
        </p>

        {buttonLabel && buttonHref && (
          <div className={`pt-4 ${isCenter ? "flex justify-center" : ""}`}>
            <Link
              href={buttonHref}
              className="
                inline-flex items-center
                border border-white/30
                px-6 py-3
                text-sm md:text-base
                font-medium
                hover:bg-white hover:text-black
                transition
              "
            >
              {buttonLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
