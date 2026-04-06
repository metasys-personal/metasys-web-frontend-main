"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"


export type UpcomingEvent = {
  image: string
  title: string
  description: string
  link?: string
}

type UpcomingEventsSliderProps = {
  events: UpcomingEvent[]
  className?: string
}

export default function UpcomingEventsSlider({
  events,
  className = "",
}: UpcomingEventsSliderProps) {
  const [current, setCurrent] = useState(0)
  const total = events.length

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  const event = events[current]

  return (
    <section
      className={`bg-black text-white px-4 sm:px-6 lg:px-16 py-16 ${className}`}
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl max-w-xl font-semibold mb-10">
        Come see us at these upcoming events
      </h2>

      {/* Slider Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative w-full h-60 sm:h-80 lg:h-[380px] rounded-xl overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-end h-full">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {event.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Learn More */}
          {event.link && (
            <a
              href={event.link}
              className="inline-flex items-center gap-2 mt-6 text-white hover:text-gray-400 transition-colors font-medium"
            >
              Learn more
              <ArrowRight size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Controls */}
      {total > 1 && (
        <div className="flex items-center justify-end gap-4 mt-10 text-sm">
          <button
          aria-label="Previous slide"
            type="button"
            onClick={prevSlide}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>

          <span className="text-gray-400">
            {current + 1} / {total}
          </span>

          <button
          aria-label="Next slide"
            type="button"
            onClick={nextSlide}
            className="text-white hover:bg-white/10"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
