// styles
import "./App.css";
import styled from "styled-components";

// hooks
import { useEffect, useState } from "react";

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

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./sections/Intro";

// toast
import { ToastContainer, toast } from "react-toastify";

import { Howl } from "howler";

function App() {
  const [isShow, setIsShow] = useState(false);
  const sound = new Howl({
    src: ["background-music.mp3"],
    autoplay: true,
    loop: true,
    volume: 0.3,
    onend: function () {
      console.log("Finished!");
    },
  });

  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(() => true);
    }, 3000);
    setTimeout(() => {
      setIsShow(() => false);
    }, 8000);
  }, []);

  return (
    <>
      <StyledLayout>
        <StyledNav className={isShow ? "active" : ""}>배경음악이 준비되어 있습니다.</StyledNav>
        <Intro />
        <Starting />
        <Poetry />
        <Calendar />
        <Gallery />
        <Location />
        <WeddingInfo />
        <Posting />
        <Ending />
        <Poster />
        <Footer />
      </StyledLayout>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
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

  @media (max-width: 290px) {
    max-width: 280px;
  }
`;

const StyledNav = styled.div`
  @media (max-width: 290px) {
    max-width: 280px;
  }

  width: 100%;
  max-width: 435px;
  height: 48px;
  position: absolute;
  top: 0;

  transform: translateY(-48px);

  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;

  background-color: #f0ede6;
  color: #606060;
  &.active {
    transform: translateY(0);
  }
`;

export default App;
