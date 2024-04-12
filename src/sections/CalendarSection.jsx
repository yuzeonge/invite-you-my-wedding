import styled from "styled-components";
import { Container, EmptyBox, Flex } from "../styles";
import VerticalBall from "../components/VerticalBall";
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
        <EmptyBox />
        <Image src="image/calendar.png" />
        <EmptyBox />
        <Text>
          종범
          <HeartIcon src="image/heart.png" />
          유정 결혼식이
        </Text>
      </Flex>
      <Flex>
        <DdayCount targetDate={new Date(2024, 5, 2, 12, 10)} />
      </Flex>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 4px;
`;

const Image = styled.img`
  margin-bottom: 50px;
  width: 75%;
`;
