'use client';

type OurTeamIntroProps = {
  title?: string;
  description: string;
  sectionId?: string;
  className?: string;
};

export default function OurTeamIntro({
  title = 'Our Team',
  description,
  sectionId,
  className = '',
}: OurTeamIntroProps) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-[140px] bg-black text-white pb-16 ${className}`}
    >
      <div className="max-w-4xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          {title}
        </h2>

        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
