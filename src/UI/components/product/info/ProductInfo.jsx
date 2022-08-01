import React, {useMemo, useState} from "react";
import styled from "styled-components";
import Title from "./title/Title";
import Attributes from "./attributes/Attributes";
import AttributeContext from "../../../../context/ProductAttributeContext";
import ProductFooter from "./footer/ProductFooter";
import _ from "lodash";

const ProductInfo = ({product}) => {

  const initArray = useMemo(() => {
    const array = new Array(product["attributes"].length);
    for (let i = 0; i < array.length; i++) {
      array[i] = 0;
    }
    return array;
  }, [product["attributes"].length]);

  const [activeItem, setActiveItem] = useState(initArray);
  const providerItemValue = useMemo(() => ({activeItem, setActiveItem}), [activeItem, setActiveItem]);

  return (
    <ProductWrapper>
      <Title name={product.name} brand={product.brand} />
      <AttributeContext.Provider value={providerItemValue}>
        {product["attributes"].map(({id, type, name, items}, index) => {
          return <Attributes key={id} index={index} type={type} name={name} items={items} />
        })}
        <ProductFooter product={_.pick(product, ["id", "attributes", "description", "prices", "brand", "name", "gallery", "inStock"])} />
      </AttributeContext.Provider>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  width: 100%;
  padding-left: 100px;
`;

export default ProductInfo;
