import React, {useState} from "react";
import styled from "styled-components";
import Slider from "./Slider";
import MainImage from "./MainImage";

const Album = ({images}) => {

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <SliderWrapper>
      <Slider images={images} setImage={setSelectedImage} />
      <MainImage images={images} imageId={selectedImage} />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  display: flex;
`;

export default Album;
