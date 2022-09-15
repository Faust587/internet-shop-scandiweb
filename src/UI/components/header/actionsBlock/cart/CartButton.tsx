import React, {useState} from "react";
import styled from "styled-components";
import CartLogo from "../../../../../assets/images/empty-cart.svg";
import {useCart} from "../../../../../hooks/useCart";
import CartPopupMenu from "../popupMenu/CartPopupMenu";

const CartButton = () => {
  const {getProductAmount} = useCart();
  const productAmount = getProductAmount();
  const [active, setActive] = useState(false);
  return (
    <CartImage onClick={() => setActive(prevState => !prevState)}>
      {productAmount === 0 ? null : <ProductCounter>{productAmount}</ProductCounter>}
      {active ? <CartPopupMenu setActive={setActive} /> : null}
    </CartImage>
  );
}

const CartImage = styled.div`
  margin-left: 20px;
  display: flex;
  align-self: center;
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url(${CartLogo});
  position: relative;
`;

const ProductCounter = styled.div`
  left: 16px;
  top: -7px;
  
  position: absolute;
  width: 20px;
  height: 20px;
  
  background-color: #000;
  border-radius: 10px;

  text-align: center;
  line-height: 20px;
  
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #fff;
`;

export default CartButton;
