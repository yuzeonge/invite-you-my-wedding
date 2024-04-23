import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Link target="" href="https://github.com/devchaeyoung/invite-you-my-wedding">
        <Flex>
          <Text>&@copyright</Text>
          <Text>Dev chaeyoung</Text>
        </Flex>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: #a8a8a8;
  position: relative;
  width: 100%;
  height: 56px;
  margin: 0;
`;

const Text = styled.p`
  /* font-family: "yleeMortalHeart-ImmortalMemory"; */
  color: white;
  text-align: center;
  height: 100%;
`;

const Link = styled.a`
  text-decoration: none;
`;
const Flex = styled.div`
  position: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px 10px 0px 10px;
`;
