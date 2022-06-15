import React from "react";
import Link from "next/link";

const MypageTab = () => {
  return (
    <div>
      <Link href="/weekly">
        <a>주간</a>
      </Link>
      <Link href="/monthly">
        <a>월간</a>
      </Link>
      <Link href="/total">
        <a>종합</a>
      </Link>
    </div>
  );
};

export default MypageTab;
