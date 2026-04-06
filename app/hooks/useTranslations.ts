// 'use client';

// import { useCallback, useEffect, useState } from 'react';

// /**
//  * Translation keys must be dot-notation strings.
//  * This avoids deep recursive type instantiation errors
//  * while still preventing invalid key shapes.
//  */
// // export type TranslationKey = `${string}.${string}`;
// export type TranslationKey = string;


// export function useClientTranslation(locale: string) {
//   const [messages, setMessages] = useState<Record<string, any>>({});
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//   let active = true;

//   const loadMessages = async () => {
//     setIsLoading(true);

//     try {
//       const imported = await import(`../locales/${locale}.json`);
//       if (active) setMessages(imported.default);
//     } catch {
//       const fallback = await import('../locales/en.json');
//       if (active) setMessages(fallback.default);
//     } finally {
//       if (active) setIsLoading(false);
//     }
//   };

//   loadMessages();
//   return () => { active = false };
//  }, [locale]);


//   const t = useCallback(
//     (key: TranslationKey) => {
//       const keys = key.split('.');
//       let value: any = messages;

//       for (const k of keys) {
//         value = value?.[k];
//       }

//       return value ?? key;
//     },
//     [messages]
//   );

//   return { t, isLoading };
// }




// // 'use client';

// // import { useCallback, useEffect, useState } from 'react';

// // export type TranslationKey = string;

// // export function useClientTranslation() {
// //   const [messages, setMessages] = useState<Record<string, any>>({});
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     let active = true;

// //     const loadMessages = async () => {
// //       setIsLoading(true);

// //       // 🔒 HARD-CODE ENGLISH
// //       const imported = await import('../locales/en.json');
// //       if (active) setMessages(imported.default);

// //       if (active) setIsLoading(false);
// //     };

// //     loadMessages();
// //     return () => {
// //       active = false;
// //     };
// //   }, []); // 👈 no locale dependency anymore

// //   const t = useCallback(
// //     (key: TranslationKey) => {
// //       const keys = key.split('.');
// //       let value: any = messages;

// //       for (const k of keys) {
// //         value = value?.[k];
// //       }

// //       return value ?? key;
// //     },
// //     [messages]
// //   );

// //   return { t, isLoading };
// // }
'use client';

import { useCallback, useEffect, useState } from 'react';

export type TranslationValue =
  | string
  | TranslationMessages
  | Array<TranslationValue>;

export type TranslationMessages = {
  [key: string]: TranslationValue;
};

export type TranslationKey = string;

export function useClientTranslation(locale: string) {
  const [messages, setMessages] = useState<TranslationMessages>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadMessages = async () => {
      setIsLoading(true);

      try {
        const imported = await import(`../locales/${locale}.json`);

        if (active) {
          setMessages(imported.default as TranslationMessages);
        }
      } catch {
        const fallback = await import('../locales/en.json');

        if (active) {
          setMessages(fallback.default as TranslationMessages);
        }
      } finally {
        if (active) setIsLoading(false);
      }
    };

    loadMessages();

    return () => {
      active = false;
    };
  }, [locale]);

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split('.');

      let value: unknown = messages;

      for (const k of keys) {
        if (typeof value === 'object' && value !== null) {
          value = (value as TranslationMessages)[k];
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [messages]
  );

  return { t, isLoading };
}