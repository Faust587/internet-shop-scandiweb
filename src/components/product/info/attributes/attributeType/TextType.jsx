import React, {useContext} from "react";
import styled from "styled-components";
import AttributeContext from "../../../../../context/AttributeContext";

const TextType = ({items, index}) => {

  const {activeItem, setActiveItem} = useContext(AttributeContext);

  const changeActiveItem = itemIndex => {
    activeItem[index] = itemIndex;
    setActiveItem([...activeItem]);
  }

  return (
    <Wrapper>
      {items.map(({id, value, displayValue}, itemIndex) => {
        return (
          <TextOption active={activeItem[index] === itemIndex}
                      onClick={() => changeActiveItem(itemIndex)}
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
