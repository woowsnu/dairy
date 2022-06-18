import React from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import CancelIcon from "../../public/static/svg/cancel.svg";

const Menu = (props) => {
  console.log(props.user[0]);

  // 닫기 눌렀을 때 기존페이지로 (현재는 임시로 메인으로)

  return (
    <Rnb>
      <div className="wrap">
      <div className="close">
        <Link href="/">
          <CancelIcon />
        </Link>
      </div>
      <div className="user">
        <h3 className="user-nickname">닉네임 님</h3>
        <p className="user-id">아이디</p>
      </div>
      <div className="sub-menu">
        <ul>
          <li>
            <Link href="/mypage/weekly">마이페이지</Link>
          </li>
          <li>
            <Link href="/mypage">회원정보수정</Link>
          </li>
        </ul>
      </div>
      </div>
    </Rnb>
  );
};

export default Menu;

const Rnb = styled.div`
  width: 70%;
  height: 100vh;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${colors.primary};
  z-index: 100;
  margin-left: 72px;
  padding: 20px;
  text-decoration: none;

  .wrap {
    padding: 16px;
  }

  .close {
    float: right;
  }

  .user-nickname {
    ${fonts.Body1};
    font-weight: 700;
  }

  .user-id {
    ${fonts.Caption};
    color: ${colors.gray4};
  }
`;
