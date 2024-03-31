import styled from "styled-components";

export default function PaginationBox() {
  return (
    <PaginationWrapper>
      <Round></Round>
      <Round></Round>
      <Round></Round>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Round = styled.div`
  background-color: #4242431b;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 3px;
`;
