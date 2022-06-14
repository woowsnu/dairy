import React from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../../styles/colors";
import CancelIcon from "../../public/static/svg/cancel.svg";

const Menu = (props) => {
  console.log(props.user[0]);

  // 닫기 눌렀을 때 기존페이지로 (현재는 임시로 메인으로)

  return (
    <Rnb>
      <div>
        <Link href="/">
          <CancelIcon />
        </Link>
        <div>
          <img />
          <h3>{props.user[0].nickname}</h3>
          <p>{props.user[0].name}</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/mypage">마이페이지</Link>
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
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 70%;
  z-index: 100;
  animation: slide-down 300ms ease-out forwards;
`;
