"use client";

import Image from "next/image";

const awards = [
  { id: 1, src: "/images/award1.png", alt: "Forbes Award", title: "Forbes Award 2023" },
  { id: 2, src: "/images/award2.jpg", alt: "Innovations Award", title: "Metasys Excellence 2023" },
  { id: 3, src: "/images/award3.jpg", alt: "Google Award", title: "Google Partner Award" },
  { id: 4, src: "/images/award4.jpg", alt: "Microsoft Award", title: "Microsoft Innovation Award" },
];

export default function AwardsCarousel() {
  return (
    <section className="w-full py-12 mb-10 bg-black text-white overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
        Global Recognitions <br /> and Awards
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6 md:gap-8">
          {[...awards, ...awards].map((award, index) => (
            <div key={index} className="shrink-0 w-40 md:w-48 lg:w-56 flex flex-col items-center text-center">
              <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] relative mb-2">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-sm md:text-base lg:text-lg font-semibold">{award.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
