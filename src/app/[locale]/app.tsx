import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";

interface Props {
  children: any;
  locale: 'en' | 'es' | 'de';
}

async function App(props: Props) {
  const { children, locale } = props;

  return (
    <>
    <AppHeader />
    <div className="bg-body">{children}</div>
    <AppFooter
        params={{
          locale: locale,
        }}
      />
    </>
  );
}

export default App;
