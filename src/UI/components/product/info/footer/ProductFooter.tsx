import React, {FC, useCallback, useContext} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import AttributeContext from "../../../../../context/ProductAttributeContext";
import {currencyIdSelectorType, useCart} from "../../../../../hooks/useCart";
import {productType} from "../../../../../types";

type propsType = {
  product: Pick<Pick<productType, "prices"
    | "id"
    | "description"
    | "name"
    | "brand"
    | "attributes"
    | "gallery"
    | "inStock">, "prices" | "id" | "description" | "name" | "brand" | "attributes" | "gallery" | "inStock">
}

const ProductFooter: FC<propsType> = ({product}) => {
  const {addToCart} = useCart();
  const {activeItem} = useContext(AttributeContext);
  const currencyId = useSelector((state: currencyIdSelectorType) => state.currencyReducer.currencyId);
  const amount = product["prices"][currencyId]["amount"];
  const currencySymbol = product["prices"][currencyId]["currency"]["symbol"];

  const addProductToCartList = useCallback(() => {
    const productObject = {
      ...product,
      amount: 1,
      index: null,
      chosenAttributes: activeItem
    };
    addToCart(productObject);
  }, [product, activeItem, addToCart]);

  return (
    <FooterWrapper>
      <Title>
        PRICE:
      </Title>
      <PriceBlock>
        {
          amount + currencySymbol
        }
      </PriceBlock>
      {product.inStock ? <AddToCartButton onClick={addProductToCartList}>ADD TO CART</AddToCartButton> : null}
      <DescriptionBlock dangerouslySetInnerHTML={{__html: product["description"]}} />
    </FooterWrapper>
  );
}

const AddToCartButton = styled.div`
  margin-top: 30px;
  width: 292px;
  height: 52px;
  background-color: #5ECE7B;
  transition: 0.25s;
  
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 52px;
  text-align: center;

  :hover {
    background-color: #2c8041;
  }
`;

const DescriptionBlock = styled.div`
  margin-top: 30px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1D1F22;
`;

const FooterWrapper = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

const PriceBlock = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export default ProductFooter;
