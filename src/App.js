import "./App.css";
import { useEffect } from "react";
import styled from "styled-components";

import Starting from "./sections/Starting";
import Poster from "./sections/Poster";
import Poetry from "./sections/Poetry";
import Calendar from "./sections/CalendarSection";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import WeddingInfo from "./sections/WeddingInfo";
import Posting from "./sections/Posting";
import Ending from "./sections/Ending";
import Footer from "./sections/Footer";

import Modal from "./components/ConnectModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { firestore } from "./configs/firebase";
import AOS from "aos";
import "aos/dist/aos.css";

import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc, query } from "firebase/firestore";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const getPosts = async () => {
    const q = query(collection(firestore, "posting"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);

    querySnapshot.forEach(doc => {
      // 가져온 모든 문서들을 확인
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <StyledLayout>
      <Starting />

      <Poetry />
      <Calendar />
      <Gallery />
      <Modal />
      <Location />
      <WeddingInfo />
      <Posting />
      <Ending />
      <Poster />
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  max-width: 425px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
`;

export default App;
