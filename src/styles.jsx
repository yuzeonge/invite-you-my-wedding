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
    background-color: #f0ede6;
  }
  &.wedding-info {
    text-align: center;
    margin-bottom: 35px;
    width: 100%;
  }
`;

const RealtiveFlex = styled(Flex)`
  position: relative;
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
  border-bottom: solid #f0ede6;
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
    letter-spacing: -0.5px;
    margin-bottom: 10px;
  }

  &.mb-48 {
    margin-bottom: 48px;
  }

  &.mt-50 {
    margin-top: 50px;
  }
  &.fs {
    font-family: "yleeMortalHeart-ImmortalMemory";
  }
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 70px;
`;

/** 이미지 todo 이미지 통일하기*/
const Flower = styled.img`
  margin: 33px;
  width: 40%;
  &.f-t {
    margin-top: -8%;
  }
  &.f-b {
    margin-bottom: -8%;
    transform: rotate(180deg);
  }
`;

export { Container, RealtiveFlex, Flex, TextWrapper, TextCategoryTitle, Text, EmptyBox, Flower };
