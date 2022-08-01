import React, {useContext} from "react";
import CartAttributeContext from "../../../../../../../context/CartAttributeContext";
import styled from "styled-components";

const TextType = ({items, index}) => {

  const {activeItems, setActiveItems} = useContext(CartAttributeContext);

  const changeActiveItem = (event, itemIndex) => {
    event.stopPropagation();
    const activeAttributes = [...activeItems];
    activeAttributes[index] = itemIndex;
    setActiveItems([...activeAttributes]);
  }

  return (
    <Wrapper>
      {items.map(({id, value, displayValue}, itemIndex) => {
        return (
          <TextOption active={activeItems[index] === itemIndex}
                      onClick={(event) => changeActiveItem(event, itemIndex)}
                      alt={displayValue}
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

const TextOption = styled.div`
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
