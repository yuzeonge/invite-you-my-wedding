import styled from "styled-components";
import Button from "../Button/Button";
import { Dimed } from "./ConnectInfoModal";
import TextInput from "../Input/TextInput";
import { useState } from "react";
import ReactDom from "react-dom";
import { toast } from "react-toastify";

const ConfirmModal = ({ fetchDeleteGuestBook, isModalOpen, handleCloseModal, guestBookItem }) => {
  const [password, setPassword] = useState("");

  const notify = () => toast("방명록이 삭제되었습니다.");

  const onDeleteGuestBook = () => {
    if (password !== guestBookItem.password) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    notify();
    fetchDeleteGuestBook(guestBookItem.id);

    setTimeout(() => {
      handleCloseModal();
    }, 300);
  };

  if (!isModalOpen) return null;

  return ReactDom.createPortal(
    <>
      <Container className={isModalOpen ? "" : "disabled"}>
        <Header>
          <HeaderText>방명록을 작성하실 때 입력하신 비밀번호를 입력하시면 삭제됩니다.</HeaderText>
        </Header>
        <Wrapper>
          <TextWrapper>
            <TextInput value={password} onChange={e => setPassword(e.target.value)} type="password" label={"비밀번호입력"} />
          </TextWrapper>
          <ButtonWrapper>
            <Button className="button point" onClick={onDeleteGuestBook}>
              삭제
            </Button>
            <Button className="button" onClick={handleCloseModal}>
              닫기
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>,
    document.getElementById("modal")
  );
};

const Container = styled.div`
  @media (max-width: 290px) {
    min-width: 275px;
    max-width: 275px;
    border-radius: 8px;
  }

  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 11;
  min-width: 368px;
  min-height: 148px;
  border-radius: 15px;

  overflow: hidden;

  margin: 0 auto;
  &.disable {
    display: none;
  }
  box-shadow: 2px 3px 3px 0.2em #67676728;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 16px;

  padding-top: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;

  .button {
    height: 32px;
    min-width: 72px !important;
    padding: 0;
    margin-left: 8px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`;

const HeaderText = styled.p`
  font-size: 1.2rem;
`;
const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 24px 0;
`;

export default ConfirmModal;
