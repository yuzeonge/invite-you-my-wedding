import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// todo 아이콘 넣기 react-icone ?? fontawesome?
export default function CongratsItem({ items, onDelete, onEdit }) {
  return (
    <Container>
      <Flex>
        {items.map(item => (
          <ItemBax>
            <Text>{item.text}</Text>
            <Text className="author">From. {item.author}</Text>
          </ItemBax>
        ))}
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItemBax = styled.div`
  width: 85%;
  height: 35px;
  background-color: white;
  text-align: center;
  flex-direction: row;
  margin: 5px;
`;
const Text = styled.p`
  font-size: 1.2rem;
  color: #67676728;
  &.author {
    color: #a9a9a9;
  }
`;
