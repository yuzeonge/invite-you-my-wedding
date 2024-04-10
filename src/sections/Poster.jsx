import Button from "../components/Button/Button";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import modalState from "../store/infoModal";

export default function Poster() {
  const setModalState = useSetRecoilState(modalState);
  return (
    <Container>
      <ImageWrapper>
        <RightTextBox>
          <Text>종범</Text>
          <Text>유정</Text>
        </RightTextBox>
        <Image src="image/poster-image.jpeg" />
        <Absolute>
          <Text className="f6">Yujeong & Jongbum</Text>
          <Text>창원 힐스카이웨딩 10층 힐그랜드홀</Text>
          <Text className="f3">2024.06.02 Jun 12:10</Text>
        </Absolute>
      </ImageWrapper>
      <ButtonWrapper>
        <Button onClick={() => setModalState(true)}>축하 연락하기</Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Absolute = styled.div`
  position: absolute;
  bottom: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: #fff;

  &.f6 {
    font-family: "yleeMortalHeart-ImmortalMemory";
    font-size: 6rem;
    margin-bottom: 10px;
  }
  &.f3 {
    font-family: "yleeMortalHeart-ImmortalMemory";
    font-size: 3rem;
  }
  &.f2 {
    font-family: "yleeMortalHeart-ImmortalMemory";
    font-size: 2rem;
  }
`;

const RightTextBox = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: right;
  flex-direction: column;
  margin-left: -5%;
  margin-top: 5%;
`;

const ButtonWrapper = styled.div`
  padding: 24px;
  margin: 80px 0 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
