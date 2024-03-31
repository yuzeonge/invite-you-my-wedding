import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Flex>
        <Text>&@copyright</Text>
        <Text>Dev chaeyoung</Text>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  background-color: #a8a8a8;
  position: relative;
  width: 100%;
  height: 50px;
`;

const Text = styled.p`
  font-family: "yleeMortalHeart-ImmortalMemory";
  color: white;
  text-align: center;
  height: 100%;
`;

const Flex = styled.div`
  position: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
