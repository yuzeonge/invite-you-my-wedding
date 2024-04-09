import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transferTime from "../../core/dateFormat";

// todo 아이콘 넣기 react-icone ?? fontawesome?
export default function GuestBookList({ posts, onDelete, onEdit }) {
  return (
    <Container>
      <Flex>
        {posts.map(post => (
          <GuestBookItem>
            <Text className="title">{post.title}</Text>
            <Text className="author">From. {post.author}</Text>
            <Text className="date">{transferTime(new Date(post.date))}</Text>
          </GuestBookItem>
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

const GuestBookItem = styled.div`
  width: 85%;
  height: 35px;
  background-color: white;
  text-align: center;
  flex-direction: row;
  margin: 5px;
  position: relative;
`;
const Text = styled.p`
  font-size: 1.2rem;
  color: #67676728;
  position: absolute;

  &.date {
    color: #333;
    right: 6px;
    top: 2px;

    font-size: 1rem;
  }

  &.title {
    color: #333;
    left: 10px;
    top: 2px;
  }
  &.author {
    color: #a9a9a9;
    bottom: 2px;
    right: 6px;
  }
`;
