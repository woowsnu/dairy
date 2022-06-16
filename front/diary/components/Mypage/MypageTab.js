import React from "react";
import Link from "next/link";

const MypageTab = () => {
  return (
    <div>
      <Link href="/mypage/weekly">
        <a>주간</a>
      </Link>
      <Link href="/mypage/monthly">
        <a>월간</a>
      </Link>
      <Link href="/mypage/total">
        <a>종합</a>
      </Link>
    </div>
  );
};

export default MypageTab;
