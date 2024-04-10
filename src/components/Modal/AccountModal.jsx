import styled from "styled-components";
import { Dimed, Container, Flex } from "./ConnectInfoModal";
import { ToastContainer } from "react-toastify";

export default function AccountModal() {
  return (
    <>
      <Container>
        <Flex></Flex>
      </Container>
      <ToastContainer />
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}
