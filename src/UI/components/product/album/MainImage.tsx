import React, {FC} from "react";
import styled from "styled-components";

type propsType = {
  imageId: number,
  images: string[]
}

type styledPropsType = {
  image: string
}

const MainImage: FC<propsType> = ({imageId, images}) => {

  return (
    <ImageBox image={images[imageId]} />
  );
}

const ImageBox = styled.div<styledPropsType>`
  width: 530px;
  height: 546px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({image}) => image});
  transition: 0.5s;
`;

export default MainImage;
