"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent("openCookieSettings"));
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [canShowBanner, setCanShowBanner] = useState(false);
  const locale = useLocale();
  const t = useTranslations("cookies");

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const handleOpenSettings = () => {
      const consent = Cookies.get("kuhlmann-cookie-consent");
      if (consent) {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      }
      setShowBanner(true);
      setShowConfig(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () =>
      window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  useEffect(() => {
    const checkLoaderStatus = () => {
      const isAnimating = sessionStorage.getItem("loaderAnimating");
      const hasShownLoader = sessionStorage.getItem("hasShownLoader");

      if (!hasShownLoader || isAnimating === "false") {
        setCanShowBanner(true);
      } else {
        const interval = setInterval(() => {
          const animating = sessionStorage.getItem("loaderAnimating");
          if (animating === "false") {
            setCanShowBanner(true);
            clearInterval(interval);
          }
        }, 100);

        return () => clearInterval(interval);
      }
    };

    checkLoaderStatus();
  }, []);

  useEffect(() => {
    if (!canShowBanner) return;

    const consent = Cookies.get("kuhlmann-cookie-consent");
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
      }, 300);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      applyConsent(savedPreferences);
    }
  }, [canShowBanner]);

  const applyConsent = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];

      if (prefs.analytics) {
        (window as any).dataLayer.push({
          event: "cookie_consent_analytics",
          analytics_storage: "granted",
        });
      } else {
        (window as any).dataLayer.push({
          event: "cookie_consent_analytics",
          analytics_storage: "denied",
        });
      }

      if (prefs.marketing) {
        (window as any).dataLayer.push({
          event: "cookie_consent_marketing",
          ad_storage: "granted",
        });
      } else {
        (window as any).dataLayer.push({
          event: "cookie_consent_marketing",
          ad_storage: "denied",
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
  };

  const handleSaveConfig = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    Cookies.set("kuhlmann-cookie-consent", JSON.stringify(prefs), {
      expires: 365,
    });
    applyConsent(prefs);
    setShowBanner(false);
    setShowConfig(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[9998] animate-fadeIn" />
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 animate-fadeIn">
        <div className="bg-body rounded-xl shadow-2xl max-w-xl w-full max-h-[85vh] overflow-hidden border border-primary">
          <div className="bg-body relative border-b-[0.5px] border-b border-black px-6 py-4">
            <h2 className="text-lg font-semiBoldFont text-black">
              {showConfig ? t("title") : t("title")}
            </h2>
          </div>

          <div className="p-6 overflow-y-auto max-h-[55vh]">
            {!showConfig ? (
              <div className="space-y-3">
                <p className="text-sm font-regularFont text-black/80 leading-relaxed">
                  {t("description")}
                </p>
                <p className="text-sm font-regularFont text-black/70">
                  {t("moreInfo")}{" "}
                  <a
                    href={`/${locale}/cookies-policy`}
                    className="text-primary hover:text-black transition-colors font-mediumFont"
                  >
                    {t("policyLink")}
                  </a>
                </p>
                <p className="text-sm font-regularFont text-black/80 leading-relaxed">
                  {t("configInstructions")}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => setShowConfig(false)}
                  className="flex items-center gap-1 text-sm text-black/60 hover:text-primary transition-colors mb-3 font-regularFont"
                >
                  ← {t("back")}
                </button>

                <div className="space-y-3">
                  <div className="flex items-start justify-between p-3 border border-primary rounded-lg bg-white cursor-not-allowed opacity-75">
                    <div className="flex-1 pr-3">
                      <h3 className="text-sm font-mediumFont text-black mb-1">
                        {t("necessary.title")}
                      </h3>
                      <p className="text-xs font-regularFont text-black/60 leading-relaxed">
                        {t("necessary.description")}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-11 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-3 border border-black/10 rounded-lg bg-white hover:border-primary/50 transition-colors">
                    <div className="flex-1 pr-3">
                      <h3 className="text-sm font-mediumFont text-black mb-1">
                        {t("analytics.title")}
                      </h3>
                      <p className="text-xs font-regularFont text-black/60 leading-relaxed">
                        {t("analytics.description")}
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className="flex-shrink-0 mt-1"
                    >
                      <div
                        className={`w-11 h-6 rounded-full flex items-center px-1 transition-all ${
                          preferences.analytics
                            ? "bg-primary justify-end"
                            : "bg-black/20 justify-start"
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-start justify-between p-3 border border-black/10 rounded-lg bg-white hover:border-primary/50 transition-colors">
                    <div className="flex-1 pr-3">
                      <h3 className="text-sm font-mediumFont text-black mb-1">
                        Google{" "}
                      </h3>
                      <p className="text-xs font-regularFont text-black/60 leading-relaxed">
                        {t("marketing.description")}
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className="flex-shrink-0 mt-1"
                    >
                      <div
                        className={`w-11 h-6 rounded-full flex items-center px-1 transition-all ${
                          preferences.marketing
                            ? "bg-primary justify-end"
                            : "bg-black/20 justify-start"
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t-[0.5px] border-t border-black p-5 bg-body">
            {!showConfig ? (
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-black text-sm font-mediumFont rounded-lg transition-all"
                >
                  {t("acceptAll")}
                </button>
                <button
                  onClick={() => setShowConfig(true)}
                  className="px-6 py-2.5 bg-white hover:bg-black text-black hover:text-white text-sm font-mediumFont rounded-lg transition-all border border-black/20"
                >
                  {t("configure")}
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-black text-sm font-mediumFont rounded-lg transition-all"
                >
                  {t("acceptAll")}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-2.5 bg-white hover:bg-black text-black hover:text-white text-sm font-mediumFont rounded-lg transition-all border border-black/20"
                >
                  {t("rejectAll")}
                </button>
                <button
                  onClick={handleSaveConfig}
                  className="px-5 py-2.5 bg-black hover:bg-black/90 text-white hover:text-white text-sm font-mediumFont rounded-lg transition-all border border-black"
                >
                  {t("saveConfig")}
                </button>
              </div>
            )}
            <p className="pt-[10px] text-center text-xs font-regularFont text-black/50 mt-3">
              Powered by{" "}
              <span className="text-black font-mediumFont">
                Kuhlmann Partner
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

if (typeof window !== 'undefined') {
  (window as any).openCookieSettings = openCookieSettings;
}
