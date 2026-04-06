"use client"

import Image from "next/image"

type WhyWorkWithUsSectionProps = {
    title?: string
    description: string
    image: string
    imageAlt?: string
    className?: string
}

export default function WhyWorkWithUsSection({
    title,
    description,
    image,
    imageAlt = "Why work with us",
    className = "",
}: WhyWorkWithUsSectionProps) {
    return (
        <section
            className={`bg-black text-white px-4 sm:px-6 lg:px-16 py-16 ${className}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-end">
                {/* Text */}
                <div>
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-16">
                        {title}
                    </h2>

                    {/* Accent Line */}
                    <span className="block h-px w-20 sm:w-[100px] bg-white mb-6" />

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>


                {/* Image */}
                <div className="relative w-full h-[260px] sm:h-80 lg:h-[380px] overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
