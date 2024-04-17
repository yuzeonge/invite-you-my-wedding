import styled from "styled-components";
import { useRecoilState } from "recoil";
import infoModalState from "../../store/infoModal";
import "react-toastify/dist/ReactToastify.css";

const people_info = [
  { account: "경남은행 538 07 0060320 소종범", phone: "010-2586-7540" },
  { account: "카카오뱅크 3333154277124 권유정", phone: "010-5064-8396" },
  { account: "경남은행 538 07 0060320 소영식", phone: "010-6557-2640" },
  { account: "박숙녀", phone: "010-2271-7540" },
  { account: "국민은행 8424 0101 446383 권태건", phone: "010-7111-2364" },
  { account: "마은영", phone: "010-3012-8399" },
];

export default function ConnectInfoModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(infoModalState);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Flex>
          <Text className="h1">마음 전하는 곳💐</Text>
          <GuideWrapper>
            <NameWrapper>
              *<CallingBox>축하 전화하기📞</CallingBox> <GuideText>를 누르면 전화번호부로 연결됩니다. </GuideText>
            </NameWrapper>
            <NameWrapper>
              *<MessageBox>축하 메시지 ✉️</MessageBox>
              <GuideText>를 누르면 문자 메시지로 연결됩니다.</GuideText>
            </NameWrapper>
          </GuideWrapper>
          <NameListWrapper>
            <Text className="h2">신랑💍신부</Text>
            <NameWrapper>
              <Text>신랑 </Text> <B>소종범</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[0].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[0].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신부 </Text> <B>권유정</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[1].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[1].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 blue">신랑</Text>
              <Text className="h2 ">혼주측</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>신랑 아버지 </Text> <B>소영식</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[2].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[2].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신랑 어머니 </Text> <B>박숙녀</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[3].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[3].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 pink">신부</Text>
              <Text className="h2 ">혼주측</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>신부 아버지 </Text> <B>권태건</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[4].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[4].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신부 어머니 </Text> <B>마은영</B>
              <CallingBox onClick={() => (window.document.location.href = `tel:${people_info[5].phone}`)}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => (window.document.location.href = `sms:${people_info[5].phone}`)}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>

          <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
        </Flex>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}
const NameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;
const Text = styled.p`
  font-size: 1.4rem;
  &.h1 {
    font-size: 1.7rem;
    font-weight: 600;
    color: #5e5e5e;
  }
  &.h2 {
    font-size: 1.5rem;
    color: #5e5d5d;
  }
  &.blue {
    color: #5baddc;
    font-weight: 600;
  }
  &.pink {
    color: #f8acb9;
    font-weight: 600;
  }
`;

const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const GuideText = styled.p`
  color: #504f4f;
  font-size: 1.2rem;
`;

const B = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const MessageBox = styled.div`
  border-radius: 5px;
  background-color: #f7deabac;
  padding: 2px 5px;
  cursor: pointer;
`;

const CallingBox = styled.div`
  border-radius: 5px;
  background-color: #9ad49b81;
  padding: 2px 5px;
  cursor: pointer;

  &.onebtn {
    text-align: center;
    width: 137px;
  }
`;

export const Dimed = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.3;
  display: block;

  &.disable {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  width: 100%;
  max-width: 435px;

  &.disable {
    display: none;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 85%;
  height: 40%;
  border-radius: 12px;
  padding: 45px 17px 25px 17px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
  gap: 30px;
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
