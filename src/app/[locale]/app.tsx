import LoaderWrapper from "../components/animation-home";
import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";

interface Props {
  children: any;
  locale: 'en' | 'es' | 'de';
}

async function App(props: Props) {
  const { children, locale } = props;

  return (
    <LoaderWrapper>
      <AppHeader />
      <div className="bg-body">{children}</div>
      <AppFooter
        params={{
          locale: locale,
        }}
      />
    </LoaderWrapper>
  );
}

export default App;
