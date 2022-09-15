import React, {FC, useContext} from "react";
import styled from "styled-components";
import AttributeContext from "../../../../../../context/ProductAttributeContext";
import {attributeItemsType} from "../../../../../../types";

type propsType = {
  items: attributeItemsType[],
  index: number
}

type styledPropsType = {
  active: boolean
}

const TextType: FC<propsType> = ({items, index}) => {

  const {activeItem, setActiveItem} = useContext(AttributeContext);

  const changeActiveItem = (itemIndex: number) => {
    const activeAttributes = [...activeItem];
    activeAttributes[index] = itemIndex;
    setActiveItem([...activeAttributes]);
  }

  return (
    <Wrapper>
      {items.map(({id, value, displayValue}, itemIndex) => {
        return (
          <TextOption active={activeItem[index] === itemIndex}
                      onClick={() => changeActiveItem(itemIndex)}
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
  font-size: 16px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 45px; 
  border: 2px solid #000;
  margin-right: 2px;
  transition: 0.5s;


  background-color: ${({active}) => active ? "#000" : "#fff"};
  color: ${({active}) => active ? "#fff" : "#000"};
  
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

export default TextType;
