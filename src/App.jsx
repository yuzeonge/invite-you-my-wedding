// styles
import "./App.css";
import styled from "styled-components";

// hooks
import { useEffect, useRef } from "react";

// component
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
import ConnectInfoModal from "./components/Modal/ConnectInfoModal";

import TestModal from "./components/Modal/TestModal";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./sections/Intro";

// toast
import { ToastContainer } from "react-toastify";

import { Howl, Howler } from "howler";

function App() {
  const sound = new Howl({
    src: ["background-music.mp4"],
    autoplay: true,
    loop: true,
    volume: 0.3,
    onend: function () {
      console.log("Finished!");
    },
  });

  /** 위치 안내 스크롤 */
  const locationInfo = useRef();

  const onMoveToLocationInfo = () => {
    locationInfo.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  });

  return (
    <>
      <StyledLayout>
        <Intro />
        <Starting onClick={onMoveToLocationInfo} />
        <Poetry />
        <Calendar />
        <Gallery />
        <Location ref={locationInfo} />
        <WeddingInfo />
        <Posting />
        <Ending />
        <Poster />
        <Footer />
      </StyledLayout>
      <ToastContainer position="bottom-center" autoClose={1500} hideProgressBar={true} />
      <ConnectInfoModal />
    </>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  max-width: 435px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default App;
