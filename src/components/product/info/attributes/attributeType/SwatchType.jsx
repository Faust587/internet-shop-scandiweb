import React, {useContext} from "react";
import styled from "styled-components";
import AttributeContext from "../../../../../context/AttributeContext";

const SwatchType = ({items, index}) => {

  const {activeItem, setActiveItem} = useContext(AttributeContext);

  const changeActiveItem = itemIndex => {
    activeItem[index] = itemIndex;
    setActiveItem([...activeItem]);
  }

  return  (
    <Wrapper>
      {items.map(({id, value, displayValue}, itemIndex) => {
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

const OptionWrapper = styled.div`
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
