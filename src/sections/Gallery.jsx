import { Container, Flex, TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import MultiSlick from "../components/Slick/MultiSlick";
import { useState, useRef, createRef } from "react";
import ImageModal from "../components/Modal/ImageModal";
import { _imageSrcArray, _path } from "../constants/image";

export default function Gallery() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [tab, setTab] = useState(0);

  const slideRef = useRef(null);

  const testRef = useRef(null);
  const handleOpenModal = (src, index) => {
    setImageSrc(`${_path}/${src}`);
    setTab(index);
    setIsImageModalOpen(true);
    console.log(slideRef.current);
    slideRef.current?.slickGoTo(index);
  };
  return (
    <Container>
      <Flex className="blue" ref={testRef}>
        <EmptyBox />
        <TextCategoryTitle>gallery</TextCategoryTitle>
        <SliderWraper>
          <MultiSlick>
            {_imageSrcArray.map((src, index) => (
              <WeddingImage src={`${_path}/${src}`} onClick={() => handleOpenModal(src, index)} key={index} />
            ))}
          </MultiSlick>
        </SliderWraper>
        <EmptyBox />
      </Flex>
      <ImageModal ref={slideRef} isModalOpen={isImageModalOpen} src={imageSrc} handleCloseModal={() => setIsImageModalOpen(false)} tab={tab} />
    </Container>
  );
}

const SliderWraper = styled.div`
  position: relative;
  width: 100%;
  .slick-slide {
  }
`;

const WeddingImage = styled.img`
  width: 100%;
  height: auto;
  padding: 2px 4px;
  box-sizing: border-box;
`;
