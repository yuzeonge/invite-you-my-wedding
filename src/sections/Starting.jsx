import VerticalBall from "../components/VerticalBall";
import { Container, TextWrapper, Text, EmptyBox } from "../styles";
import styled from "styled-components";

export default function Starting() {
  return (
    <Container>
      <StyledWrapper>
        <Text className="invite-text" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1200">
          Invite you
        </Text>
        <Text className="t2 mb-48" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1800">
          소중한 당신을 초대합니다.
        </Text>
      </StyledWrapper>
      <VerticalBall />
      <EmptyBox />
      <TextWrapper>
        <Text className="t2 mt-50" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          소종범·권유정 결혼합니다.
        </Text>
      </TextWrapper>
      <EmptyBox />
      <EmptyBox />
      <EmptyBox />
      <Image src="image/main-card.jpeg" data-aos="flip-left" data-aos-delay="100" data-aos-duration="900" />
      <EmptyBox />
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
`;

const StyledWrapper = styled(TextWrapper)`
  .invite-text {
    margin-top: 38%;
    margin-bottom: 30px;
    padding: 4px;
    font-size: 50px;
    font-family: "yleeMortalHeart-ImmortalMemory";
  }
`;
