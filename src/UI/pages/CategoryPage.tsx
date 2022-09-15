import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import ProductGrid from "../components/category/productGrid/ProductGrid";

const CategoryPage = () => {

  const {categoryName} = useParams();

  return (
    <CategoryContentBlock>
      <CategoryLabel>
        {categoryName?.toUpperCase()}
      </CategoryLabel>
      <ProductGrid />
    </CategoryContentBlock>
  );
}

const CategoryContentBlock = styled.div`
  margin: 50px 100px 0 100px;
`;

const CategoryLabel = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  padding-bottom: 20px;
`;

export default CategoryPage;
