import styled from "styled-components";
import { Dimed, Container, Flex } from "./ConnectInfoModal";
import { ToastContainer } from "react-toastify";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import { useSetRecoilState } from "recoil";
import modalState from "../../store/infoModal";

import Button from "../Button/Button";
import { toast } from "react-toastify";

const bridegroom_infos = [
  {
    name: "소종범",
    account: "경남은행 50648396",
  },
  {
    name: "소영식 · 박숙녀",
    account: "경남은행 50648396",
  },
];

const bride_infos = [
  {
    name: "권유정",
    account: "경남은행 50648396",
  },
  {
    name: "권태건 · 마은영",
    account: "경남은행 50648396",
  },
];

export default function AccountModal({ isBride, isModalOpen, setIsModalOpen }) {
  const setIsOpenModal = useSetRecoilState(modalState);
  const { copyToClipboard } = useCopyClipboard();
  const notify = () => toast("계좌번호가 복사되었습니다.");

  const view_infos = isBride ? bride_infos : bridegroom_infos;
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Flex>
          <Text className="bd col">{isBride ? "신부측" : "신랑측"}💐</Text>
          <TextWrapper>
            <Text className="bd col">{isBride ? "신부" : "신랑"}</Text>
            <Text className="bd"> {view_infos[0].name}</Text>
            <Text>{view_infos[0].account}</Text>
            <CopyButton
              onClick={() => {
                copyToClipboard(view_infos[0].account);
                notify();
              }}
            >
              복사
            </CopyButton>
          </TextWrapper>
          <TextWrapper>
            <Text className="bd col">{isBride ? "신부 혼주측" : "신랑 혼주측"} </Text>
            <Text className="bd">{view_infos[1].name}</Text>

            <Text>{view_infos[1].account}</Text>
            <CopyButton
              onClick={() => {
                copyToClipboard(view_infos[1].account);
                notify();
              }}
            >
              복사
            </CopyButton>
          </TextWrapper>
          <ButtonWrapper>
            <Button onClick={() => setIsOpenModal(true)}>축하 연락하기</Button>
          </ButtonWrapper>
        </Flex>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const Text = styled.p`
  font-size: 1.3rem;

  &.bd {
    font-weight: 600;
  }
  &.col {
    color: #717171;
  }
`;

const CopyButton = styled.div`
  background-color: #e9e2d2;
  color: #a0988f;
  border-radius: 50px;
  margin: 6px;
  padding: 5px;
  width: 20px;
  text-align: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
