import { useMemo, useEffect, useState, useRef } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

export default function Sound() {
  const [isPlay, setIsPlay] = useState(false);
  const [id, setId] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const root = document.getElementById("root");
    console.log(root);
    root.addEventListener("click", () => {
      audioRef.current.play();
    });
  }, []);

  return (
    <audio controls autoPlay ref={audioRef}>
      <source src="background-music.mp3" />
    </audio>
  );
}
