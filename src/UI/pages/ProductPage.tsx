import React from "react";
import styled from "styled-components";
import Album from "../components/product/album/Album";
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_BY_ID_QUERY} from "../../graphQL/Queries";
import {useParams} from "react-router-dom";
import ProductInfo from "../components/product/info/ProductInfo";
import {attributesType, priceType, productType} from "../../types";

export type productTypes = {
  name: string,
  description: string,
  attributes: attributesType[],
  inStock: boolean, id: string,
  prices: priceType[],
  brand: string,
  gallery: string[]
}

const ProductPage = () => {

  const {productId} = useParams();
  const {data, loading, error} = useQuery<{product: productType }>(GET_PRODUCT_BY_ID_QUERY, { variables: { id: productId } });

  if (loading) return <>"Loading..."</>;
  if (error || !data) return <pre>{error?.message ? error.message : "Server error"}</pre>

  const productInfo = () => {
    return {
      id: data["product"].id,
      name: data["product"].name,
      brand: data["product"].brand,
      attributes: data["product"].attributes,
      description: data["product"].description,
      prices: data["product"].prices,
      gallery: data["product"].gallery,
      inStock: data["product"].inStock,
    };
  }

  const images = data["product"]["gallery"];

  return (
    <ProductWrapper>
      <Album images={images} />
      <ProductInfo product={productInfo()} />
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  padding: 50px 100px 0;
  display: flex;
`;

export default ProductPage;
