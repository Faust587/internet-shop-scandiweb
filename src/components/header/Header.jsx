import React from "react";
import styled from "styled-components";
import CategoriesSwitcher from "./categoriesSwitcher/CategoriesSwitcher";
import ImageLogo from "./logo/ImageLogo";
import ActionBlock from "./actionsBlock/ActionBlock";

const Header = () => {

  return (
    <HeaderWrapper>
      <CategoriesSwitcher />
      <ImageLogo width={41} height={41} />
      <ActionBlock />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  user-select: none;
  padding: 0 100px;
`;

export default Header;
