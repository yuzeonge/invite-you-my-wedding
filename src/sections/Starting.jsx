import VerticalBall from "../components/VerticalBall";
import { Container, TextWrapper, Text } from "../styles";

export default function Starting() {
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
    </Container>
  );
}
