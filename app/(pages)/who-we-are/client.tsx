'use client';

import ClientOnlyCoreValues from './_components/client-only-corevalues';
import { useClientTranslation } from '@/app/hooks/useTranslations';
import NavbarNew from '@/app/components/navbar/navbar';
import { useLocale } from '@/app/providers/locale-context';


export default function WhoWeArePageClient() {

  const { locale } = useLocale(); 
  const { t } = useClientTranslation(locale);

  return (
    <main className="bg-[#191919] text-white pb-16">
      <NavbarNew  />
      <section className="min-h-[40vh] flex items-center px-4 md:px-6 pt-16 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('whoweare.title')}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {t('whoweare.description')}
          </p>
        </div>
      </section>
      <ClientOnlyCoreValues locale={locale} />
    </main>
  );
}
