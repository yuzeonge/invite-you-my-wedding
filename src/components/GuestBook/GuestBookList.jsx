import styled from "styled-components";
import transferTime from "../../core/dateFormat";
import { Button } from "@mui/material";
import ConfirmModal from "../Modal/ConfirmModal";
import { useState } from "react";

// todo 아이콘 넣기 react-icone ?? fontawesome?
export default function GuestBookList({ posts, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteGuestBookItem, setDeleteGuestBookItem] = useState(null);

  const handleClickModalOpen = post => {
    setDeleteGuestBookItem(post);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Flex>
        {posts.map(post => (
          <GuestBookItem onClick={() => handleClickModalOpen(post)} key={post.id}>
            <Text className="title">{post.title}</Text>
            <Text className="author">From. {post.author}</Text>
            <Text className="date">{transferTime(new Date(post.date))}</Text>
          </GuestBookItem>
        ))}
      </Flex>
      <ConfirmModal
        fetchDeleteGuestBook={onDelete}
        isModalOpen={isModalOpen}
        handleCloseModal={() => {
          setIsModalOpen(false);
        }}
        guestBookItem={deleteGuestBookItem}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 225px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
const GuestBookItem = styled(Button)`
  width: 85%;
  height: 100%;
  min-height: 34px;
  background-color: white !important;
  flex-direction: row;
  margin: 5px !important;
  padding: 8px !important;
  position: relative;
  justify-content: start !important;
  font-family: "GowunDodum-Regular" !important;
`;
const Text = styled.p`
  font-size: 1.2rem;
  color: #67676728;

  &.date {
    color: #333;
    right: 6px;
    top: 2px;
    font-size: 1rem;
    position: absolute;
  }

  &.title {
    color: #333;
    width: 264px;
    text-align: start;
    padding: 0 !important;
  }

  &.author {
    color: #a9a9a9;
    bottom: 2px;
    right: 6px;
    position: absolute;
  }
`;
