import styled from "styled-components";
import { Container, Flex } from "../styles";
import Calendar from "../components/CustomCalendar";
import VerticalBall from "../components/VerticalBall";
import Button from "../components/Button";

export default function CalendarSection({ countDay }) {
  return (
    <Container>
      <Flex>
        <VerticalBall />
        {/* todo: countDay는 굳이 props로 안받고 이 컴포넌트 내부에서 계산해도됨 */}
        <Text>종범💖유정 결혼식이 {countDay}일 남았습니다</Text>
        <Button>캘린더에 추가하기</Button>
        <Image src="image/calendar.png" />
      </Flex>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.4rem;
  margin: 60px;
`;

const Image = styled.img`
  margin: 10px;
`;
