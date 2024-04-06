import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transferTime from "../core/dateFormat";

// todo 아이콘 넣기 react-icone ?? fontawesome?
export default function PostList({ posts, onDelete, onEdit }) {
  return (
    <Container>
      <Flex>
        {posts.map(post => (
          <PostItem>
            <Text className="title">{post.title}</Text>
            <Text className="author">From. {post.author}</Text>
            <Text className="date">{transferTime(new Date(post.date))}</Text>
          </PostItem>
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

const PostItem = styled.div`
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

  &.date {
    color: #333;
    right: 4px;
    bottom: 4px;
    position: absolute;
    font-size: 1rem;
  }

  &.title {
    color: #333;
  }
  &.author {
    color: #a9a9a9;
  }
`;
