"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, pageview,  } from "../lib/gtag";


export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") return;

        pageview(pathname, {
            title: document.title,
            pageType: pathname.includes("/articles") ? "article" : "page",
            language: navigator.language,
        });
    }, [pathname]);


    if (process.env.NODE_ENV !== "production" || !GA_MEASUREMENT_ID) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
        `}
            </Script>
        </>
    );
}
