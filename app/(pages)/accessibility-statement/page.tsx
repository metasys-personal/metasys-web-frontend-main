// import NavbarNew from "@/app/components/navbar/navbar";

// export default function Accessibility() {
//     return (
//         <>
//             <NavbarNew />
//             <div className="bg-black text-white h-screen pt-30"
//             >Accessibility</div>
//         </>
//     )
// }


import NavbarNew from "@/app/components/navbar/navbar"
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb"

export default function Accessibility() {
    return (
        <>
            <NavbarNew />

            <main className="bg-black text-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12">
                <Breadcrumb
                    overrideSegments={[
                        { name: "Accessibility", href: "/accessibility-statement" },
                    ]}
                />
                <div className="mt-10">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Accessibility Statement
                    </h1>

                    <p className="text-gray-300 text-md sm:text-lg mb-10 max-w-3xl">
                        We believe organizations play a vital role in ensuring technology
                        empowers everyone, including people with disabilities. Creating
                        accessible digital experiences is essential to building inclusive
                        environments where all users can thrive.
                    </p>

                    {/* Commitment */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Our Commitment to Accessibility
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Metasys designs and maintains its website with accessibility in
                            mind, following the World Wide Web Consortium’s Web Content
                            Accessibility Guidelines (WCAG) 2.2.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Our goal is to meet Level AA conformance, which represents the
                            recommended standard for full website accessibility.
                        </p>
                    </section>

                    {/* What We Do */}
                    <section className="space-y-6 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            How We Support Accessibility
                        </h2>

                        <ul className="space-y-3 text-gray-300 text-md sm:text-lg max-w-3xl list-disc list-inside">
                            <li>
                                Designing site layouts with clear color contrast, logical
                                heading structures, and consistent, configurable components.
                            </li>
                            <li>
                                Developing pages that work across multiple input and output
                                methods, including keyboards and screen readers.
                            </li>
                            <li>
                                Providing text alternatives for non-text content, such as
                                alternative text for images and transcripts for videos.
                            </li>
                        </ul>
                    </section>

                    {/* Ongoing Evaluation */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Ongoing Evaluation
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            We continuously evaluate our website using automated tools,
                            external assessments, and internal testing to ensure accessibility
                            standards are maintained as technology evolves.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            While we strive for full Level AA conformance, some pages may
                            occasionally contain accessibility issues.
                        </p>
                    </section>

                    {/* Feedback */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Feedback & Assistance
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            If you encounter any accessibility barriers or have suggestions
                            for improvement, we encourage you to contact us at{" "}
                            <a
                                href="mailto:info@metasysglobal.com"
                                className="text-[#1B7D5C] hover:underline font-medium"
                            >
                                info@metasysglobal.com
                            </a>
                            .
                        </p>
                    </section>

                    {/* Beyond Digital */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Accessibility Beyond Digital
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Accessibility at Metasys extends beyond our digital platforms.
                            It is embedded in our technology, content, and workplace
                            experiences.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Upon request, we can provide information about the physical
                            accessibility of office locations relevant to specific roles.
                            Our goal is to remove barriers — visible and invisible — so
                            everyone can succeed.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            We are committed to empowering people with disabilities and
                            fostering a culture of equality and inclusion every day.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}
