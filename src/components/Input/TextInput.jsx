import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 15px;
  color: #222222;
  width: 100%;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 16px;
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
  position: absolute;
  color: #aaa;
  left: 10px;
  font-size: 1.4rem;
  bottom: 32px;
  transition: all 0.2s;

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

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 16px;
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
