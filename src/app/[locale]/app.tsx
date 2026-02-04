import LoaderWrapper from "../components/animation-home";
import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";
import ConsentManager from "../components/consentManager";
import AnalyticsTracker from "../components/google-analytics";

interface Props {
  children: any;
  locale: "en" | "es" | "de";
}

async function App(props: Props) {
  const { children, locale } = props;

  return (
    <>
      <ConsentManager />
      <AnalyticsTracker />      
      <LoaderWrapper>
        <AppHeader
          params={{
            locale: locale,
          }}
        />
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