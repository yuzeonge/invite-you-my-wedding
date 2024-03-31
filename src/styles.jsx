import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding-top: 220px;
  padding-bottom: 220px;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.blue {
    background-color: #f3fcfd;
  }
  &.wedding-info {
    margin-bottom: 35px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextCategoryTitle = styled.p`
  font-family: "yleeMortalHeart-ImmortalMemory";
  font-size: 3rem;
  font-weight: bold;
  color: #4d4d4d;
  text-align: center;
  width: 35%;
  border-bottom: solid #d6e6dd;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;

  &.t1 {
    margin-top: 30px;
    padding: 4px;
    font-size: 50px;
    font-family: "yleeMortalHeart-ImmortalMemory";
  }
  &.t2 {
    font-size: 1.6rem;
    padding-top: 36px;
    padding-bottom: 36px;
    letter-spacing: -0.5px;
  }
  &.fs {
    font-family: "yleeMortalHeart-ImmortalMemory";
  }
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 70px;
`;

/** 이미지 */
const Flower = styled.img`
  margin: 33px;
  &.f-t {
    margin-top: -10%;
  }
  &.f-b {
    margin-bottom: -10%;
  }
`;

export { Container, Flex, TextWrapper, TextCategoryTitle, Text, EmptyBox, Flower };
