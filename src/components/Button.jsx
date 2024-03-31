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
    color: white;
    background-color: #abc8ca;
  }
  border: none;
  border: 0px;
  background-color: #bbe2e4;
  font-family: "GowunDodum-Regular";
  border-radius: 10px;
  padding: 8px 12px;
  width: 45%;
  color: #4d4d4d;
  font-size: 1.5rem;
  margin: 7px;
  box-shadow: 2px 2px 0.3em #67676728;

  &.gray {
    background-color: #a2a2a2;
  }
`;
