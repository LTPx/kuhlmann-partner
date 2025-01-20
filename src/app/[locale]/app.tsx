import Script from "next/script";
import LoaderWrapper from "../components/animation-home";
import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";
import AnalyticsTracker from "../components/google-analytics";

interface Props {
  children: any;
  locale: "en" | "es" | "de";
}

async function App(props: Props) {
  const { children, locale } = props;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WTD75CT3EE`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WTD75CT3EE', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <AnalyticsTracker />
      <LoaderWrapper>
        <AppHeader />
        <div className="bg-body">{children}</div>
        <AppFooter
          params={{
            locale: locale,
          }}
        />
      </LoaderWrapper>
    </>
  );
}

export default App;
