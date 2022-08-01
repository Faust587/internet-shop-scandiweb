import React from "react";
import styled from "styled-components";
import {useCart} from "../../../../../hooks/useCart";
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES_QUERY} from "../../../../../graphQL/Queries";
import {useSelector} from "react-redux";
import ProductItem from "../productItem/ProductItem";

const CartPopupMenu = () => {

  const {data, loading, error} = useQuery(GET_CURRENCIES_QUERY);
  const currencyId = useSelector(state => state.currencyReducer.currencyId);
  const productList = useSelector(state => state.cartReducer.productList);
  const {getProductAmount, getTotalAmount} = useCart();
  const productAmount = getProductAmount();
  const totalAmount = getTotalAmount();

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <CartLayout>
      <ItemsCounter>
        <BoldText>My Bag,</BoldText>
        {` ${productAmount} items`}
      </ItemsCounter>
      <ProductWrapper>
        {
          productList.map((item, index) => {
            return <ProductItem key={`${item.id}-${index}`} {...item} currencyId={currencyId} />
          })
        }
      </ProductWrapper>
      <div>
        <TotalAmount>
          <span>Total</span>
          <span>{totalAmount}{data["currencies"][currencyId].symbol}</span>
        </TotalAmount>
        <ButtonsWrapper>
          <ViewBagButton>VIEW BAG</ViewBagButton>
          <CheckOutButton>CHECK OUT</CheckOutButton>
        </ButtonsWrapper>
      </div>
    </CartLayout>
  );
}

const ProductWrapper = styled.div`
  height: 100%;
  margin-top: 20px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #d2d2d2;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #5ECE7B;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2c8041;
  }
`;

const CartLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px;
  position: absolute;
  width: 325px;
  height: 677px;
  
  left: -275px;
  top: 40px;

  box-shadow: 0 4px 35px rgba(168, 172, 176, 1);
  background-color: #fff;
  z-index: 1;
`;

const TotalAmount = styled.div`
  padding: 40px 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewBagButton = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 80px;
  height: 43px;

  background: #FFFFFF;
  border: 1px solid #1D1F22;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const CheckOutButton = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 80px;
  height: 43px;

  background: #5ECE7B;
  color: white;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const ItemsCounter = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

export default CartPopupMenu;
