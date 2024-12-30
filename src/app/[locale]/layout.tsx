import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import App from "./app";
import "tailwindcss/tailwind.css";
import "../global.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "Kuhlmann & Partner",
    description: "New Site",
    icons: {
      icon: '/images/logo.jpg',
    },
    openGraph: {
      title: "Kuhlmann & Partner",
      description: "New Site",
      siteName: "",
      locale: locale,
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

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} timeZone={timeZone}>
          <App locale={locale}>{children}</App>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
