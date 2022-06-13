import Header from "../components/Layout/Header/Header";
import styled from "styled-components";
import colors from "../styles/colors";
import Main from "../components/Layout/Main/Main";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <div className="wrap">
        <Header />
        <Main />
        <Component {...pageProps} />
      </div>
    </Container>
  );
}

export default MyApp;

const Container = styled.div`
  height: 100vh;
  background-color: ${colors.gray6};

  .wrap {
    margin: 0 auto;
    max-width: 375px;
  }
`;
