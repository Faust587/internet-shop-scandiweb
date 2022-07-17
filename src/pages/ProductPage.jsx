import React, {useMemo} from "react";
import styled from "styled-components";
import Album from "../components/product/album/Album";
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_BY_ID_QUERY} from "../graphQL/Queries";
import {useParams} from "react-router-dom";
import ProductInfo from "../components/product/info/ProductInfo";
import _ from "lodash";

const ProductPage = () => {

  const {productId} = useParams();
  const {data, loading, error} = useQuery(GET_PRODUCT_BY_ID_QUERY, { variables: { id: productId } });

  const productInfo = useMemo(() => {
    if (!data) return null;
    return _.pick(data["product"], ["id", "name", "brand", "attributes", "description", "prices", "gallery"])
  }, [data]);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const images = data["product"]["gallery"];

  return (
    <ProductWrapper>
      <Album images={images} />
      <ProductInfo product={productInfo} />
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  padding: 50px 100px 0;
  display: flex;
`;

export default ProductPage;
