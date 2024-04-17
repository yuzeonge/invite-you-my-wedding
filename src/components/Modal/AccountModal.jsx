import styled from "styled-components";
import { Dimed } from "./ConnectInfoModal";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import { useSetRecoilState } from "recoil";
import modalState from "../../store/infoModal";

import Button from "../Button/Button";
import { toast } from "react-toastify";

const bridegroom_infos = [
  {
    name: "소종범",
    account: "농협은행 302 03 26791691",
  },
  {
    name: "소영식·박숙녀",
    account: "경남은행 538 07 0060320",
  },
];

const bride_infos = [
  {
    name: "권유정",
    account: "카카오뱅크 3333 154 277124",
  },
  {
    name: "권태건·마은영",
    account: "국민은행 8424 0101 446383",
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
          <ItemWrapper>
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
              {/* <Text className="bd col">{isBride ? "신부 혼주측" : "신랑 혼주측"} </Text> */}
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
          </ItemWrapper>
          <ButtonWrapper>
            <Button onClick={() => setIsOpenModal(true)}>축하 연락하기</Button>
          </ButtonWrapper>
        </Flex>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}

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

  @media (max-width: 290px) {
    max-width: 280px;
  }
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
  width: 80%;
  height: 40%;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
`;

const ItemWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Text = styled.p`
  font-size: 1.25rem;

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
  padding: 2px 10px;
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
