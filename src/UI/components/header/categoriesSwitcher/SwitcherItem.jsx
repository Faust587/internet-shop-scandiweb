import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const SwitcherItem = (props) => {

  const navigate = useNavigate();

  return (
    <ItemWrapper onClick={() => {navigate(`/category/${props.name}`)}}>
      <InvisibleBlock />
      <ItemName active={props.active}>{props.name.toUpperCase()}</ItemName>
      <UnderlineItem active={props.active} />
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

const ItemName = styled.div`
  font-family: Raleway, sans-serif;
  display: flex;
  font-weight: ${({active}) => active ? 600 : 400};
  color: ${({active}) => active ? "#5ECE7B" : "#000"}
`;

const UnderlineItem = styled.div`
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
