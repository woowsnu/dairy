import Layout from "../components/Layout/Layout";
import { Reset } from "styled-reset";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Reset />
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
