import React, {FC, useContext} from "react";
import CartAttributeContext from "../../../../../../../context/CartAttributeContext";
import styled from "styled-components";
import {attributeItemsType} from "../../../../../../../types";


type propsType = {
  index: number,
  items: attributeItemsType[]
}

type styledPropsType = {
  active: boolean
}

const TextType: FC<propsType> = ({items, index}) => {

  const {activeItems} = useContext(CartAttributeContext);

  return (
    <Wrapper>
      {items.map(({id, value, displayValue}, itemIndex) => {
        return (
          <TextOption active={activeItems[index] === itemIndex}
                      key={id}>
            {value}
          </TextOption>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const TextOption = styled.div<styledPropsType>`
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 2px solid #000;
  margin-right: 2px;
  transition: 0.5s;

  background-color: ${({active}) => active ? "#000" : "#fff"};
  color: ${({active}) => active ? "#fff" : "#000"};
`;

export default TextType;
