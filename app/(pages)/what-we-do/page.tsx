import { GlobalHeader, GlobalHero, GlobalPartners } from '@/app/components/common'
import NavbarNew from '@/app/components/navbar/navbar'
import React from 'react'
import CapabilitiesSection from './_components/capabilities-section'
import { SecuritypartnersData } from '@/app/lib/partners.data'
import Banner from './_components/banner'
import { CAPABILITIES, INDUSTRIES } from '@/app/lib/what-we-do'

export default function WhatWeDo() {
    return (
        <>
            <NavbarNew />
            <div className='bg-black text-white py-30'>
                <GlobalHeader
                    title="Who we are"
                    navItems={[
                        { label: "Capabilities", id: "capabilities" },
                        { label: "Partners", id: "partners" },
                        { label: "Industries", id: "industries" },
                        // { label: "Case studies", id: "case-studies" },
                    ]}
                />


                <GlobalHero
                    id="capabilities"
                    title="Reinvent what your business could be"
                    description="Our wide range of capabilities, ecosystems partnerships and unmatched industry expertise can help your business become the next best version of itself."
                    imageSrc="/images/what-we-do.png"
                />
                {/* <CapabilitiesSection /> */}
                <CapabilitiesSection items={CAPABILITIES} />

                <GlobalPartners
                    sectionId='partners'
                    partners={SecuritypartnersData}
                    title="250 partnerships to help accelerate change"
                    ctaLabel="View all partners"
                    ctaHref="/insights/strategy/extras"
                />
            
                <CapabilitiesSection
                    items={INDUSTRIES}
                    sectionLabel="Industries"
                    sectionTitle="The industry to help you reinvent"
                />

                <Banner />
            </div>
        </>
    )
}