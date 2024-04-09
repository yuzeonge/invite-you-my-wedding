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
      <TextWrapper>
        <Text className="t1" data-aos="fade-up">
          Invite you
        </Text>
        <Text className="t2" data-aos="fade-up">
          소중한 당신을 초대합니다.
        </Text>
      </TextWrapper>
      <VerticalBall />
      <TextWrapper>
        <Text className="t2">결혼합니다.</Text>
      </TextWrapper>
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

const ButtonWrapper = styled.div`
  padding: 24px;
  margin: 80px 0 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
