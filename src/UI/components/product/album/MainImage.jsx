import React from "react";
import styled from "styled-components";

const MainImage = ({imageId, images}) => {

  return (
    <ImageBox image={images[imageId]} />
  );
}

const ImageBox = styled.div`
  width: 530px;
  height: 546px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({image}) => image});
  transition: 0.5s;
`;

export default MainImage;
