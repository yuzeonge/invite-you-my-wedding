import VerticalBall from "../components/VerticalBall";
import { Container, TextWrapper, Text, EmptyBox } from "../styles";
import Button from "../components/Button/Button";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import modalState from "../store/infoModal";

export default function Starting() {
  const setIsOpenModal = useSetRecoilState(modalState);
  return (
    <Container>
      <StyledWrapper>
        <Text className="invite-text" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1200">
          Invite you
        </Text>
        <Text className="t2" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1400">
          2024년 6월 2일 일요일 12시 10분
        </Text>
        <Text className="t2" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1400">
          창원 힐스테이트 웨딩홀
        </Text>
        <Text className="t2 mb-48" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1800">
          소중한 당신을 초대합니다.
        </Text>
      </StyledWrapper>
      <VerticalBall />
      <EmptyBox />
      <TextWrapper>
        <Text className="t2 mt-50" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          소종범 권유정 결혼합니다.
        </Text>
      </TextWrapper>
      <EmptyBox />
      <EmptyBox />
      <EmptyBox />
      <Image src="image/main-card.jpeg" data-aos="flip-left" data-aos-delay="100" data-aos-duration="900" />
      <EmptyBox />
      <ButtonWrapper>
        <Anchor href="#location">
          <Button className="button" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
            위치 확인하기
          </Button>
        </Anchor>
        <Button
          onClick={() => {
            setIsOpenModal(true);
          }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          연락하기
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Anchor = styled.a`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    width: 100%;
  }
`;

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
const ButtonWrapper = styled.div`
  padding: 24px;
  margin: 80px 0 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
