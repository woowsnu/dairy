import Layout from "../components/Layout/Layout";
import { Reset } from "styled-reset";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
