import "../../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Toolbar from "../components/Toolbar/Toolbar";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ChakraProvider>
      <Toolbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ChakraProvider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
