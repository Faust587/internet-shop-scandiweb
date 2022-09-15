import React, {FC, useContext} from "react";
import styled from "styled-components";
import CartAttributeContext from "../../../../../../../context/CartAttributeContext";
import {attributeItemsType} from "../../../../../../../types";

type propsType = {
  index: number,
  items: attributeItemsType[]
}

type styledPropsType = {
  active: boolean
}

const SwatchType: FC<propsType> = (props) => {

  const {activeItems} = useContext(CartAttributeContext);

  return (
    <AttributesWrapper>
      {
        props.items.map(({value, id}, index) => {
          return <ColorBlock key={id}
                             active={activeItems[props.index] === index}
                             color={value}
          />
        })
      }
    </AttributesWrapper>
  );
}


const AttributesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorBlock = styled.div<styledPropsType>`
  width: ${({active}) => active ? 18 : 20}px;
  height: ${({active}) => active ? 18 : 20}px;
  border: ${({active}) => active ? "2px solid #5ECE7B" : null};
  background-color: ${({color}) => color};
  :not(:last-child) {
    margin-right: 2px;
  }
`;

export default SwatchType;
