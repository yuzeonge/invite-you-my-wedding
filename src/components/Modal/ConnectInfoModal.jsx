import styled from "styled-components";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import { useRecoilState } from "recoil";
import infoModalState from "../../store/infoModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const people_info = [
  { name: "종범", account: "", phone: "010-2586-7540" },
  { name: "소영식", account: "", phone: "010-6557-2640" },
  { name: "박숙녀", account: "", phone: "010-2271-7540" },
  { name: "유정", account: "경남은행 50648396", phone: "010-5064-8396" },
  { name: "권태건", account: "국민은행 8424 0101 446383", phone: "010-7111-2364" },
  { name: "마은영", account: "", phone: "010-3012-8399" },
];

export default function ConnectInfoModal() {
  const { copyToClipboard } = useCopyClipboard();

  const notify = () => toast("계좌번호가 복사되었습니다.");

  const [isModalOpen, setIsModalOpen] = useRecoilState(infoModalState);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
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
                <ButtonBox
                  onClick={() => {
                    copyToClipboard(people_info[3].account);
                    notify();
                  }}
                >
                  💵
                </ButtonBox>
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
                  <ButtonBox onClick={() => (window.document.location.href = `tel:${people_info[1].phone}`)}>📞</ButtonBox>
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
                  <ButtonBox onClick={() => (window.document.location.href = `tel:${people_info[4].phone}`)}>📞</ButtonBox>
                  <ButtonBox>💵</ButtonBox>
                </InfoItemWrapper>
              </InfoItemWrapper>
            </InfoItemWrapper>
          </InfoItemWrapper>

          <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
        </Flex>
      </Container>
      <ToastContainer position="bottom-center" autoClose={1500} hideProgressBar={true} />
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}

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

const Container = styled.div`
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
  cursor: pointer;
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
