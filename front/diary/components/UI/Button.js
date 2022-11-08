import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const Button = ({ type, label, size = 'md', onClick, notForClick }) => {
  let scale = 1;
  if (size === 'sm') { scale = 0.75 };
  if (size === 'lg') { scale = 1.5 };
  const style = {
    padding: `${scale * 1}rem ${scale * 2}rem`,
    backgroundColor:   notForClick ? `${colors.gray3}` : ''
  }
  
  return (
    <Btn type={ type || "button" }  onClick={onClick} style={style}>
      {label}
    </Btn>
  );
};

Button.PropTypes = {
  type: PropTypes.string,
  size : PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick : PropTypes.func, 
}

export default Button;

const Btn = styled.button`
  ${fonts.Body1};
  color: white;
  font-weight: 600;
  border: 0;
  width: 100%;
  background-color: ${colors.primary};
  cursor: pointer;
  margin: auto;
  text-align: center;

  :hover {
    background-color: ${colors.primary};
    opacity: 0.6;
  }
`;
