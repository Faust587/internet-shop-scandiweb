import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS_QUERY} from "../../../../graphQL/Queries";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProductPreloader from "../../preloader/ProductPreloader";


const ProductGrid = () => {

  const {currencyId} = useSelector(state => state.currencyReducer);

  const {categoryName} = useParams();

  const {data, loading, error} = useQuery(GET_PRODUCTS_QUERY, { variables: { category: categoryName } });


  if (loading) return <ProductPreloader />;
  if (error) return <pre>{error.message}</pre>

  return (
    <ProductGridWrapper>
      {
        data["category"]["products"].map(({name, prices, gallery, inStock, id}) => {
          const {currency, amount} = prices[currencyId];
          return <ProductItem key={id} id={id} image={gallery[0]} inStock={inStock} price={`${amount}${currency.symbol}`} name={name} />
        })
      }
    </ProductGridWrapper>
  );
}

const ProductGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ProductGrid;
