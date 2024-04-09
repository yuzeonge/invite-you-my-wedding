import { Container, Flex, TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import SliderBar from "../components/SliderBar";

export default function Gallery() {
  for (let i = 0; i < 19; i++) {
    console.log({ number: i });
  }
  return (
    <Container>
      <Flex className="blue">
        <EmptyBox />
        <TextCategoryTitle>gallery</TextCategoryTitle>
        <SliderWraper>
          <SliderBar>
            <WeddingImage src={`image/gallery/1.png`} />
            <WeddingImage src="image/gallery/4.jpeg" />
            <WeddingImage src="image/gallery/3.jpeg" />
            <WeddingImage src="image/gallery/2.jpeg" />
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
  width: 168px;
  height: 280px;
`;
