import styled from "styled-components";
import { Dimed, Container, Flex } from "./ConnectInfoModal";
import { ToastContainer } from "react-toastify";

const man_infos = [
  {
    name: "소종범",
    account: "경남은행 50648396",
  },
  {
    name: "소영식",
    account: "경남은행 50648396",
  },
  {
    name: "박숙녀",
    account: "경남은행 50648396",
  },
];

const women_infos = [
  {
    name: "권유정",
    account: "경남은행 50648396",
  },
  {
    name: "권태건",
    account: "경남은행 50648396",
  },
  {
    name: "마은영",
    account: "경남은행 50648396",
  },
];

export default function AccountModal({ isMan = false }) {
  const view_infos = isMan ? man_infos : women_infos;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container className={isModlaOpen ? "" : disable}>
        <Flex>
          <Text>{isMan ? "신랑측" : "신부측"}</Text>
          <TextWrapper>
            <Text>
              {isMan ? "신랑" : "신부"} {view_infos[0].name}
            </Text>
            <Text>{view_info[0].account}</Text>
            <CopyButton
              onClick={() => {
                copyToClipboard(people_info[1].account);
                notify();
              }}
            >
              복사
            </CopyButton>
            <Text>
              {isMan ? "신랑 아버지" : "신부 아버지"}
              {view_info[1].name}
            </Text>
            <Text>{view_info[1].account}</Text>
            <CopyButton
              onClick={() => {
                copyToClipboard(people_info[1].account);
                notify();
              }}
            >
              복사
            </CopyButton>
          </TextWrapper>
        </Flex>
      </Container>
      <ToastContainer />
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 1.5rem;
`;

const CopyButton = styled.div`
  background-color: #d1d0d0;
  border-radius: 50px;
  margin: 6px;
  padding: 5px;
  width: 20px;
  text-align: center;
  cursor: pointer;
`;
