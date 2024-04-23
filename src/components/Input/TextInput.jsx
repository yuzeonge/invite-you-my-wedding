import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 1.5rem;
  color: #222222;
  width: 100%;
  border: none;
  border-bottom: solid #aaaaaa 1px;

  position: relative;
  background: none;
  z-index: 5;
  outline: none;
  border-radius: 0px;
  z-index: 5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus ~ label,
  &:valid ~ label {
    @media (max-width: 430px) {
      font-size: 1.3rem;
    }
    font-size: 1.5rem;
    bottom: 64px;
    color: #666;
    font-weight: bold;
  }

  &:focus ~ span,
  &:valid ~ span {
    width: 100%;
  }
`;

const Label = styled.label`
  @media (max-width: 430px) {
    font-size: 1.3rem;
  }
  position: absolute;
  color: #aaa;
  left: 0px;
  font-size: 1.4rem;
  bottom: 32px;
  transition: all 0.2s;
  z-index: 1;

  &.textarea {
    top: 36px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;

  min-height: 240px;
  max-height: 240px;
  border: 1px solid #dbdbdb;
  resize: none;
  z-index: 5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus ~ label,
  &:valid ~ label {
    @media (max-width: 430px) {
      font-size: 1rem;
    }
    font-size: 1.2rem;
    top: 0;
    color: #666;
    font-weight: bold;
  }

  &:focus ~ span,
  &:valid ~ span {
    width: 100%;
  }
`;

const TextInput = ({ label, value, onChange, placeholder = "", type = "text", textArea = false }) => {
  const InputComponent = textArea ? TextArea : InputField;
  return (
    <>
      <InputComponent type={type} required onChange={onChange} value={value} placeholder={placeholder} />
      <Label className={textArea ? "textarea" : ""}>{label}</Label>
    </>
  );
};

export default TextInput;
