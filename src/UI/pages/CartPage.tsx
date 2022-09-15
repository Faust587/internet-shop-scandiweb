import styled from "styled-components";
import {useSelector} from "react-redux";
import CartItem from "../components/cart/CartItem";
import {currencyIdSelectorType, productListSelectorType, useCart} from "../../hooks/useCart";
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES_QUERY} from "../../graphQL/Queries";
import React from "react";
import {useNavigate} from "react-router-dom";

const CartPage = () => {

  const navigate = useNavigate();
  const currencyId = useSelector((state: currencyIdSelectorType) => state.currencyReducer.currencyId);
  const productList = useSelector((state: productListSelectorType) => state.cartReducer.productList);
  const {getTotalAmount, getProductAmount} = useCart();

  const {data, loading, error} = useQuery(GET_CURRENCIES_QUERY);

  const productAmount = getProductAmount();

  const executeOrder = () => {
    if (productAmount !== 0) {
      navigate("/success-order")
    }
  }

  if (loading) return null;
  if (error || !data) return <pre>{error?.message ? error.message : "SERVER ERROR"}</pre>

  return (
    <CartWrapper>
      <Title>CART</Title>
      {
        productList.map((product, index) => {
          return <div key={`${product.id}-${index}`}><Line /><CartItem {...product} /></div>
        })
      }
      <SummaryWrapper>
        <Line />
        <TitleSummary>
          Quantity
          <TitleValue>
            {` ${productAmount}`}
          </TitleValue>
        </TitleSummary>
        <TitleSummary>
          Total
          <TitleValue>
            {` ${data["currencies"][currencyId].symbol} ${getTotalAmount()}`}
          </TitleValue>
        </TitleSummary>
        <OrderButton onClick={() => executeOrder()}>
          ORDER
        </OrderButton>
      </SummaryWrapper>
    </CartWrapper>
  );
}

const SummaryWrapper = styled.div`
  padding-top: 60px;
`;

const CartWrapper = styled.div`
  padding: 50px 100px 100px;
`;

const OrderButton = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 43px;
  background: #5ECE7B;
  color: #fff;
`;

const TitleSummary = styled.div`
  padding: 20px 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

const TitleValue = styled.span`
  font-weight: 700;
`;

const Line = styled.div`
  height: 1px;
  background-color: #E5E5E5;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 50px;
`;

export default CartPage;
