import { Container, Flex, Flower } from "../styles";
import GuestBookList from "../components/GuestBook/GuestBookList";
import PostModal from "../components/Modal/PostModal";
import { useEffect, useState } from "react";
import styled from "styled-components";

// firbase
import { firestore } from "../configs/firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc, query } from "firebase/firestore";

export default function Posting() {
  const [postList, setPostList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const getGuestBooks = async () => {
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

    // props.date를 기준으로 정렬된 새로운 배열 생성
    const sortedArray = postList.sort((a, b) => {
      // 날짜를 비교하여 비교 함수를 반환합니다.
      return new Date(b.date) - new Date(a.date);
    });

    console.log(sortedArray);
    setPostList(sortedArray);
  };

  const createGuestBook = async ({ author, password, title, date = new Date() }) => {
    try {
      const q = query(collection(firestore, "posting"));
      await addDoc(q, { author, password, title, date });
      getGuestBooks();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getGuestBooks();
  }, []);

  const onDelete = () => {
    // 파이어베이스 공부하기
  };
  const onEdit = () => {
    // 파이어베이스 공부하기
  };

  return (
    <>
      <Container>
        <Flex className="blue">
          <Flower src="image/flower.png" className="f-t" />
          <TextWrapper>
            <Text>
              신랑
              <HeartIcone src="image/heart.png" />
              신부에게 축하글을 남겨주세요.
            </Text>
            <GoToWriteButton
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              축하글 쓰기💐
            </GoToWriteButton>
          </TextWrapper>

          <GuestBookList posts={postList} onDelete={onDelete} onEdit={onEdit} />
          <Flower src="image/flower.png" className="f-b" />
        </Flex>
      </Container>
      <PostModal fetchGuestBook={createGuestBook} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}

const HeartIcone = styled.img`
  margin: 0px;
  width: 15px;
`;

const GoToWriteButton = styled.div`
  border-radius: 10px;
  padding: 3px 10px;
  background-color: #797676;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;

  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.2rem;
  z-index: 10;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 85%;
  margin-bottom: 10px;
  z-index: 10;
`;
