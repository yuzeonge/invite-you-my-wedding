import "./App.css";
import { useEffect } from "react";
import styled from "styled-components";

import Footer from "./sections/Footer";
import Starting from "./sections/Starting";
import Poster from "./sections/Poster";
import Poetry from "./sections/Poetry";
import Calendar from "./sections/CalendarSection";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import WeddingInfo from "./sections/WeddingInfo";
import Posting from "./sections/Posting";
import Ending from "./sections/Ending";

import Modal from "./components/ConnectModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <StyledLayout>
      <Starting />
      <Poster />
      <Poetry />
      <Calendar />
      <Gallery />
      <Modal />
      <Location />
      <WeddingInfo />
      <Posting />
      <Ending />
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
