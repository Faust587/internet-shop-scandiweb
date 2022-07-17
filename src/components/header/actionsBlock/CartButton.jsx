import React from "react";
import styled from "styled-components";
import CartLogo from "../../../assets/images/empty-cart.svg";

const CartButton = () => {

  return <CartImage onClick={() => alert("Clicked")}/>;
}

const CartImage = styled.div`
  margin-left: 20px;
  display: flex;
  align-self: center;
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url(${CartLogo});
`;

export default CartButton;
