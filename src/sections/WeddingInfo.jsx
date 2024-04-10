import { useState } from "react";
import { Container, Flex } from "../styles";
import styled from "styled-components";

export default function WeddingInfo() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);

  return (
    <>
      <Container>
        <Flex className="wedding-info">
          <InfoWrapper className={active2 ? "active2" : "disable"} onClick={() => setActive2(prev => !prev)}>
            <AbsoluteLine />
            <Box>
              <Triangle className={active2 ? "active" : ""} />

              <Text className="info-title">마음 전하실 곳</Text>
            </Box>
            <TextWrapper className={active2 ? "active2" : "disable"}>
              <Flex className="wedding-info">
                <Text className="top-t">비대면으로 축하를 전하고자</Text>
                <Text>하시는 분들을 위해</Text>
                <Text>계좌 번호를 기재하였습니다.</Text>
                <Text>너그러운 마음으로 양해 부탁드리겠습니다.</Text>
              </Flex>
              <Box>
                <ItemBox className="b-box">
                  <Text className="t1">신랑측</Text>
                  <Text className="t1">축하 송금 안내</Text>
                </ItemBox>
                <ItemBox className="p-box">
                  <Text className="t1">신부측</Text>
                  <Text className="t1">축하 송금 안내</Text>
                </ItemBox>
              </Box>
            </TextWrapper>
          </InfoWrapper>
          <InfoWrapper className={active1 ? "active1" : "disable"} onClick={() => setActive1(prev => !prev)}>
            <AbsoluteLine />
            <Box>
              <Triangle className={active1 ? "active" : ""} />
              <Text className="info-title">축하 화환 안내</Text>
            </Box>
            <TextWrapper className={active1 ? "active1" : "disable"}>
              <Flex className="wedding-info">
                <Text className="t-info">축하 화환 관련은 아래 힐스카이플라워로 문의 부탁드립니다.</Text>
                <Text>010-3836-9782 / 010-3221-9782</Text>
              </Flex>
            </TextWrapper>
          </InfoWrapper>
          <Line />
        </Flex>
      </Container>
    </>
  );
}

const Text = styled.p`
  font-size: 1.3rem;
  &.t1 {
    font-size: 1.5rem;
  }
  &.t-info {
    margin: 10px;
    width: 80%;
  }
  &.info-title {
    margin: 10px;
  }
  &.top-t {
    margin-top: 20px;
  }
`;

const TextWrapper = styled.div`
  &.active {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &.disable {
    display: none;
  }
`;
const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.active1 {
    height: 120px;
  }
  &.active2 {
    height: 280px;
    transition: all 0.7s ease-in-out;
  }
  &.disable {
    height: 38.5px;
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(6px * 1.732) solid #666666;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin-right: 3px;

  &.active {
    transform: rotate(180deg);
  }

  transition: all 0.3s ease-in-out;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: #e6d6d6;
`;

const AbsoluteLine = styled(Line)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e6d6d6;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 0.3em #67676728;

  &.b-box {
    background-color: #81b4ef;
  }

  &.p-box {
    background-color: #f3cedb;
  }
`;
