import React from "react";
import styled from "styled-components";
import MenuIcon from "../../../public/static/svg/menu.svg";
import SearchIcon from "../../../public/static/svg/search.svg";

const Header = () => {
  return (
    <Wrap>
      <div>
        <img />로고
      </div>
      <div>
        <SearchIcon />
        <MenuIcon className="icon-menu"/>
      </div>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: white;

    .icon-menu {
        margin-left : 12px;
    }
`
