import styled from "styled-components";

const PostModal = () => {
  return (
    <Container>
      <Flex>
        <TextWrapper>
          <Text>축하 글</Text>
          <Input type="text" />
        </TextWrapper>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;

  &.disable {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 80%;
  height: 40%;
  border-radius: 12px;
  padding: 17px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Input = styled.input``;
export default PostModal;
