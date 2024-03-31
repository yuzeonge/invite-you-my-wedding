import { Container, Flex } from "../styles";
import styled from "styled-components";

const WEDDING_INFO = [
  { title: "신부측 피로연 안내", text: "24년 6월 2일, 4시 장소 000, 자세한 문의는 참석여부 안내는 신부 상주측으로 연락주세요." },
  { title: "식사 안내", text: "" },
  { title: "축하 화환 안내", text: "" },
  { title: "마음 전하실 곳", text: "" },
];

export default function WeddingInfo() {
  return (
    <Container>
      <Flex className="wedding-info">
        <Line />
        {WEDDING_INFO.map(item => {
          return (
            <>
              <Box>
                <Triangle />
                <Text className="t-info">{item.title}</Text>
              </Box>
              <Line />
            </>
          );
        })}
      </Flex>
      <Flex className="wedding-info">
        <Text>비대면으로 축하를 전하고자</Text>
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
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.3rem;
  &.t1 {
    font-size: 1.5rem;
  }
  &.t-info {
    margin: 10px;
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(6px * 1.732) solid #666666;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin-right: 3px;
  &.rotate {
    border-bottom: 0px;
    border-top: calc(6px * 1.732) solid #666666;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Line = styled.div`
  height: 1px;
  width: 40%;
  background-color: #d6e6dd;
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
