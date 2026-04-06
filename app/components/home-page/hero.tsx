import { useLocale } from "@/app/providers/locale-context";
import dynamic from "next/dynamic";
import Image from "next/image";

const HeroMotion = dynamic(() => import("./hero-motion"), {
  ssr: false,
});

export default function Hero() {
  const { locale } = useLocale();
  return (
    <section className="relative h-full md:h-auto lg:h-[80vh] w-full bg-black overflow-hidden cursor-pointer">
      {/* Poster / fallback image (SSR) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-poster.jpg"
          alt="Hero Poster"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <HeroMotion locale={locale} />
    </section>
  );
}