import React, {FC} from "react";
import styled from "styled-components";

type propsType = {
  name: string,
  brand: string
}

const Title: FC<propsType> = ({name, brand}) => {

  return (
    <>
      <Name>{name}</Name>
      <Brand>{brand}</Brand>
    </>
  );
}

const Name = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 15px;
`;

const Brand = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export default Title;
