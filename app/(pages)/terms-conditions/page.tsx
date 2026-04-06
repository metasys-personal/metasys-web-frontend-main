// import NavbarNew from "@/app/components/navbar/navbar";

// export default function TermsAndCondition() {
//     return (
//         <>
//             <NavbarNew />
//             <div className="bg-black text-white h-screen pt-30"
//             >TermsAndCondition</div>
//         </>
//     )
// }


import NavbarNew from "@/app/components/navbar/navbar"
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb"

export default function TermsAndCondition() {
    return (
        <>
            <NavbarNew />

            <main className="bg-black text-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12">
                <Breadcrumb
                    overrideSegments={[
                        { name: "Terms & Condition", href: "/terms-conditions" },
                    ]}
                />
                <div className="mt-10">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Metasys Terms and Conditions
                    </h1>

                    <p className="text-gray-300 text-md sm:text-lg mb-10 max-w-3xl">
                        <strong>Effective Date:</strong> January 23, 2026
                        <br />
                        By accessing and using this website, you agree to be bound by the
                        following Terms and Conditions. If you do not agree, please do not
                        use this site.
                    </p>

                    {/* Section 1 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            1. Ownership and Intellectual Property
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Unless otherwise stated, all content on this site — including
                            text, images, graphics, audio, video, software, and layout — is
                            owned by Metasys or its licensors and is protected by applicable
                            intellectual property laws.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Nothing on this site grants any license or right to use any
                            Metasys or third-party intellectual property without prior
                            written permission.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            You may download and print one copy of materials for personal,
                            non-commercial use only, provided all copyright notices remain
                            intact.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            2. Use of Information
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Information on this site is provided free of charge for general
                            informational purposes only and does not constitute professional,
                            legal, technical, or business advice.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            This site may contain links to third-party websites. Metasys does
                            not control or endorse these sites and is not responsible for
                            their content or services.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            3. Disclaimer of Warranties and Limitation of Liability
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            This site and its content are provided “as is” and “as available”
                            without warranties of any kind, whether express or implied.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            To the fullest extent permitted by law, Metasys shall not be
                            liable for any damages arising from your use of, or inability to
                            use, this site or its content.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            4. Governing Law and Jurisdiction
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            These Terms and Conditions are governed by the laws of the State
                            of New Jersey, without regard to conflict of law principles.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Metasys reserves the right to determine the jurisdiction and
                            venue for any legal proceedings related to these Terms.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            5. Compliance With Laws
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            You are responsible for complying with all applicable local,
                            state, national, and international laws when accessing or using
                            this site.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            6. Information You Submit
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Any information submitted through this site is considered
                            non-confidential unless expressly stated otherwise.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Metasys recommends that you do not submit sensitive or proprietary
                            information through this website.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            7. Unauthorized Idea Submissions
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Metasys does not accept unsolicited ideas or proposals outside of
                            established business relationships.
                        </p>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Any submitted ideas may be used by Metasys without obligation or
                            compensation.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            8. Changes to These Terms
                        </h2>

                        <p className="text-gray-300 text-md sm:text-lg max-w-3xl">
                            Metasys may update these Terms and Conditions at any time without
                            prior notice. Continued use of this site constitutes acceptance
                            of the updated terms.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}
