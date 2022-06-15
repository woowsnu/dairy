import React from "react";
import MypageTab from "./MypageTab";

const Mypage = (props) => {
  return (
    <div>
      <MypageTab />
      {props.children}
    </div>
  );
};

export default Mypage;
