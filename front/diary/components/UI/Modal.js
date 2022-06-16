import React, { useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
  
  const [close, setClose] = useState(false);
  const closeHandler = () => {
    setClose(!close);
  };

  return (
    <Container>{props.children}</Container>
)
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 50;
`;