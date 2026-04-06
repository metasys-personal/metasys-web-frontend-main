'use client';

import NavbarNew from '@/app/components/navbar/navbar';
import ClientOnlySolutionsGrid from './client-only-solution';
import { useLocale } from '@/app/providers/locale-context';
import { useClientTranslation } from '@/app/hooks/useTranslations';

export default function WhatWeThinkPageClient() {
  const { locale, setLocale } = useLocale(); // ✅ get global locale
   const { t } = useClientTranslation(locale); 
  return (
    <main className="min-h-screen bg-black text-white">
      <NavbarNew onLocaleChange={setLocale} />
      <section className="bg-[#191919] text-white min-h-screen px-2 md:px-6 lg:px-16 pt-8 pb-16 md:pt-30">
        <h1 className="text-5xl text-center md:text-6xl lg:text-7xl font-bold mb-10">
          {t("solutionsPage.heading")}
        </h1>
        <ClientOnlySolutionsGrid locale={locale} /> {/* ✅ pass global locale */}
      </section>
    </main>
  );
}
