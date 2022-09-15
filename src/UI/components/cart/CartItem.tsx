import styled from "styled-components";
import {useSelector} from "react-redux";
import Attributes from "./attributes/Attributes";
import AttributeContext from "../../../context/CartPageContext";
import React, {FC, useMemo, useState} from "react";
import minusSquare from "../../../assets/images/minus-square.svg";
import plusSquare from "../../../assets/images/plus-square.svg";
import sliderLeft from "../../../assets/images/slider-left.svg";
import sliderRight from "../../../assets/images/slider-right.svg";
import {currencyIdSelectorType, useCart} from "../../../hooks/useCart";
import {priceType} from "../../../types";

type propsType = {
  prices: priceType[],
  chosenAttributes: number[],
  id: string,
  gallery: string[],
  name: string,
  brand: string,
  amount: number,
  // @ts-ignore
  attributes: attributesType[]
}

type styledPropsType = {
  image: string
}

type styledSliderPropsType = {
  image: string,
  top: number,
  left: number
}

const CartItem: FC<propsType> = (props) => {

  const currencyId = useSelector((state: currencyIdSelectorType) => state.currencyReducer.currencyId);
  const {amount, currency} = props["prices"][currencyId];
  const [sliderPosition, setSliderPosition] = useState(0);

  const [activeItems, setActiveItems] = useState(props.chosenAttributes);
  const providerItemsValue = useMemo(() => ({activeItems, setActiveItems}), [activeItems, setActiveItems]);

  const {incrementProductAmount, decrementProductAmount} = useCart();

  const counterPlusHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    incrementProductAmount({productId: props.id, attributes: props.chosenAttributes});
  }

  const counterMinusHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    decrementProductAmount({productId: props.id, attributes: props.chosenAttributes});
  }

  const nextSlide = () => {
    if (sliderPosition !== props["gallery"].length - 1) setSliderPosition((prevState) => prevState + 1);
  }

  const prevSlide = () => {
    if (sliderPosition !== 0) setSliderPosition((prevState) => prevState - 1);
  }

  return (
    <ItemWrapper>
      <InfoBlock>
        <Name>{props.name}</Name>
        <Brand>{props.brand}</Brand>
        <Price>{`${currency.symbol} ${amount}`}</Price>
        <AttributeContext.Provider value={providerItemsValue}>
          {
            props.attributes.map(({id, type, name, items}, index) => {
              return <Attributes key={id} index={index} type={type} name={name} items={items} />
            })
          }
        </AttributeContext.Provider>
      </InfoBlock>
      <SliderWrapper>
        <CounterWrapper>
          <CounterBlock onClick={counterPlusHandler} image={plusSquare} />
          <ProductAmount>{props.amount}</ProductAmount>
          <CounterBlock onClick={counterMinusHandler} image={minusSquare} />
        </CounterWrapper>
        <Slider image={props["gallery"][sliderPosition]}>
          <SliderButtons onClick={() => prevSlide()} image={sliderLeft} top={255} left={140} />
          <SliderButtons onClick={() => nextSlide()} image={sliderRight} top={255} left={170} />
        </Slider>
      </SliderWrapper>
    </ItemWrapper>
  );
}

const Slider = styled.div<styledPropsType>`
  position: relative;
  width: 200px;
  height: 288px;
  transition: 1s;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(${({image}) => image});
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoBlock = styled.div``;

const SliderWrapper = styled.div`
  display: flex;
`;

const SliderButtons = styled.div<styledSliderPropsType>`
  position: absolute;
  width: 24px;
  height: 24px;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  background-position: 100%;
  background-image: url(${({image}) => image});
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4px;
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

const CounterBlock = styled.div<styledPropsType>`
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

const Price = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

const Name = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
`;

const Brand = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;


export default CartItem;
