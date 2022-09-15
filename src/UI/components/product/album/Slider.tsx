import React, {FC, useCallback, useState} from "react";
import styled from "styled-components";
import bottomIcon from "../../../../assets/images/closed.svg"
import topIcon from "../../../../assets/images/opened.svg"

type propsType = {
  images: string[],
  setImage: React.Dispatch<React.SetStateAction<number>>
}

type buttonStyledType = {
  active: boolean
  disabled: boolean
}

type sliderItemStyledType = {
  visible: boolean,
  image: string
}

type sliderPositionStyledType = {
  position: number
}

const Slider: FC<propsType> = ({setImage, images}) => {

  const [sliderPosition, setSliderPosition] = useState(0);

  const [buttonDown, setButtonDown] = useState(true);
  const [buttonTop, setButtonTop] = useState(false);

  const elementsCounter = images.length;

  const goToPreviousSlide = useCallback(() => {
    if (sliderPosition !== 0) setSliderPosition(sliderPosition + 1);
    (sliderPosition + 1 === 0) ? setButtonTop(false) : setButtonDown(true);
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    if (sliderPosition !== -1 * (elementsCounter - 5)) setSliderPosition(sliderPosition - 1);
    (sliderPosition - 1 === -(elementsCounter - 5)) ? setButtonDown(false) : setButtonTop(true);
  }, [sliderPosition, elementsCounter]);

  const isVisible = useCallback((index: number) => {
    return (index + sliderPosition >= 0 && index + sliderPosition <= 4);
  }, [sliderPosition]);

  return (
    <ContentWrapper>
      {elementsCounter > 5 && <TopButton active={buttonTop} disabled={buttonTop} onClick={goToPreviousSlide} />}
      <ImageSliderWrapper>
        <ImageSlider position={sliderPosition}>
          {images.map((item, index) => {
            return <SliderItem onClick={() => setImage(index)} visible={isVisible(index)}  key={item} image={item}/>
          })}
        </ImageSlider>
      </ImageSliderWrapper>
      {elementsCounter > 5 && <BottomButton active={buttonDown} disabled={buttonDown} onClick={goToNextSlide} />}
    </ContentWrapper>
  );
}

const TopButton = styled.div<buttonStyledType>`
  margin: 0 auto;
  width: 12px;
  height: 8px;
  background-image: url(${topIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${({active}) => active ? 1 : 0};
  pointer-events: ${({active}) => active ? "auto" : "none"};
`;

const BottomButton = styled.div<buttonStyledType>`
  margin: 0 auto;
  width: 12%;
  height: 8px;
  background-image: url(${bottomIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${({active}) => active ? 1 : 0};
  pointer-events: ${({active}) => active ? "auto" : "none"};
`;

const ImageSliderWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 530px;
  overflow: hidden;
`;

const ImageSlider = styled.div<sliderPositionStyledType>`
  top: ${({position}) => position * 105}px;
  position: absolute;
  width: 100%;
  height: 500px;
  transition: 0.5s;
`;

const SliderItem = styled.div<sliderItemStyledType>`
  margin: 5px;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({image}) => image});
  opacity: ${({visible}) => visible ? 1 : 0};
  transition: 1s;
`;

const ContentWrapper = styled.div`
  width: 110px;
`;

export default Slider;
