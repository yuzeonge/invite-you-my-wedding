import styled from "styled-components";
import Button from "./Button";

const Items = [
  { name: "종범", account: "234", connect: "" },
  { name: "소영식", account: "", connect: "" },
  { name: "박숙녀", account: "", connect: "" },
  { name: "유정", account: "", connect: "" },
  { name: "권태건", account: "", connect: "" },
  { name: "마은영", account: "", connect: "" },
];

export default function ConnectModal() {
  return (
    <Container>
      <Flex>
        <Text className="title">마음 전하실 곳</Text>

        <InfoItemWrapper className="row">
          <InfoItemWrapper>
            <InfoItemWrapper className="row">
              <Text>신부</Text>
              <B>권유정</B>
            </InfoItemWrapper>
            <InfoItemWrapper className="row">
              <ButtonBox>💬</ButtonBox>
              <ButtonBox>💵</ButtonBox>
            </InfoItemWrapper>
          </InfoItemWrapper>

          <InfoItemWrapper>
            <InfoItemWrapper className="row">
              <Text>신랑</Text>
              <B>소종범</B>
            </InfoItemWrapper>
            <InfoItemWrapper className="row">
              <ButtonBox>💬</ButtonBox>
              <ButtonBox>💵</ButtonBox>
            </InfoItemWrapper>
          </InfoItemWrapper>
        </InfoItemWrapper>

        <InfoItemWrapper className="row m">
          <InfoItemWrapper className="row m">
            <InfoItemWrapper>
              <InfoItemWrapper className="row">
                <Text>아버지</Text>
                <B>권태건</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <Text>어머니</Text>
                <B>마은영</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <ButtonBox>📞</ButtonBox>
                <ButtonBox>💵</ButtonBox>
              </InfoItemWrapper>
            </InfoItemWrapper>
          </InfoItemWrapper>
          <InfoItemWrapper className="row">
            <InfoItemWrapper>
              <InfoItemWrapper className="row">
                <Text>아버지</Text>
                <B>권태건</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <Text>어머니</Text>
                <B>마은영</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <ButtonBox>📞</ButtonBox>
                <ButtonBox>💵</ButtonBox>
              </InfoItemWrapper>
            </InfoItemWrapper>
          </InfoItemWrapper>
        </InfoItemWrapper>

        <Button>축하 화환 안내</Button>
        <Button>닫기</Button>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 80%;
  height: 40%;
  border-radius: 12px;
  padding: 17px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
`;

const InfoItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.row {
    flex-direction: row;
  }
  &.m {
    margin: 10px;
  }
`;

const B = styled.p`
  font-size: 1.5rem;
  color: #717171;
  font-weight: bold;
  margin-left: 5px;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: #a2a2a2;
  &.b {
    font-weight: bold;
  }
  &.grey1 {
    color: #717171;
  }
  &.grey2 {
    color: #4d4d4d;
  }
  &.title {
    font-size: 1.7rem;
    font-weight: bold;
    margin: 15px;
    color: #797979;
  }
`;

const ButtonBox = styled.div`
  background-color: #d1d0d0;
  border-radius: 50px;
  margin: 6px;
  padding: 5px;
  width: 20px;
  text-align: center;
`;
