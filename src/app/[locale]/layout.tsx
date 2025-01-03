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
    description:
      "Kuhlmann & Partner is a family-owned business founded in 2008. With over a decade of experience, we have established ourselves as leaders in the industry, offering comprehensive services that cover everything from planning to execution. Our approach is client-focused, ensuring personalised attention and tailored solutions to meet their specific needs.",
    icons: {
      icon: "/images/logo.jpg",
    },
    openGraph: {
      title: "Kuhlmann & Partner",
      description:
        "Kuhlmann & Partner is a family-owned business founded in 2008. With over a decade of experience, we have established ourselves as leaders in the industry, offering comprehensive services that cover everything from planning to execution. Our approach is client-focused, ensuring personalised attention and tailored solutions to meet their specific needs.",
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
