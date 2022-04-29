import "../styles/reset.css";
import type { AppProps } from "next/app";
import wrapper from "../store";
import AppLayout from "../components/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(MyApp);
