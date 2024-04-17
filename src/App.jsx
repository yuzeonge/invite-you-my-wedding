// styles
import "./App.css";
import styled from "styled-components";

// hooks
import { useEffect } from "react";

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
import { ToastContainer } from "react-toastify";

import { Howl } from "howler";

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

  // const targetRef = useRef(null);
  // const handleScroll = () => {
  //   console.log("scrolling");
  //   const scrollPosition = window.scrollY;
  //   const targetTop = targetRef.current.getBoundingClientRect().top;
  //   if (targetTop > scrollPosition) {
  //     targetRef.current.play();
  //   }
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, 100);
  //   return () => {
  //     clearInterval(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  });

  return (
    <>
      <StyledLayout>
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
