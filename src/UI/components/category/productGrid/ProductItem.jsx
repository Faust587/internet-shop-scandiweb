import React from "react";
import styled from "styled-components";
import cartLogo from "../../../../assets/images/cart-logo.svg"
import {useNavigate} from "react-router-dom";

const ProductItem = ({name, price, image, inStock, id}) => {

  const navigate = useNavigate();

  const routeToProductPage = () => {
    navigate(`product/${id}`);
  }

  return (
    <ItemBlock onClick={routeToProductPage}>
      {inStock && <ProductCartWrapper className="cartButton"><ProductCartButton/></ProductCartWrapper>}
      {!inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
      <ProductImage image={image} inStock={inStock}>
      </ProductImage>
      <TextBlock>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
      </TextBlock>
    </ItemBlock>
  );
}

const ProductCartWrapper = styled.div`
  width: 0;
  height: 0;
  position: relative;
  top: 350px;
  left: 75%;
  opacity: 0;
`;

const ProductCartButton = styled.div`
  width: 52px;
  height: 52px;
  background-color: #5ECE7B;
  background-image: url(${cartLogo});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 26px;
  position: absolute;
  left: 0;
  transition: 0.3s;

  :hover {
    background-color: #3da156;
  }

  :active {
    background-color: #21e552;
  }
`;

const OutOfStock = styled.div`
  height: 0;
  position: relative;
  top: 200px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #8D8F9A;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 360px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({image}) => image});
  opacity: ${({inStock}) => inStock ? 1 : 0.4};

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.div`
  padding: 10px 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`;

const ProductPrice = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 386px;
  height: 444px;
  padding: 16px;

  :hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }
  :hover > .cartButton {
    opacity: 1;
  }
`;

export default ProductItem;
