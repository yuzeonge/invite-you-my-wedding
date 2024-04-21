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
  const notify = target => toast(`${target}님의 계좌가 복사되었습니다.`);

  const view_infos = isBride ? bride_infos : bridegroom_infos;
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Flex>
          <Text className="bd col modal-title">{isBride ? "신부측" : "신랑측"}💐</Text>
          <Text className="copy-info">계좌번호를 누르면 계좌가 복사됩니다.</Text>
          <ItemWrapper>
            <TextWrapper>
              <Text className="bd col">{isBride ? "신부" : "신랑"}</Text>
              <Text className="bd"> {view_infos[0].name}</Text>
              <Text
                className="copy-text"
                onClick={() => {
                  copyToClipboard(view_infos[0].account);
                  notify(view_infos[0].name);
                }}
              >
                {view_infos[0].account}
              </Text>
              <CopyButton
                onClick={() => {
                  copyToClipboard(view_infos[0].account);
                  notify(view_infos[0].name);
                }}
              >
                복사
              </CopyButton>
            </TextWrapper>
            <TextWrapper>
              <Text className="bd">{view_infos[1].name}</Text>
              <Text
                className="copy-text"
                onClick={() => {
                  copyToClipboard(view_infos[1].account);
                  notify(view_infos[1].name);
                }}
              >
                {view_infos[1].account}
              </Text>
              <CopyButton
                onClick={() => {
                  copyToClipboard(view_infos[1].account);
                  notify(view_infos[1].name);
                }}
              >
                복사
              </CopyButton>
            </TextWrapper>
          </ItemWrapper>
          <ButtonWrapper>
            <Button className="button" onClick={() => setIsOpenModal(true)}>
              축하 연락하기
            </Button>
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

  @media (max-width: 360px) {
    max-width: 280px;
  }

  &.disable {
    display: none;
  }
`;

export const Flex = styled.div`
  @media (max-width: 375px) {
    width: 30rem;
    border-radius: 10px;
    padding: 16px 10px;
  }
  @media (max-width: 360px) {
    width: 34rem;
  }
  @media (max-width: 290px) {
    width: 30rem;
    border-radius: 10px;
    padding: 16px 10px;
  }
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
  @media (max-width: 375px) {
    margin: 10px 0;
    gap: 5px;
  }
  @media (max-width: 290px) {
    gap: 3px;
  }
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const TextWrapper = styled.div`
  @media (max-width: 360px) {
    gap: 4px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Text = styled.p`
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
  }

  font-size: 1.3rem;

  &.bd {
    font-weight: 600;
  }
  &.modal-title {
    font-size: 1.6rem;
  }
  &.col {
    color: #717171;
  }
  &.copy-info {
    font-size: 1.2rem;
  }
  .copy-text {
    cursor: pointer;
  }
`;
const CopyButton = styled.div`
  border-radius: 8px;
  padding: 0 1px;
  background-color: #f0ede6;
  cursor: pointer;
  width: 3rem;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  @media (max-width: 375px) {
    .button {
      font-size: 1.1rem;
    }
  }
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
