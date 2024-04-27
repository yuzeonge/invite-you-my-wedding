import { Flex, TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import MultiSlick from "../components/Slick/MultiSlick";
import { useState, useRef } from "react";
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
    slideRef.current?.slickGoTo(index);
  };
  return (
    <Container>
      <Flex className="blue" ref={testRef} data-aos="fade-up" data-aos-duration="900">
        <EmptyBox />
        <TextCategoryTitle>gallery</TextCategoryTitle>
        <SliderWraper>
          <MultiSlick>
            {_imageSrcArray.map((src, index) => (
              <WeddingImage src={`${_path}/${src}`} onClick={() => handleOpenModal(src, index)} key={index} loading="lazy" decoding="async" />
            ))}
          </MultiSlick>
        </SliderWraper>
        <EmptyBox />
      </Flex>
      <ImageModal ref={slideRef} isModalOpen={isImageModalOpen} src={imageSrc} handleCloseModal={() => setIsImageModalOpen(false)} tab={tab} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
const SliderWraper = styled.div`
  position: relative;
  width: 100%;
`;

const WeddingImage = styled.img`
  @media (max-width: 414px) {
    min-height: 301px;
  }
  @media (max-width: 375px) {
    min-height: 273px;
  }
  @media (max-width: 360px) {
    min-height: 270px;
  }
  @media (max-width: 360px) {
    min-height: 264px;
  }
  @media (max-width: 290px) {
    min-height: 220px;
  }
  width: 100%;
  min-height: 318px;
  padding: 2px 4px;
  box-sizing: border-box;
  object-fit: cover;
  object-position: center center;
`;
