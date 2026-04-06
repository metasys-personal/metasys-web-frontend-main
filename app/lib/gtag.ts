// app/lib/gtag.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}



export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Pageview event
export const pageview = (
  url: string,
  options?: { title?: string; pageType?: string; language?: string }
) => {
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_title: options?.title || document.title,
    page_type: options?.pageType || "unknown",
    language: options?.language || navigator.language,
    referrer: document.referrer,
  });
};

// Custom event
export const event = ({
  action,
  params,
}: {
  action: string;
  params: Record<string, unknown>;
}) => {
  if (!window.gtag) return;
  window.gtag(action, params);
};
