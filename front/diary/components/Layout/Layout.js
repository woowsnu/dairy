import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import Header from "./Header";

const Layout = (props) => {

  return (
    <Container>
      <Header />
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  z-index: 0;
  filter: drop-shadow(4px 4px 4px ${colors.gray5});
`;
