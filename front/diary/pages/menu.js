import React from "react";
import Menu from "../components/Layout/Menu";

const USER = [
    {
        id: 1,
        name: "woowsnu",
        nickname: "nmnm",
    }
]

// 로그인 여부 확인해서 상태값에 따라...

const menu = () => {
  return <Menu user={USER}/>
}

export default menu

