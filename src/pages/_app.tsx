import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DrawerProvider } from "@/context/DrawerContext";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DrawerProvider>
      <Component {...pageProps} />;
    </DrawerProvider>
  </>
);

export default App;
