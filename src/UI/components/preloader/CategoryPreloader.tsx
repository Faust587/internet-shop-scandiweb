import React from "react";
import styled from "styled-components";
import categoryPreload from "../../../assets/images/category-preloader.gif"

const CategoryPreloader = () => {

  return (
    <Container />
  );
}

const Container = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${categoryPreload});
`;

export default CategoryPreloader;
