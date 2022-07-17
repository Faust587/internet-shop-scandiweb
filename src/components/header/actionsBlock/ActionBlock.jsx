import React from "react";
import styled from "styled-components";
import ChangeCurrencyButton from "./ChangeCurrencyButton";
import CartButton from "./CartButton";

const ActionBlock = () => {

  return (
    <ActionBlockWrapper>
      <ChangeCurrencyButton />
      <CartButton />
    </ActionBlockWrapper>
  );
}

const ActionBlockWrapper = styled.div`
  min-width: 200px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default ActionBlock;
