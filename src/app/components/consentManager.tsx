"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "js-cookie";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function ConsentManager() {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState({
    gtm: false,
    analytics: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];

      (window as any).dataLayer.push({
        event: "default_consent",
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  }, []);

  useEffect(() => {
    const checkConsent = () => {
      const savedConsent = Cookies.get("kuhlmann-cookie-consent");
      if (savedConsent) {
        const preferences: CookiePreferences = JSON.parse(savedConsent);
        setConsent(preferences);
      }
    };

    checkConsent();
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, []);

  const shouldLoadGA = consent?.analytics && !scriptsLoaded.analytics;
  const shouldLoadGTM = consent?.marketing && !scriptsLoaded.gtm;

  return (
    <>
      {shouldLoadGA && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-WTD75CT3EE"
            onLoad={() =>
              setScriptsLoaded((prev) => ({ ...prev, analytics: true }))
            }
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
              gtag('config', 'G-WTD75CT3EE', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {shouldLoadGTM && (
        <>
          <Script
            id="google-tag-manager-script"
            strategy="afterInteractive"
            onLoad={() => setScriptsLoaded((prev) => ({ ...prev, gtm: true }))}
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                w[l].push({
                  event: 'consent_update',
                  ad_storage: 'granted'
                });
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TBJWNDDJ');`,
            }}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TBJWNDDJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}
    </>
  );
}
