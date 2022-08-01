import React, {useContext} from "react";
import styled from "styled-components";
import CartAttributeContext from "../../../../../../../context/CartAttributeContext";

const SwatchType = (props) => {

  const {activeItems, setActiveItems} = useContext(CartAttributeContext);

  const changeActiveItem = (event, itemIndex) => {
    event.stopPropagation();
    let newActiveItems = [...activeItems];
    newActiveItems[props.index] = itemIndex;
    setActiveItems(newActiveItems);
  }

  return (
    <AttributesWrapper>
      {
        props.items.map(({value, id}, index) => {
          return <ColorBlock key={id}
                             active={activeItems[props.index] === index}
                             color={value}
                             onClick={(e) => changeActiveItem(e, index)}
          />
        })
      }
    </AttributesWrapper>
  );
}


const AttributesWrapper = styled.div`
  display: flex;
`;

const ColorBlock = styled.div`
  width: ${({active}) => active ? "20px" : "16px"};
  height: ${({active}) => active ? "20px" : "16px"};
  border: ${({active}) => active ? "1px solid #5ECE7B" : null};
  background-color: ${({color}) => color};
`;

export default SwatchType;
