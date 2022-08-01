import React, {useMemo} from "react";
import styled from "styled-components";
import TextType from "./attributeType/TextType";
import SwatchType from "./attributeType/SwatchType";

const Attributes = ({type, name, items, index}) => {

  const checkAttributeType = useMemo(() => {
    switch (type) {
      case "text": return <TextType items={items} index={index} />;
      case "swatch": return <SwatchType items={items} index={index} />;
      default: return null;
    }
  }, [type]);

  return (
    <AttributesWrapper>
      <AttributeName>
        {`${name.toUpperCase()}:`}
      </AttributeName>
      {checkAttributeType}
    </AttributesWrapper>
  );
}

const AttributesWrapper = styled.div`
  width: 100%;
`;

const AttributeName = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
`;

export default Attributes;
