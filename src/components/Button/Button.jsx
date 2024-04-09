import styled from "styled-components";

export default function Button({ size, onClick, children }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  &:hover {
    color: #9b9389;
    background-color: #dddad1;
  }
  border: none;
  border: 0px;
  background-color: #f0ede6;
  font-family: "GowunDodum-Regular";
  border-radius: 10px;
  padding: 8px 12px;
  width: 45%;
  color: #a0988f;
  font-size: 1.5rem;
  margin: 7px;
  box-shadow: 2px 2px 0.3em #67676728;

  &.del {
    background-color: #998e82;
  }

  &.gray {
    background-color: #a2a2a2;
  }
`;
