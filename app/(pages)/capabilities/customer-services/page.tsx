import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";
import { cloudPartners } from "@/app/lib/partners.data";

import {
  GlobalHeader,
  GlobalHero,
  GlobalStats,
  GlobalReinvent,
  GlobalTrendingRail,
  GlobalCareer,
  PartnersWithText,
} from "@/app/components/common";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Customer Services | Metasys",
  description: "Transform your customer experience with tailored strategies, technology, and insights that drive satisfaction and loyalty.",
  image: "/images/customer-services.svg",
});


export default function CustomerServiceView() {
  return (
    <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
      <GlobalHeader
        title="Customer service"
        navItems={[
          { label: "What we do", id: "what-we-do" },
          { label: "What's trending", id: "whats-trending" },
          { label: "Careers", id: "careers" },
        ]}
      />

      <GlobalHero
        id="what-we-do"
        title="Turn customer service and proactive support into a growth engine"
        description="Impersonal and inconsistent interactions are leaving organizations scrambling to understand how to better support customers. Delivering seamless, data-driven experiences that feel intuitive, not reactive, is vital to unlocking new opportunities for growth."
        imageSrc="/images/customer.webp"
      />

      <GlobalStats
        title="Customer service now"
        stats={[
          {
            value: "50%",
            description:
              "of B2C customers and 37% of B2B are more likely to purchase more from companies that listen and incorporate service feedback",
          },
          {
            value: "70%",
            description:
              "of service agents want to see more aspects of customer interactions automated",
          },
          {
            value: "70%",
            description:
              "of customers spend more with companies that offer fluid, personalized and seamless experiences",
          },
          {
            value: "67%",
            description:
              "of CSO/CCOs say their organizations will invest in gen AI for the customer service area",
          },
        ]}
      />


      <GlobalReinvent
        title="Deliver a support experience that can’t be ignored and create long-lasting value for the people who matter most to your business."
        items={reinventCloudItems}
        limit={8}
        className="lg:my-[120px]"
      />

      <GlobalTrendingRail
        sectionId="whats-trending"
        title="What’s trending in customer service?"
        items={trendingCloudItems}
        className="mt-24"
      />

      <PartnersWithText
        title="Partners in change"
        partners={cloudPartners}
        sectionId="partners"
      />

      <GlobalCareer
        title="Customer service careers"
        description="Create magical moments, delightful interactions, inspiring experiences and redefine how people interact with products and services.​"
        mobileImage="/images/cloudbg.jpg"
        desktopImage="/images/cloudbg.jpg"
        sectionId="careers"
        className="mt-8"
        links={[
          {
            label: "See open roles",
            href: "/careers/search",
          },
        ]}
      />
    </div>
  );
}