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
        <Text>종범💖유정 결혼식이 {countDay}일 남았습니다</Text>
        <Button>캘린더에 추가하기</Button>
        <Calendar />
      </Flex>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.4rem;
  margin: 60px;
`;
