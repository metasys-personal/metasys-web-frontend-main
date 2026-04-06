import Image from "next/image";
import Link from "next/link";

type GlobalFeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export function GlobalFeatureCard({
  icon,
  title,
  description,
  href,
}: GlobalFeatureCardProps) {
  return (
    <div className="flex h-full flex-col gap-5 text-white">
      {/* Icon */}
      <div className="relative h-12 w-12">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-2xl font-semibold leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-lg leading-relaxed text-neutral-300">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
