import React, {useContext} from "react";
import styled from "styled-components";
import CartAttributeContext from "../../../../../context/CartPageContext";

const SwatchType = (props) => {

  const {activeItems} = useContext(CartAttributeContext);

  return (
    <Wrapper>
      {
        props.items.map(({value, id}, index) => {
          return <OptionWrapper key={id}
                             active={activeItems[props.index] === index}
                             color={value}
          />
        })
      }
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
  background-color: ${({color}) => color};
`;


export default SwatchType;
