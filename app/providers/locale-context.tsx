// 'use client';

// import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
// import { NextIntlClientProvider } from 'next-intl';

// export type Locale = 'en' | 'de' | 'in';

// type LocaleContextType = {
//   locale: Locale;
//   setLocale: (locale: Locale) => void;
// };

// const LocaleContext = createContext<LocaleContextType | null>(null);

// type Props = {
//   children: ReactNode;
// };

// export function LocaleProvider({ children }: Props) {
//   const [locale, setLocaleState] = useState<Locale>('en');
//   const [messages, setMessages] = useState<Record<string, any>>({});

//   // Load saved locale from localStorage ONCE
//   useEffect(() => {
//     const saved = (localStorage.getItem('locale') as Locale) || 'en';
//     setLocaleState(saved);
//   }, []);

//   // Persist locale changes
//   useEffect(() => {
//     localStorage.setItem('locale', locale);
//   }, [locale]);

//   // Load messages whenever locale changes
//   useEffect(() => {
//     const loadMessages = async () => {
//       try {
//         const imported = await import(`../locales/${locale}.json`);
//         setMessages(imported.default);
//       } catch {
//         const fallback = await import('../locales/en.json');
//         setMessages(fallback.default);
//       }
//     };

//     loadMessages();
//   }, [locale]);

//   const setLocale = (next: Locale) => {
//     setLocaleState(prev => (prev === next ? prev : next));
//   };

//   const memoizedMessages = useMemo(() => messages, [messages]);

//   // Don't render until messages are loaded
//   if (!messages || Object.keys(messages).length === 0) return null;

//   return (
//     <LocaleContext.Provider value={{ locale, setLocale }}>
//       <NextIntlClientProvider locale={locale} messages={memoizedMessages}>
//         {children}
//       </NextIntlClientProvider>
//     </LocaleContext.Provider>
//   );
// }

// export function useLocale() {
//   const ctx = useContext(LocaleContext);
//   if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
//   return ctx;
// }







'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { NextIntlClientProvider } from 'next-intl';

export type Locale = 'en' | 'de' | 'in';

/**
 * Safe JSON structure for translations
 */
export type Messages = {
  [key: string]: string | Messages | Array<unknown>;
};

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function LocaleProvider({ children }: Props) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<Messages>({});

  // Load saved locale once
  useEffect(() => {
    const saved = (localStorage.getItem('locale') as Locale) || 'en';
    setLocaleState(saved);
  }, []);

  // Persist locale changes
  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  // Load messages when locale changes
  useEffect(() => {
    let active = true;

    const loadMessages = async () => {
      try {
        const imported = await import(`../locales/${locale}.json`);

        if (active) {
          setMessages(imported.default as Messages);
        }
      } catch {
        const fallback = await import('../locales/en.json');

        if (active) {
          setMessages(fallback.default as Messages);
        }
      }
    };

    loadMessages();

    return () => {
      active = false;
    };
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState((prev) => (prev === next ? prev : next));
  };

  const memoizedMessages = useMemo(() => messages, [messages]);

  // Optional safe loading guard (prevents flicker + SSR issues)
  const isReady = Object.keys(messages).length > 0;

  if (!isReady) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={memoizedMessages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);

  if (!ctx) {
    throw new Error('useLocale must be used inside LocaleProvider');
  }

  return ctx;
}
