import styled from "styled-components";
import { Container, EmptyBox, Flex } from "../styles";
import VerticalBall from "../components/VerticalBall";
import HeartIcon from "../components/Icons/heart";

import DdayCount from "../components/DdayCount";

export default function CalendarSection() {
  return (
    <Container>
      <Flex>
        <VerticalBall />
        <EmptyBox />
        <EmptyBox />
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text>2024년 6월 2일</Text>
          <Text>오후 12시 10분</Text>
          <Text>창원 힐스카이 10층 힐그랜드홀</Text>
        </TextWrapper>
        <EmptyBox />
        <EmptyBox />
        <Image src="image/calendar.png" data-aos="flip-left" data-aos-easing="ease-out-cubic" />
        <EmptyBox />
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text className="countDownText">
            종범
            <HeartIcon src="image/heart.png" />
            유정 결혼식이
          </Text>
          <Flex>
            <DdayCount targetDate={new Date(2024, 5, 2, 12, 10)} />
          </Flex>
        </TextWrapper>
      </Flex>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.countDownText {
    padding-top: 12px;
    padding-bottom: 4px;
  }
`;

const Image = styled.img`
  margin-bottom: 50px;
  width: 75%;
`;

const TextWrapper = styled.div``;
