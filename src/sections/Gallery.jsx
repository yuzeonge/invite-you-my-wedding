import { Container, Flex, TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import SliderBar from "../components/SliderBar";

export default function Gallery() {
  return (
    <Container>
      <Flex className="blue">
        <EmptyBox />
        <TextCategoryTitle>gallery</TextCategoryTitle>
        <SliderWraper>
          <SliderBar>
            <WeddingImage src="image/gallery1.png" />
            <WeddingImage src="image/gallery2.png" />
            <WeddingImage src="image/gallery1.png" />
            <WeddingImage src="image/gallery2.png" />
          </SliderBar>
        </SliderWraper>
        <EmptyBox />
      </Flex>
    </Container>
  );
}

const SliderWraper = styled.div`
  position: relative;
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WeddingImage = styled.img`
  width: 170px;
  height: 280px;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;
