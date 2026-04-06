// 'use client';

// import Link from "next/link";
// import NewsletterSubscribe from "../common/newsletter-subscribe";
// import { useClientTranslation } from "@/app/hooks/useTranslations";
// import { useLocale } from "@/app/providers/locale-context";

// export default function StandardFooter() {
//   const { locale } = useLocale(); // ✅ SOURCE OF TRUTH
//   const { t } = useClientTranslation(locale);

//   const quickLinks = [
//     { label: t('footer.links.home'), href: "/" },
//     { label: t('footer.links.services'), href: "/what-we-think" },
//     { label: t('footer.links.careers'), href: "/careers/apply" },
//     { label: t('footer.links.about'), href: "/who-we-are" },
//     { label: t('footer.links.contact'), href: "/contact" },
//     { label: t('footer.links.privacy'), href: "/privacy-policy" },
//   ];

//   return (
//     <footer className="w-full bg-black text-white py-16 px-2 md:px-7 lg:px-16">
//       <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12">

//         <div className="flex-1">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4">
//             {t('footer.company')}
//           </h2>
//           <p className="text-gray-400 text-sm md:text-[17px] leading-relaxed">
//             {t('footer.companyDescription')}
//           </p>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-xl font-semibold mb-4">
//             {t('footer.quickLinks')}
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-300 text-[17px]">
//             {quickLinks.map(link => (
//               <li key={link.href}>
//                 <Link href={link.href} className="hover:text-white transition">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-xl font-semibold mb-4">
//             {t('footer.contact')}
//           </h3>
//           <p>{t('footer.email')}</p>
//           <p className="mt-3">{t('footer.address')}</p>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-xl font-semibold mb-4">
//             {t('footer.newsletter')}
//           </h3>
//           <NewsletterSubscribe />
//         </div>
//       </div>

//       <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
//         {t('footer.copyright')}
//       </div>
//     </footer>
//   );
// }


'use client';

import Link from "next/link";
import NewsletterSubscribe from "../common/newsletter-subscribe";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

export default function StandardFooter() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);

  const quickLinks = [
    { label: t('footer.links.home'), href: "/" },
    { label: t('footer.links.services'), href: "/what-we-think" },
    { label: t('footer.links.careers'), href: "/careers/apply" },
    { label: t('footer.links.about'), href: "/who-we-are" },
    { label: t('footer.links.contact'), href: "/contact" },
    { label: t('footer.links.privacy'), href: "/privacy-policy" },
    { label: t('footer.links.cookie'), href: "/cookie-policy" },
    { label: t('footer.links.accessibility'), href: "/accessibility-statement" },
    { label: t('footer.links.terms'), href: "/terms-conditions" },
    { label: t('footer.links.privacy-statement'), href: "/privacy-statement" },
  ];

  const locations = [
    { title: t("footer.offices.us.title"), address: t("footer.offices.us.address") },
    { title: t("footer.offices.india.title"), address: t("footer.offices.india.address") },
    { title: t("footer.offices.australia.title"), address: t("footer.offices.australia.address") },
    { title: t("footer.offices.canada.title"), address: t("footer.offices.canada.address") },
  ];

  return (
    <footer className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">

        {/* ROW 1: Company + Quick Links + Newsletter */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* COMPANY */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('footer.company')}
            </h2>
            <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* QUICK LINKS (grid 2/3 columns) */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 text-gray-300 text-sm md:text-[16px]">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {t('footer.newsletter')}
            </h3>
            <NewsletterSubscribe />
          </div>

        </div>

        {/* ROW 2: Contact + Locations */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* CONTACT */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {t('footer.contact')}
            </h3>
            <p className="text-gray-400 text-sm md:text-[16px]">{t('footer.email')}</p>
          </div>

          {/* LOCATIONS (grid 2 columns mobile, 2-3 on desktop) */}
          <div className="mr-5">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {t("footer.locations")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 text-gray-400 text-sm md:text-[15px] leading-relaxed">
              {locations.map((loc, idx) => (
                <div key={idx}>
                  <p className="font-medium text-white">{loc.title}</p>
                  <p>{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        {t('footer.copyright')}
      </div>
    </footer>
  );
}
