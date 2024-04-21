import { useEffect, useState, useRef } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import styled from "styled-components";

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio("background-music.mp3"));

  const togglePlay = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 2000);
    }
  }, []);

  return <SoundWrapper onClick={togglePlay}>{isPlaying ? <GiSoundOff size={30} /> : <GiSoundOn size={30} />}</SoundWrapper>;
}

const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 36px;
  height: 36px;
  bottom: 10px;
  right: 10px;
  z-index: 30;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 2px 2px 0.3em #47464628;
`;
