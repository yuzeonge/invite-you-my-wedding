import styled from "styled-components";
import { Container, EmptyBox, Flex } from "../styles";
import VerticalBall from "../components/VerticalBall";
import Button from "../components/Button/Button";
import HeartIcon from "../components/Icons/heart";

import DdayCount from "../components/DdayCount";

export default function CalendarSection({ countDay }) {
  return (
    <Container>
      <Flex>
        <VerticalBall />
        <EmptyBox />
        <Text>2024년 6월 2일</Text>
        <Text>점심 12시 10분</Text>
        <Image src="image/calendar.png" />
        <Text>
          종범
          <HeartIcon src="image/heart.png" />
          유정 결혼식이 {countDay}일 남았습니다
        </Text>
        <DdayCount seconds={new Date()} />
      </Flex>
    </Container>
  );
}

const TextWrapper = styled.p``;

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-bottom: 50px;
  width: 75%;
`;
