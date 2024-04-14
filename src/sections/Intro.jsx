import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Intro() {
  const textRef = useRef();

  const [fadeout, setFadeout] = useState(false);

  //javascript 작성하기
  const string = "권유정 🧡 소종범 2024년 6월 2일 결혼합니다."; //원하는 텍스트를 string변수 선언
  const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌

  function dynamic(arr) {
    if (arr.length > 0) {
      textRef.current.textContent += arr.shift();
      setTimeout(function () {
        dynamic(arr);
      }, 130);
    }
  }

  useEffect(() => {
    function blink() {
      textRef.current.classList.toggle("active"); // dynamic에 active 클래스 추가<->삭제 반복
    }
    setInterval(blink, 500); // blink 함수를 0.5초마다 실행
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFadeout(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dynamic(split); //dynamic함수에 split인자 넣어서 실행
    }, [800]);
  }, []);

  return (
    <Container className={fadeout ? "fadeout" : ""}>
      <Wrapper>
        <Flex>
          <div className="hero">
            <p id="dynamic" ref={textRef}></p>
          </div>
        </Flex>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 1;

  transition: opacity 0.6s ease-in-out;

  &.fadeout {
    opacity: 0;
    z-index: -999;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;

  .hero {
    font-size: 1.4rem;
    color: #fff;
  }
  .hero #dynamic {
    position: relative;
    display: inline-block;
    font-size: 1.7rem;
    color: #fff;
  }

  /*커서모양 만들기*/
  .hero #dynamic::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -10px;
    width: 4px;
    height: 100%;
    background-color: white;
  }

  .hero #dynamic.active::after {
    display: none; /*active 클래스가 있으면 보이지 않음*/
  }
`;
