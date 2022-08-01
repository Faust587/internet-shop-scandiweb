import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/images/a-logo.svg";

const ImageLogo = ({width, height}) => {

  return (
    <ImageWrapper>
      <img src={logo} width={width} height={height} alt={"Logo"} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default ImageLogo;
