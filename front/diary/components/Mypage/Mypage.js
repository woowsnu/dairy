import React from "react";
import MypageTab from "./MypageTab";
import styled from "styled-components";

const Mypage = (props) => {
  return (
    <MypageContainer>
      <div>
        <MypageTab />
        {props.children}
      </div>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  display:flex;
  justify-content:center;
  padding-top: 30px;
  padding-bottom: 30px;
`