import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[40vh] min-h-[300px]">
      
      {/* Background Image */}
      <Image
        src="/images/what-we-banner.png"
        alt="banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-3xl px-6 lg:px-16 text-white">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            See reinvention in action
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            Everyday, we assist our clients to reinvent their businesses to reach their full potential. Using technology, data, AI, and new ways of working. We push boundaries and shape the future of industries.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition"
          >
            View client stories
          </Link>
        </div>
      </div>
    </section>
  );
}
