import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/app/lib/service-partners.data";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

type PageProps = {
    params: { slug: string } | Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
    const resolvedParams = await params;

    const service = services.find(
        (item) => item.slug === resolvedParams.slug
    );

    if (!service) {
        return notFound();
    }

    return (
        <>
            <NavbarNew />
            <section className="bg-black min-h-screen px-6 pb-20 lg:px-16 pt-30">
                <Breadcrumb
                    overrideSegments={[
                        { name: "Research reports", href: "/" },
                    ]}
                />
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {service.title}
                    </h1>

                    <div className="relative w-full h-80 mb-10">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>
        </>
    );
}
