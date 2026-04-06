// import NavbarNew from "@/app/components/navbar/navbar";

// export default function CookiePolicy() {
//   return (
//      <>
//         <NavbarNew />
//         <div className="bg-black text-white h-screen pt-30"
//         >Cookie policy</div>
//         </>
//   )
// }


import NavbarNew from "@/app/components/navbar/navbar"
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb"

export default function CookiePolicy() {
    return (
        <>
            <NavbarNew />

            <main className="bg-black text-white min-h-screen pt-30 pb-20 px-4 sm:px-6 lg:px-12">
                <Breadcrumb
                    overrideSegments={[
                        { name: "Cookie Policy", href: "/cookie-policy" },
                    ]}
                />
                <div className="mt-10">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Metasys Cookie & Tracking Policy
                    </h1>

                    <p className="text-gray-300 text-md sm:text-lg mb-10 max-w-3xl">
                        This Cookie & Tracking Policy explains how Metasys uses cookies and
                        similar technologies to recognize you when you visit our website or
                        use our services.
                    </p>

                    {/* Section */}
                    <section className="space-y-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Our Use of Tracking Technologies
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-md sm:text-lg max-w-3xl">
                            Metasys and its partners may collect information about users over
                            time and across different platforms when you interact with our
                            website or services. To do this, we and our authorized third-party
                            partners use various tracking technologies, which may include
                            browser cookies, web beacons, local storage, and similar tools.
                        </p>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            These technologies help us understand how users engage with our
                            services and improve your overall experience.
                        </p>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            In this policy, “we,” “us,” and “our” refers to Metasys, our
                            affiliates, and our trusted vendors who deploy these tracking
                            technologies on our sites or applications.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="space-y-6 mt-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Purpose of Tracking Technologies
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-md sm:text-lg">
                            We use tracking technologies for several reasons, including:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-300 max-w-3xl text-md sm:text-lg">
                            <li>
                                Delivering more relevant advertising, sometimes referred to as
                                interest-based or behavioral advertising, which can serve content
                                or promotions based on your activity across websites and
                                platforms.
                            </li>
                            <li>Recognizing returning or new visitors to our website.</li>
                            <li>Understanding and improving how our platforms are used.</li>
                            <li>
                                Integrating with social media platforms to provide enhanced
                                features or sharing options.
                            </li>
                            <li>
                                Analyzing trends and user interests to better serve our customers
                                and site visitors.
                            </li>
                        </ul>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            Behavioral advertising may include displaying ads about Metasys
                            products or services, or those from third parties, on websites,
                            apps, or emails.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="space-y-6 mt-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            How Information is Collected
                        </h2>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            We and our partners may gather information through your
                            interactions with our services, including:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-300 text-md sm:text-lg">
                            <li>Pages you visit and actions you take on our website or app.</li>
                            <li>Your geographic location, device type, or browser information.</li>
                            <li>
                                Activity across other websites and platforms in cases where
                                third-party partners are involved.
                            </li>
                        </ul>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            Some partners may link this information with other data they have,
                            such as account or contact information, to provide more
                            personalized experiences.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="space-y-6 mt-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Managing Tracking Technologies
                        </h2>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            Most browsers allow you to manage or block cookies. The specific
                            steps depend on your browser and the type of cookie. Please refer
                            to your browser’s instructions for managing cookies.
                        </p>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            For local storage technologies such as Flash cookies, different
                            controls may apply.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <p className="text-gray-200 text-sm leading-relaxed max-w-3xl text-md sm:text-lg">
                                <strong>Important:</strong> If you block certain cookies, some
                                features on our website or applications may not work properly.
                                Not all tracking technologies can be disabled by browser
                                settings.
                            </p>
                        </div>
                    </section>

                    {/* Section */}
                    <section className="space-y-6 mt-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                            Do Not Track Signals
                        </h2>

                        <p className="text-gray-300 leading-relaxed max-w-3xl text-md sm:text-lg">
                            Some browsers provide “Do Not Track” options to signal that you do
                            not want to be tracked online. Currently, Metasys does not respond
                            to these signals.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}
