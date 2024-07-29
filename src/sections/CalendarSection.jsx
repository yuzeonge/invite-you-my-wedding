import styled from "styled-components";
import { EmptyBox, Flex } from "../styles";
import HeartIcon from "../components/Icons/heart";

import { TheTimes } from "../components/DdayCount";

export default function CalendarSection() {
  return (
    <Container>
      <Flex>
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text>2024년 6월 2일</Text>
          <Text>오후 12시 10분</Text>
          <Text>창원 힐스카이 10층 힐그랜드홀</Text>
        </TextWrapper>
        <EmptyBox />
        <Image src="image/calendar.png" data-aos="flip-left" data-aos-easing="ease-out-cubic" />
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text className="countDownText">
            종범
            <HeartIcon src="image/heart.png" />
            유정
          </Text>

          <Flex>
            <TheTimes targetDate={new Date(2024, 5, 2, 12, 10)} />
          </Flex>
        </TextWrapper>
      </Flex>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  padding-top: 48px;
  padding-bottom: 84px;
`;

const Text = styled.p`
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
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
