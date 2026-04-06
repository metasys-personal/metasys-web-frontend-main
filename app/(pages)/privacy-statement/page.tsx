// import NavbarNew from "@/app/components/navbar/navbar";

// export default function PrivacyStatement() {
//   return (
//     <>
//     <NavbarNew />
//     <div>PrivacyStatement</div>
//     </>
//   )
// }


import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function PrivacyStatement() {
    return (
        <>
            <NavbarNew />

            <main className="bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12">
                <Breadcrumb
                    overrideSegments={[
                        { name: "Privacy Statement", href: "/privacy-statement" },
                    ]}
                />
                <div className="mt-10">

                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Metasys Privacy Statement
                        </h1>
                        <p className="text-sm text-gray-400">
                            Effective date: January 23, 2026
                        </p>
                    </header>

                    {/* Intro */}
                    <section className="space-y-4 text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                        <p>
                            This Privacy Statement explains how Metasys, Inc. and its affiliates
                            (“Metasys,” “we,” “us,” or “our”) collect, use, disclose, and protect
                            personal data in connection with our products, services, applications,
                            platforms, tools, websites, and other interactions globally.
                        </p>

                        <p>
                            Unless stated otherwise, this Privacy Statement applies to all
                            externally facing Metasys services where Metasys acts as a data
                            controller (or local equivalent).
                        </p>

                        <p>
                            If you have special accessibility needs, please consult our
                            Accessibility Statement for guidance.
                        </p>
                    </section>

                    {/* Section helper */}
                    {[
                        {
                            title: "1. How we protect your personal data",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Metasys takes your privacy seriously and protects personal data
                                        in accordance with applicable laws and internal data protection
                                        policies.
                                    </p>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We implement appropriate technical and organizational measures
                                        to protect personal data against unauthorized access, loss,
                                        alteration, or disclosure.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "2. Categories of personal data we collect",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We collect personal data from employees, candidates, clients,
                                        suppliers, business contacts, shareholders, and website users.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-md sm:text-lg">
                                        <li>Personal identifiers (name, contact details, date of birth)</li>
                                        <li>Account and authentication information</li>
                                        <li>Professional and employment information</li>
                                        <li>Transactional and billing data</li>
                                        <li>Usage, device, and log data</li>
                                        <li>Communications and marketing preferences</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "3. How we use personal data",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We use personal data to operate, improve, and secure our
                                        services, communicate with users, and deliver reliable
                                        experiences.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-md sm:text-lg">
                                        <li>Service delivery and account management</li>
                                        <li>Communications and collaboration tools</li>
                                        <li>AI-supported features and accessibility tools</li>
                                        <li>Analytics, research, and product improvement</li>
                                        <li>Security, fraud prevention, and compliance</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "4. Legal bases for processing",
                            body: (
                                <>
                                    <ul className="list-disc pl-6 space-y-2 text-md sm:text-lg">
                                        <li>Your consent (where required)</li>
                                        <li>Performance of a contract</li>
                                        <li>Compliance with legal obligations</li>
                                        <li>Legitimate business interests</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "5. Sharing personal data",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We may share personal data with affiliates, service providers,
                                        professional advisors, regulators, or during business
                                        transactions, always with appropriate safeguards in place.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "6. AI-supported communications",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Metasys may use AI to support communication, collaboration,
                                        summaries, translations, and accessibility features.
                                    </p>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Personal data will not be used to train AI models unless
                                        explicitly disclosed or anonymized.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "7. International data transfers",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        As a global organization, personal data may be transferred
                                        internationally using approved safeguards such as standard
                                        contractual clauses.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "8. Data retention",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Personal data is retained only as long as necessary to fulfill
                                        legal, contractual, and operational requirements, after which
                                        it is securely deleted or anonymized.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "9. Your privacy rights",
                            body: (
                                <>
                                    <ul className="list-disc pl-6 space-y-2 text-md sm:text-lg">
                                        <li>Access and correction</li>
                                        <li>Deletion and restriction</li>
                                        <li>Objection to processing</li>
                                        <li>Data portability</li>
                                        <li>Withdrawal of consent</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "10. Cookies and tracking technologies",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We use cookies to improve functionality, security, analytics,
                                        and user experience. You may manage cookies via browser
                                        settings.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "11. Security",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We use encryption, access controls, monitoring, and employee
                                        training to safeguard personal data. While no system is
                                        completely secure, we continuously improve our defenses.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "12. Children’s privacy",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Metasys services are not intended for children under 13, and we
                                        do not knowingly collect personal data from children.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "13. Third-party services",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        Our services may link to third-party platforms. We are not
                                        responsible for their privacy practices and encourage you to
                                        review their policies.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "14. Changes to this Privacy Statement",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        We may update this statement periodically. Updates will be
                                        posted on this page with a revised effective date.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "15. Contacting Metasys",
                            body: (
                                <>
                                    <p className="max-w-3xl text-md sm:text-lg">
                                        If you have questions or requests regarding this Privacy
                                        Statement or your personal data, please contact us through the
                                        communication channels provided in our services.
                                    </p>
                                </>
                            ),
                        },
                    ].map((section, idx) => (
                        <section key={idx} className="mt-12 space-y-4">
                            <h2 className="text-2xl font-semibold text-white">
                                {section.title}
                            </h2>
                            <div className="text-gray-300 leading-relaxed space-y-3">
                                {section.body}
                            </div>
                        </section>
                    ))}

                </div>
            </main>
        </>
    );
}
