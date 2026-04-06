'use client'

import { useState } from 'react'
import Image from 'next/image'

type Capability = {
  key: string
  label: string
  title: string
  description: string
  image: string
}

type CapabilitiesSectionProps = {
  items: Capability[]
  sectionLabel?: string // dynamic
  sectionTitle?: string // dynamic
}

export default function CapabilitiesSection({
  items,
  sectionLabel = 'Capabilities', // default fallback
  sectionTitle = 'The capabilities to help you reinvent',
}: CapabilitiesSectionProps) {
  const [active, setActive] = useState(items[0])

  return (
    <section className="bg-black text-white pt-30 pb-20 md:px-10">
      <div>
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            {sectionLabel.toUpperCase()}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            {sectionTitle}
          </h2>
        </div>

        {/* HORIZONTAL CAPABILITIES LIST */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-700 pb-6">
          {items.map((item) => (
            <button
              key={item.key}
              onMouseEnter={() => setActive(item)}
              className={`text-sm md:text-base lg:text-xl transition-colors ${
                active.key === item.key
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
              {active.title}
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl text-lg">
              {active.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={active.image}
              alt={active.title}
              width={420}
              height={320}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
