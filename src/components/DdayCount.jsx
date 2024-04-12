import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const formatTime = time => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function DdayCount({ seconds }) {
  const [countdown, setCountDown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  });

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setCountDown("D-Day!!!");
    }
  });
  return (
    <Container>
      <Flex>
        <Text>{formatTime(countdown)}</Text>
        <Text></Text>
        <Text></Text>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Flex = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Text = styled.p`
  position: relative;
  text-align: center;
`;
