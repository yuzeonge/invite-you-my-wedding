import styled from "styled-components";

export default function VerticalBall() {
  return (
    <Flex>
      <VerticalLine />
      <Ball />
    </Flex>
  );
}
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Ball = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100px;
  background-color: #6d6d6d;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: #6d6d6d;
  height: 360px;
`;
