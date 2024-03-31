import { Container, Flex, Text, Flower } from "../styles";
import CongratsItem from "../components/CongratsItem";

export default function Posting() {
  const items = [
    { text: "축하해", author: "공주", password: "delete" },
    { text: "축하해", author: "공주", password: "delete" },
    { text: "축하해", author: "공주", password: "delete" },
  ];

  const onDelete = () => {
    // 파이어베이스 공부하기
  };
  const onEdit = () => {
    // 파이어베이스 공부하기
  };

  return (
    <Container>
      <Flex className="blue">
        <Flower src="image/flower1.png" className="f-t" />
        <Text>신랑 신부에게 축하글을 남겨주세요.</Text>
        <CongratsItem items={items} onDelete={onDelete} onEdit={onEdit} />
        <Flower src="image/flower2.png" className="f-b" />
      </Flex>
    </Container>
  );
}
