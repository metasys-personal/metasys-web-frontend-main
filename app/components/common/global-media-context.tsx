import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type GlobalMediaContentProps = {
  title?: string
  headerTitle?: string;
  description: string
  image: string
  ctaLabel?: string
  ctaHref?: string
  reverse?: boolean
  className?: string
}

export default function GlobalMediaContent({
  title,
  description,
  image,
  ctaLabel = "Read more",
  ctaHref,
  reverse = false,
  className = "",
  headerTitle
}: GlobalMediaContentProps) {
  return (
    <section className={`bg-black text-white py-16 ${className}`}>
      <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-8 px-3">{headerTitle}</h2>
      <div
        className={`px-4 grid gap-10 items-center
        grid-cols-1 lg:grid-cols-2
        ${reverse ? "lg:flex-row-reverse" : ""}`}
      >
        {/* IMAGE */}
        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[380px]">
          <Image
            src={image}
            alt={title ?? headerTitle ?? "Media content image"}
            fill
            className="object-cover rounded-lg"
            priority
          />

        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            {title}
          </h3>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
            {description}
          </p>

          {ctaHref && (
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white w-fit"
            >
              <span className="border-b border-white/40 group-hover:border-white transition">
                {ctaLabel}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
