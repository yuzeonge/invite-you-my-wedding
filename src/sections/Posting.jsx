import { useEffect, useState } from "react";

// style

import styled from "styled-components";
import { Container, Flex, Flower } from "../styles";

// component

import GuestBookList from "../components/GuestBook/GuestBookList";
import PostModal from "../components/Modal/PostModal";
import HeartIcon from "../components/Icons/heart";

// mui
import { Pagination } from "@mui/material";

// firbase
import { firestore } from "../configs/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc, query } from "firebase/firestore";

const limit = 5;

export default function Posting() {
  const [postList, setPostList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

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

    setCount(Math.ceil(sortedArray.length / limit));
    setPostList(sortedArray);
  };

  const createGuestBook = async ({ author, password, title, date = new Date() }) => {
    try {
      const q = query(collection(firestore, "posting"));
      await addDoc(q, { author, password, title, date });
      getGuestBooks();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteGuestbook = async id => {
    await deleteDoc(doc(firestore, "posting", id));
    getGuestBooks();
  };

  useEffect(() => {
    getGuestBooks();
  }, []);

  return (
    <>
      <Container>
        <Flex className="blue">
          <Flower src="image/flower.png" className="f-t" />
          <TextWrapper>
            <Text>
              신랑
              <HeartIcon src="image/heart.png" />
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
          <GuestBookList posts={postList.slice((currentPage - 1) * limit, currentPage * limit)} onDelete={deleteGuestbook} />
          <Pagination count={count} page={currentPage} onChange={handleChange} />
          <Flower src="image/flower.png" className="f-b" />
        </Flex>
      </Container>
      <PostModal fetchGuestBook={createGuestBook} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}

const GoToWriteButton = styled.div`
  @media (max-width: 414px) {
    font-size: 1.2rem;
    padding: 3px 6px;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
    padding: 1px 4px;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
    padding: 3px 6px;
  }
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 3px 6px;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
    padding: 1px 4px;
  }
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
  @media (max-width: 414px) {
    font-size: 1.3rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }

  font-size: 1.2rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  @media (max-width: 430px) {
    width: 27.5rem;
  }
  @media (max-width: 414px) {
    width: 29.5rem;
  }
  @media (max-width: 393px) {
    width: 27rem;
  }
  @media (max-width: 375px) {
    width: 29.5rem;
  }
  display: flex;
  width: 85%;
  margin-bottom: 10px;
  z-index: 10;
`;
