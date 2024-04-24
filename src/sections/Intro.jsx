import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Intro() {
  const textRef = useRef();

  const [fadeout, setFadeout] = useState(false);

  //javascript 작성하기
  const string = "소종범 ♥️ 권유정 2024년 6월 2일 결혼합니다."; //원하는 텍스트를 string변수 선언
  const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌

  function dynamic(arr) {
    if (arr.length > 0) {
      textRef.current.textContent += arr.shift();
      setTimeout(function () {
        dynamic(arr);
      }, 60);
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
    // eslint-disable-next-line
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
  background-color: #f8d0d7ab;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 999;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
    @media (max-width: 430px) {
      font-size: 1.3rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    font-size: 1.4rem;
    color: black;
  }
  .hero #dynamic {
    @media (max-width: 430px) {
      font-size: 1.3rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    position: relative;
    display: inline-block;
    font-size: 1.7rem;
    color: black;
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
    background-color: black;
  }

  .hero #dynamic.active::after {
    display: none; /*active 클래스가 있으면 보이지 않음*/
  }
`;
