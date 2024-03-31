import styled from "styled-components";

export default function WelcomeComponent() {
  return (
    <Container>
      <Flex></Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
