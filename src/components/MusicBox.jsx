import { atom, useRecoilState } from "recoil";
import myAudio from "./assets/myAudio.mp3";
import { useEffect, useRef } from "react";

//배경음악 플레이, 일시정지
const playState =
  atom <
  boolean >
  {
    key: "playState",
    default: false,
  };

function AudioPlayer() {
  const myRef = useRef(null);
  const [play, setPlay] = useRecoilState(playState);
  // 재생
  const start = () => {
    if (myRef.current) {
      myRef.current.play();
    }
    setPlay(true);
  };
  // 일시 정지
  const stop = () => {
    if (myRef.current) {
      myRef.current.pause();
    }
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current) return;
    if (play) {
      myRef.current.play();
    } else myRef.current.pause();
  }, [play]);

  return (
    <>
      <h1>AudioPlayer</h1>
      <audio ref={myRef} src={myAudio} controls loop></audio>
      <br />
      <br />
      {play ? (
        // 일시정지 버튼
        <button onClick={stop}>일시정지</button>
      ) : (
        // 재생 버튼
        <button onClick={start}>재생</button>
      )}
    </>
  );
}

export default AudioPlayer;
