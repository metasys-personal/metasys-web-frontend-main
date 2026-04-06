"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

const slides = [
  {
    id: 1,
    image: "/images/sales-comm.jpg",
    title: "Sales & Commerce",
    description:
      `Transforming Consumer Industries in the Age of AI (World Economic Forum,
2025) WEF/Accenture white paper on AI-driven transformation across consumer goods, retail
and agribusiness`,
    href: "https://www.weforum.org/stories/2025/04/ai-transformation-consumer-industries-wef-report/",
  },
  {
    id: 2,
    image: "/images/cloud-data.jpg",
    title: "Advancing Cloud and Data Infrastructure Markets",
    description:
      `Strategic Directions for Low- and Middle-
       Income Countries (World Bank, 2024) A World Bank report on cloud and data        infrastructure in
       emerging economies`,
    href: "https://thedocs.worldbank.org/en/doc/61714f214ed04bcd6e9623ad0e215897-0400012021/related/9781464820656-ch6.pdf",
  },
  {
    id: 3,
    image: "/images/cyber-sec-new.jpg",
    title: "Cybersecurity",
    description:
      `Building a Skilled Cyber Security Workforce in Five Countries (OECD, 2023) An
       OECD report on growing demand for cybersecurity professionals`,
    href: "https://www.oecd.org/en/topics/employment.html",
  },
  {
    id: 4,
    image: "/images/artificial.jpg",
    title: "Data & AI",
    description:
      `Open Data for AI: What Now? (UNESCO, 2023) UNESCO guidelines on open data to fuel
       AI development`,
    href: "https://www.unesco.org/en/articles/open-data-ai-what-now",
  },
  {
    id: 5,
    image: "/images/eco-partner.jpg",
    title: "Ecosystem Partners",
    description:
      `Digital Development Partnership Annual Review 2021: On the Path to Recovery
(World Bank, 2022) World Bank review of global digital partnerships (Data and Digital Economy)`,
    href: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/778371636967305332",
  },
  {
    id: 6,
    image: "/images/emerging-techh.jpg",
    title: "Emerging Technology",
    description:
      `Emerging technologies – Managing their development for the greater good (ITU,
2023) ITU Annual Report section on AI, IoT, quantum, etc.`,
    href: "https://www.itu.int/highlights-report-activities/2022-2023/sustainable-networks/emerging-technologies/",
  },
  {
    id: 7,
    image: "/images/fin-risk.jpg",
    title: "Finance & Risk",
    description:
      ` Artificial Intelligence in Financial Services (World Economic Forum, 2025) WEF/
Accenture white paper on AI’s impact and risks in banking and finance`,
    href: "https://initiatives.weforum.org/ai-in-financial-services/home",
  },
  {
    id: 8,
    image: "/images/infrastructure.jpg",
    title: "Infrastructure",
    description:
      ` Technology and Innovation Report 2023 (UNCTAD, 2023) UNCTAD report on
frontier and green technologies transforming development`,
    href: "https://unctad.org/publication/technology-and-innovation-report-2023",
  },
  {
    id: 9,
    image: "/images/learning-new.jpg",
    title: "Learning",
    description:
      ` Artificial Intelligence and Education: Guidance for Policymakers (UNESCO, 2021)
UNESCO policy guide on AI in education`,
    href: "https://www.unesco.org/en/digital-education/artificial-intelligence",
  },
  {
    id: 10,
    image: "/images/met-verse.jpg",
    title: "Metaverse",
    description:
      `Demystifying the Consumer Metaverse (World Economic Forum, 2023) WEF report on
      consumer use-cases and guidelines for the metaverse`,
    href: "https://www.weforum.org/publications/demystifying-the-consumer-metaverse/",
  },
  {
    id: 11,
    image: "/images/sup-chain.jpg",
    title: "Supply Chain",
    description:
      `Global Supply Resilience Initiative – Pilot Report (UNICEF/WEF, 2024) Case study
       using real-time data (AI) to strengthen supply chains in humanitarian settings`,
    href: "https://www.weforum.org/stories/2025/01/ai-supply-chains/",
  },
  {
    id: 12,
    image: "/images/talent-org-mgt.jpg",
    title: "Talent & Organization",
    description:
      `The Future of Jobs Report 2023 (World Economic Forum, 2023) WEF
    study on how AI and tech trends will reshape jobs and skills`,
    href: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/",
  },
  {
    id: 13,
    image: "/images/tech-transf.jpg",
    title: "Tech Transformation",
    description:
      ` United Nations E-Government Survey 2022 (UN DESA, 2022) UN DESA
       survey on digital government and e-services as part of digital transformation`,
    href: "https://desapublications.un.org/UN%20E-Government%20Survey%202022.pdf",
  },
  {
    id: 14,
    image: "/images/banking-tech.jpg",
    title: "Banking",
    description:
      `Global Financial Stability Report 2022: Navigating a High-Uncertainty Environment (IMF,
     2022) IMF analysis of financial sector risks (including fintech trends).`,
    href: "https://www.imf.org/en/publications",
  },
  {
    id: 15,
    image: "/images/capital-mkts.jpg",
    title: "Capital Markets",
    description:
      ` The Future of Financial Infrastructure (World Economic Forum, 2020) WEF
      report on digital platforms and assets in capital markets. `,
    href: "https://www3.weforum.org/docs/WEF_The_future_of_financial_infrastructure.pdf",
  },
  {
    id: 16,
    image: "/images/comm-media.jpg",
    title: "Communications & Media",
    description:
      `UNESCO Report on AI and Culture (UNESCO, 2022)
      UNESCO report on AI’s impact on media and culture `,
    href: "https://www.unesco.de/assets/dokumente/Deutsche_UNESCO-Kommission/02_Publikationen/DUK_Broschuere_KI_und_Kultur_EN_web_02.pdf",
  },
  {
    id: 17,
    image: "/images/energy-ind.jpg",
    title: "Energy",
    description:
      `Digital Progress and Trends Report 2023 (World Bank, 2023) World Bank report tracking
    global digitalization (including smart grids, IoT in energy).`,
    href: "https://openknowledge.worldbank.org/entities/publication/79f0494b-0a62-52fb-9e75-b1133374268e",
  },
  {
    id: 18,
    image: "/images/health-ind.jpg",
    title: "Health",
    description:
      `Global Strategy on Digital Health 2020–2025 (World Health Organization, 2021) WHO
      strategy for AI and digital technologies in health`,
    href: "https://iris.who.int/items/bd23c952-ac42-4c82-b05d-d86e3228fe5a",
  },
  {
    id: 19,
    image: "/images/industriall.jpg",
    title: "Industrial",
    description:
      `UNIDO Annual Report 2021 (UNIDO, 2021) – Highlights UNIDO’s work on Industry 4.0
         and smart manufacturing.`,
    href: "https://www.unido.org/sites/default/files/unido-publications/2023-02/UNIDO_AR2021_EN.pdf",
  },
  {
    id: 20,
    image: "/images/business-insurance.jpg",
    title: "Insurance",
    description:
      `Insurance Industry 4.0 (Swiss Re Institute, 2022) Swiss Re think-piece on AI and
      digitalization in insurance (open summary).`,
    href: "https://www.swissre.com/risk-knowledge/advancing-societal-benefits-digitalisation/evolution-of-ai-in-insurance-industry.html",
  },
  {
    id: 21,
    image: "/images/life-sciencess.jpg",
    title: "Life Sciences",
    description:
      `AI in Global Health (UNICEF/WHO, 2022) Joint report on AI applications in
        genomics and biomedicine.`,
    href: "https://www.who.int/initiatives/global-initiative-on-ai-for-health",
  },
  {
    id: 22,
    image: "/images/natural-res.jpg",
    title: "Natural Resources",
    description:
      `AI for Climate and Conservation (UNEP, 2022) UNEP report on digital
        technologies for sustainable resource management. `,
    href: "https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about",
  },
  {
    id: 23,
    image: "/images/retail.jpg",
    title: "Retail",
    description:
      `Future of Retail 2022 (World Economic Forum, 2022) WEF report on omnichannel
shopping, AI in retail.`,
    href: "https://www.weforum.org/projects/future-of-retail/",
  },
  {
    id: 24,
    image: "/images/travelss.jpg",
    title: "Travels",
    description:
      `Digital Transformation in Tourism (UN World Tourism Organization, 2021) UNWTO report
       on ICT and AI in travel/tourism.`,
    href: "https://www.untourism.int/digital-transformation",
  },
  {
    id: 25,
    image: "/images/us-federa.jpg",
    title: "US Federal",
    description:
      ` Blueprint for an AI Bill of Rights (US White House OSTP, 2022) US guidance on AI in
    government (open government source). `,
    href: "https://data.aclum.org/storage/2025/01/OSTP_www_whitehouse_gov_ostp_ai-bill-of-rights.pdf",
  },
];

export default function AccentureHighlightsSlider() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <div className="relative py-10 px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={800}
          slidesPerView={1.08}
          spaceBetween={20}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          pagination={{
            type: "fraction",
            el: ".custom-pagination", // <- use class selector string instead of ref
          }}
          className="w-full"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col lg:flex-row items-end gap-10">
                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[45%]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 sm:h-[380px] lg:h-[450px] object-cover rounded"
                    width={500}
                    height={400}
                  />
                </div>

                {/* RIGHT TEXT */}
                <div className="w-full lg:w-[45%] space-y-6 mb-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <a href={item.href} target="_blank"
                    rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:opacity-80 transition">
                    <span className="underline underline-offset-4">{t('slider.readMore')}</span>
                    <span className="bg-transparent px-2 py-1 rounded">→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM CONTROLS */}
        <div className="flex justify-end mt-4 items-center gap-2">
          <button aria-label="Next page" className="prev-button bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition">
            ←
          </button>
          <div className="custom-pagination text-gray-300 text-sm px-2 flex items-center"></div>
          <button aria-label="Next page" className="next-button bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
}