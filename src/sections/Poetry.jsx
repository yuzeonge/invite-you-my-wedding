import Button from "../components/Button";
import styled from "styled-components";
import { Flower } from "../styles";

export default function Poetry() {
  return (
    <Container>
      <FormWrapper>
        <BackgoundImage src="image/form-background.png" />
        <Flower className="f-t" src="image/flower1.png" />
        <TextWrapper className="align-l">
          <Text>유월의 어느 초여름,</Text>
          <Text>늘 곁에서 아껴주셨던 고마운 분들을 모십니다.</Text>
          <Text>있는 그대로 사랑하고</Text>
          <Text>서로의 존재를 감사하며</Text>
          <Text>인연이었던 저희 두 사람</Text>
          <Text>같이 있으면 기분 좋아지는 그대롸 함께</Text>
          <Text>인생의 길을 걸어가겠습니다.</Text>
        </TextWrapper>
        {/* todo: flower1.png -> flower.png */}
        <Flower className="f-b" src="image/flower1.png" />
      </FormWrapper>
      <FormWrapper className="w1">
        <TextRowWrapper>
          <TextWrapper className="alignt-l">
            <Text className="t1">소영식 박숙녀의 아들</Text> <Text className="t1">권태건 마은영의 딸</Text>
          </TextWrapper>
          <TextWrapper className="align-r">
            <Text className="t2">종범</Text> <Text className="t2">유정</Text>
          </TextWrapper>
        </TextRowWrapper>
        <Button>연락하기</Button>
        <Button>축하 화환 안내</Button>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.w1 {
    margin: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextRowWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px;
  padding: 20px;
  border-bottom: solid 1px #d6e6dd;
  border-top: solid 1px #d6e6dd;
`;
const BackgoundImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -9999;
`;

const Image = styled.img`
  margin: 33px;
  &.img-t {
    margin-top: -10%;
  }
  &.img-b {
    margin-bottom: -10%;
  }
`;

const Text = styled.span`
  font-size: 1.3rem;
  margin: 2px;
  width: 100%;
  text-align: center;
  &.t1 {
    font-size: 1.4rem;
    text-align: left;
  }
  &.t2 {
    display: flex;
    margin-left: 15px;
    font-size: 1.6rem;
  }
`;
