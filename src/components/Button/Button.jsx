import styled from "styled-components";

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  @media (max-width: 375px) {
    border-radius: 8px;
    padding: 6px 8px;
  }
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
  color: #756e66;
  min-width: 45%;
  font-size: 1.5rem;
  box-shadow: 2px 2px 0.3em #67676728;

  &.del {
    background-color: #998e82;
  }

  &.gray {
    background-color: #a2a2a2;
  }
  &.point {
    background-color: #b3a99d;
    color: #fff;
  }
`;
