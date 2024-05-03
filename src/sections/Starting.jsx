import { TextWrapper, Text } from "../styles";
import styled from "styled-components";

export default function Starting() {
  return (
    <Container>
      <StyledWrapper>
        <InviteText
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1200"
          style={{ fontFamily: "yleeMortalHeart-ImmortalMemory" }}
        >
          Invite you
        </InviteText>
        <Text className="t2 mb-48" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1800">
          소중한 당신을 초대합니다.
        </Text>
      </StyledWrapper>
      <ImgWrapper data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1800">
        <Image src="image/main-card.jpeg" />
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 50px;
`;

const ImgWrapper = styled.div`
  @media (max-width: 290px) {
    height: 450px;
  }

  margin-top: 10px;
  background-color: #f0ede6;
  align-items: start;
  justify-content: center;
  height: 520px;
`;
const Image = styled.img`
  width: 100%;
`;

const InviteText = styled.p`
  font-size: 1.2rem;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 4rem;
  padding: 4px;
`;

const StyledWrapper = styled(TextWrapper)``;
