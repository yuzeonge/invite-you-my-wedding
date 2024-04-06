import { Container, Flex, Text, Flower } from "../styles";
import PostList from "../components/PostList";
import PostModal from "../components/PostModal";
import { useEffect, useState } from "react";
import styled from "styled-components";

// firbase
import { firestore } from "../configs/firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc, query } from "firebase/firestore";

export default function Posting() {
  const [postList, setPostList] = useState([]);
  const posts = [
    { text: "축하해", author: "공주", password: "1234" },
    { text: "축하해", author: "공주", password: "1234" },
    { text: "축하해", author: "공주", password: "1234" },
  ];

  const getPosts = async () => {
    const q = query(collection(firestore, "posting"));
    const querySnapshot = await getDocs(q);

    const postList = querySnapshot.docs.map(doc => {
      const { date } = doc.data();
      return {
        id: doc.id,
        ...doc.data(),
        date: new Date(date.seconds * 1000 + date.nanoseconds / 1000000),
      };
    });

    console.log(postList);
    setPostList(postList.reverse());
  };

  useEffect(() => {
    getPosts();
  }, []);

  const onDelete = () => {
    // 파이어베이스 공부하기
  };
  const onEdit = () => {
    // 파이어베이스 공부하기
  };

  return (
    <Container>
      <PostModal />
      <Flex className="blue">
        <Flower src="image/flower.png" className="f-t" />
        <Text>신랑 신부에게 축하글을 남겨주세요.</Text>
        <GoToWriteButton onClick={() => {}}>글쓰기✏️</GoToWriteButton>
        <PostList posts={postList} onDelete={onDelete} onEdit={onEdit} />
        <Flower src="image/flower.png" className="f-b" />
      </Flex>
    </Container>
  );
}

const GoToWriteButton = styled.div`
  position: flex;
  right: 0;
`;
