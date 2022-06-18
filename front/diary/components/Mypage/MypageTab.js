import React from "react";
import Link from "next/link";
import styled from "styled-components";


const MypageTab = () => {
  return (
      <div>
        <Btn>
        <Link href="/mypage/weekly"><button className="btn">주간</button></Link>
        <Link href="/mypage/monthly"><button className="btn">월간</button></Link>
        <Link href="/mypage/total"><button className="btn">종합</button></Link>
        </Btn>
      </div>
  );
};

export default MypageTab;

const Btn = styled.div`
  width: 90%;

  .btn {
    padding: 10px;
  }

`