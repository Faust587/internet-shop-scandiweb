import React, {useMemo, useState} from "react";
import styled from "styled-components";
import Attributes from "./attributes/Attributes";
import AttributeContext from "../../../../../context/CartAttributeContext";
import minusSquare from "../../../../../assets/images/minus-square.svg";
import plusSquare from "../../../../../assets/images/plus-square.svg";
import {useCart} from "../../../../../hooks/useCart";

const ProductItem = (props) => {
  const priceAmount = props["prices"][props.currencyId].amount;
  const currencySymbol = props["prices"][props.currencyId].currency.symbol;

  const {incrementProductAmount, decrementProductAmount} = useCart();

  const [activeItems, setActiveItems] = useState(props.chosenAttributes);
  const providerItemsValue = useMemo(() => ({activeItems, setActiveItems}), [activeItems, setActiveItems]);

  const counterPlusHandler = e => {
    e.stopPropagation();
    incrementProductAmount({productId: props.id, attributes: props.chosenAttributes});
  }

  const counterMinusHandler = e => {
    e.stopPropagation();
    decrementProductAmount({productId: props.id, attributes: props.chosenAttributes});
  }

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
      <ItemCounter>
        <CounterBlock onClick={counterPlusHandler} image={plusSquare} />
        <ProductAmount>{props.amount}</ProductAmount>
        <CounterBlock onClick={counterMinusHandler} image={minusSquare} />
      </ItemCounter>
      <Image image={props["gallery"][0]} />
    </ItemWrapper>
  );
}

const Price = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  padding-top: 10px;
`;

const CounterBlock = styled.div`
  width: 24px;
  height: 24px;
  
  background-image: url(${({image}) => image});
  transition: 0.4s;
  :hover {
    transition: 0.4s;
    opacity: 0.3;
  }
  
  :active {
    opacity: 0.7;
  }
`;

const ProductAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const ItemCounter = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  display: flex;
  min-height: 190px;
  padding-bottom: 20px;
  :only-child {
    min-height: 190px;
  }
`;

const InfoBlock = styled.div`
  height: 100%;
  width: 164px;
`;

const Image = styled.div`
  width: 121px;
  height: 190px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({image}) => image});
`;

export default ProductItem;
