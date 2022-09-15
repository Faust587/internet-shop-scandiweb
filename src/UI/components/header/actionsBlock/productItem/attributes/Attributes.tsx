import React, {FC} from "react";
import SwatchType from "./attributeType/SwatchType";
import TextType from "./attributeType/TextType";
import styled from "styled-components";
import {attributeItemsType} from "../../../../../../types";

type propsType = {
  index: number,
  name: string,
  type: string,
  items: attributeItemsType[]
}

const Attributes: FC<propsType> = (props) => {

  function getAttribute(type: string) {
    switch (type) {
      case "swatch": return <SwatchType index={props.index} items={[...props.items]} />
      case "text": return <TextType index={props.index} items={[...props.items]} />
      default: return null
    }
  }

  return (
    <AttributesWrapper>
      <Title>
        {props.name}:
      </Title>
      {
        getAttribute(props.type)
      }
    </AttributesWrapper>
  );
}

const AttributesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 10px;
`;

export default Attributes;
