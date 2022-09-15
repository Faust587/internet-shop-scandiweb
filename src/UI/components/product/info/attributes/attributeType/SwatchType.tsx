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

const SwatchType: FC<propsType> = ({items, index}) => {

  const {activeItem, setActiveItem} = useContext(AttributeContext);

  const changeActiveItem = (itemIndex: number) => {
    let newActiveItem = [...activeItem];
    newActiveItem[index] = itemIndex;
    setActiveItem(newActiveItem);
  }

  return  (
    <Wrapper>
      {items.map(({id, value}, itemIndex) => {
        return (
          <OptionWrapper key={id} active={activeItem[index] === itemIndex} onClick={() => changeActiveItem(itemIndex)}>
            <ColorOption color={value} />
          </OptionWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OptionWrapper = styled.div<styledPropsType>`
  display: flex;
  width: ${({active}) => active ? 36 : 42}px;
  height: ${({active}) => active ? 36 : 42}px;
  
  margin-right: 4px;
  padding: ${({active}) => active ? 1 : 0}px;
  border: ${({active}) => active ? "2px solid #5ECE7B" : null};
`;

const ColorOption = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: ${({color}) => color};
`;

export default SwatchType;
