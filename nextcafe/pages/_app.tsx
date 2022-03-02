import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import SimpleSidebar from "../components/SimpleSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Component {...pageProps} />
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default MyApp;
