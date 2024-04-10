import styled from "styled-components";

export default function ImageButton({ src, onClick, ...props }) {
  return <Image src={src} onClick={onClick} {...props} />;
}

const Image = styled.img`
  width: 168px;
  height: 280px;
`;
