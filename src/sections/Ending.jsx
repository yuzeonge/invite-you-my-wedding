import { Container, Flex, Text, EmptyBox } from "../styles";
export default function Ending() {
  return (
    <Container>
      <Flex>
        <Text>행복하게 잘 살겠습니다.</Text>
        <EmptyBox />
        <EmptyBox />
        <img src="image/ending-image.png" />
      </Flex>
    </Container>
  );
}
