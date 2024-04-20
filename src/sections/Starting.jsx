import { TextWrapper, Text, EmptyBox } from "../styles";
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
      <ImgWrapper data-aos="flip-left" data-aos-delay="3000" data-aos-duration="1800">
        <Image src="image/main-card.jpeg" />
      </ImgWrapper>
      <EmptyBox />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 110px;
`;

const ImgWrapper = styled.div`
  margin-top: 10px;
  background-color: #f0ede6;
  align-items: start;
  justify-content: center;
  height: 520px;
`;
const Image = styled.img`
  width: 100%;
`;

const StyledWrapper = styled(TextWrapper)`
  .invite-text {
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 4rem;
    padding: 4px;
    font-family: "yleeMortalHeart-ImmortalMemory";
  }
`;
