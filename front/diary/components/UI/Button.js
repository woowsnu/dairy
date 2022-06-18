import React from "react";
import styled from "styled-components";
import fonts from "../../styles/fonts";

const Button = (props) => {
  return (
    <Btn type={ props.type || "button" } onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  ${fonts.Body1};
  color: white;
  font-weight: 600;
  border: 0;
  border-radius: 5px;
  width: 100%;
  background-color: #ff993a;
  padding: 20px;
  cursor: pointer;
  margin: 30px auto;
  text-align: center;

  :hover {
    background-color: #ff993a;
    opacity: 0.6;
  }
`;
