import styled from "styled-components";
import useCopyClipboard from "../hooks/useCopyClipboard";

const Items = [
  { name: "종범", account: "234", connect: "" },
  { name: "소영식", account: "", connect: "" },
  { name: "박숙녀", account: "", connect: "" },
  { name: "유정", account: "경남은행 50648396", connect: "" },
  { name: "권태건", account: "", connect: "" },
  { name: "마은영", account: "", connect: "" },
];

export default function ConnectModal({ ref, onOpenModal, isOpenModal }) {
  const { copyToClipboard } = useCopyClipboard;

  return (
    <Container className={isOpenModal ? "" : "disable"}>
      <Flex>
        <Text className="title">마음 전하실 곳</Text>
        <InfoItemWrapper className="row">
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

          <InfoItemWrapper>
            <InfoItemWrapper className="row">
              <Text>신부</Text>
              <B>권유정</B>
            </InfoItemWrapper>
            <InfoItemWrapper className="row">
              <ButtonBox>💬</ButtonBox>
              <ButtonBox onClick={() => copyToClipboard(Items[3].account)}>💵</ButtonBox>
            </InfoItemWrapper>
          </InfoItemWrapper>
        </InfoItemWrapper>

        <InfoItemWrapper className="row m">
          <InfoItemWrapper className="row m">
            <InfoItemWrapper>
              <Text className="line">신랑 측</Text>
              <InfoItemWrapper className="row">
                <Text>아버지</Text>
                <B>소영식</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <Text>어머니</Text>
                <B>박숙녀</B>
              </InfoItemWrapper>
              <InfoItemWrapper className="row">
                <ButtonBox>📞</ButtonBox>
                <ButtonBox>💵</ButtonBox>
              </InfoItemWrapper>
            </InfoItemWrapper>
          </InfoItemWrapper>
          <InfoItemWrapper className="row">
            <InfoItemWrapper>
              <Text className="line">신부 측</Text>
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

        <CloseButton onClick={onOpenModal}>닫기</CloseButton>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50%;
  z-index: 999;
  width: 100%;

  &.disable {
    display: none;
  }
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
  &.line {
    margin-bottom: 5px;
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

const CloseButton = styled.button`
  &:hover {
    color: #9b9389;
    background-color: #b2aaa1;
  }
  border: none;
  border: 0px;
  background-color: #c8bbad;
  font-family: "GowunDodum-Regular";
  border-radius: 10px;
  padding: 8px 12px;
  width: 45%;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 7px;
  box-shadow: 2px 2px 0.3em #67676728;
`;
