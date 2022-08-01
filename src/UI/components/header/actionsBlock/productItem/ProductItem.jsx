import React, {useMemo, useState} from "react";
import styled from "styled-components";
import Attributes from "./attributes/Attributes";
import AttributeContext from "../../../../../context/CartAttributeContext";

const ProductItem = (props) => {
  const priceAmount = props["prices"][props.currencyId].amount;
  const currencySymbol = props["prices"][props.currencyId].currency.symbol;

  const [activeItems, setActiveItems] = useState(props.chosenAttributes);
  const providerItemsValue = useMemo(() => ({activeItems, setActiveItems}), [activeItems, setActiveItems]);

  return (
    <ItemWrapper>
      <InfoBlock>
        <Title>{props.name}</Title>
        <Title>{props.brand}</Title>
        <Price>
          {`${priceAmount}${currencySymbol}`}
        </Price>
        <AttributeContext.Provider value={providerItemsValue}>
          {
            props.attributes.map((item, index) => {
              return <Attributes key={item.id} index={index} {...item} />
            })
          }
        </AttributeContext.Provider>
      </InfoBlock>
      <Image>

      </Image>
    </ItemWrapper>
  );
}

const Price = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

const ItemWrapper = styled.div`
  display: flex;
  height: 190px;
`;

const InfoBlock = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = styled.div`
  width: 120px;
  height: 190px;
`;

export default ProductItem;
