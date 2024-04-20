import styled from "styled-components";
import { Flex, Text } from "../styles";
export default function Ending() {
  return (
    <Container>
      <Flex>
        <Text>행복하게 잘 살겠습니다.</Text>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 100px;
`;
