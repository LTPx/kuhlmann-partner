import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import App from "./app";
import "tailwindcss/tailwind.css";
import "../global.css";
import CookieBanner from "../components/cookies";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    icons: {
      icon: "/images/logo.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "es" | "de" };
}) {
  const messages = await getMessages();
  const timeZone =
    locale === "es"
      ? "Europe/Madrid"
      : locale === "de"
        ? "Europe/Berlin"
        : "America/New_York";
  const baseUrl = "https://kuhlmann-partner.com";
  const hreflangs = [
    { lang: "de", url: `${baseUrl}/de/` },
    { lang: "en", url: `${baseUrl}/en/` },
    { lang: "es", url: `${baseUrl}/es/` },
    { lang: "x-default", url: baseUrl },
  ];

  return (
    <html lang={locale}>
      <head>
        {hreflangs.map(({ lang, url }) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <meta
          name="google-site-verification"
          content="mh9OT7ofL1NqRCxdVaSd-kGUnQ7YjJcO-OC0TkGe6TI"
        />
      </head>
      <body>
        {/* GTM SE MOVERÁ A UN COMPONENTE CONDICIONAL */}
        <NextIntlClientProvider messages={messages} timeZone={timeZone}>
          <App locale={locale}>{children}</App>
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}