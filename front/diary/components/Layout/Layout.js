import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import Header from "./Header";

const Layout = (props) => {

  return (
    <Container>
      <Header />
      <Main>{props.children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  z-index: 0;
  filter: drop-shadow(4px 4px 4px ${colors.gray5});
`;

const Main = styled.main`
  width: 100%;
  padding: 0 24px;
`
