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
        <Text className="invite-text" data-aos="fade-up">
          Invite you
        </Text>
        <Text className="t2">2024년 6월 2일 일요일 12시 10분</Text>
        <Text className="t2">창원 힐스테이트 웨딩홀</Text>
        <Text className="t2 mb-48" data-aos="fade-up">
          소중한 당신을 초대합니다.
        </Text>
      </StyledWrapper>
      <VerticalBall />
      <TextWrapper>
        <Text className="t2 mt-50">소종범 권유정 결혼합니다.</Text>
      </TextWrapper>
      <EmptyBox />
      <EmptyBox />
      <EmptyBox />
      <Image src="image/main-card.jpeg" />
      <EmptyBox />
      <ButtonWrapper>
        <Button onClick={() => {}}>위치 확인하기</Button>
        <Button
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          연락하기
        </Button>
      </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  padding: 24px;
  margin: 80px 0 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
