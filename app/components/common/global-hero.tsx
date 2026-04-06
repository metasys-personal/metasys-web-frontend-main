"use client";

import Image from "next/image";

type GlobalHeroProps = {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function GlobalHero({
  id,
  title,
  description,
  imageSrc,
  imageAlt = "hero image",
}: GlobalHeroProps) {
  return (
    <section
      id={id}
      className="bg-black text-white scroll-mt-[140px]"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-20 px-2 md:px-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="pt-[125px] md:pt-[115px] lg:pt-16"
        />

        <div className="max-w-xl mt-8">
          <h1 className="font-bold text-4xl mb-10 md:text-5xl lg:max-w-xl">
            {title}
          </h1>
          <p className="text-xl md:text-xl text-white">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
