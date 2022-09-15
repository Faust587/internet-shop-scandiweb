import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

type propsType = {
  active: boolean,
  name: string
}

type styledPropsType = {
  active: boolean
}

const SwitcherItem: FC<propsType> = (
  {
    active,
    name
  }
) => {

  const navigate = useNavigate();

  return (
    <ItemWrapper onClick={() => {navigate(`/category/${name}`)}}>
      <InvisibleBlock />
      <ItemName active={active}>{name.toUpperCase()}</ItemName>
      <UnderlineItem active={active} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ItemName = styled.div<styledPropsType>`
  font-family: Raleway, sans-serif;
  display: flex;
  font-weight: ${(active) => active ? 600 : 400};
  color: ${({active}) => active ? "#5ECE7B" : "#000"}
`;

const UnderlineItem = styled.div<styledPropsType>`
  width: 100%;
  height: 2px;
  background-color: #5ECE7B;
  opacity: ${({active}) => active ? "1" : "0"}
`;

const InvisibleBlock = styled.div`
  width: 100%;
  height: 2px;
`;
export default SwitcherItem;
