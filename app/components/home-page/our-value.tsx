"use client";

import { useState } from "react";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

export default function OurValue() {
    const { locale } = useLocale();
    const { t } = useClientTranslation(locale);
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="w-full bg-black text-white pb-16 lg:pt-5 px-6 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto text-center mt-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        {t("value.valueTitle")}
                    </h1>

                    <p className="mt-6 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                        {t("value.valueDescription")}
                    </p>

                    <button
                        onClick={() => setOpen(true)}
                        className="mt-6 text-sm font-semibold hover:opacity-80 flex items-center justify-center mx-auto gap-3 transition"
                    >
                        <span>{t("value.seeReport")}</span>
                        <span className="text-white text-2xl">›</span>
                    </button>
                </div>
            </section>

            {open && (
                <div
                    className="fixed thin-scrollbar inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
                                   bg-neutral-900/95 backdrop-blur-xl
                                   text-white rounded-2xl
                                   p-6 md:p-10 shadow-2xl border border-white/10"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-5 right-5 text-xl opacity-70 hover:opacity-100 transition"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <div className="mb-10 text-center">
                            <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                                Our Value
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Creating Value From Every Angle
                            </h2>
                            <div className="mt-4 h-px w-24 bg-white/20 mx-auto" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <ValueCard
                                label="For Our Clients"
                                title="Your Reinvention Partner"
                                text="We are more than a service provider; we are your dedicated partner in transformation. In a world of constant change, we provide the expertise and foresight needed to not just navigate complexity, but to master it."
                            />

                            <ValueCard
                                label="Through Experience"
                                title="Building Trust by Design"
                                text="Trust isn’t a byproduct of our work; it’s the foundation of it. We design every interaction to be seamless, intuitive, and reliable—building confidence through transparency and consistency."
                            />

                            <ValueCard
                                label="With Our Talent"
                                title="Human Ingenuity Meets Technology"
                                text="Our strength lies at the intersection of brilliant people and powerful technology—turning tools into human-centered solutions that solve real problems and drive success."
                            />

                            <ValueCard
                                label="For Our World"
                                title="Sustainable by Nature"
                                text="Sustainability is integral to our business. By embedding responsible practices into our operations, we deliver growth that is principled, resilient, and enduring."
                            />

                            <ValueCard
                                full
                                label="From Our Foundation"
                                title="Financially Strong, Mission-Focused"
                                text="Our financial strength fuels long-term investment in talent, innovation, and client success—allowing us to focus not on the next quarter, but the next decade."
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function ValueCard({
    title,
    label,
    text,
    full,
}: {
    title: string;
    label: string;
    text: string;
    full?: boolean;
}) {
    return (
        <div
            className={`rounded-xl border border-white/10 bg-white/5 p-6
                        hover:bg-white/10 transition
                        ${full ? "md:col-span-2" : ""}`}
        >
            <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
                {label}
            </p>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
                {title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/85">
                {text}
            </p>
        </div>
    );
}
