/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 20px;
  color: #186f65;
  margin-top: 2rem;
  background-color: #f5eec8;
  resize: vertical;
  min-height: 300px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #186e65;
  }
`;

function TextArea({ currentText, textHandler, placeholder }) {
  return (
    <StyledTextArea
      autoFocus={true}
      onChange={textHandler}
      value={currentText}
      placeholder={`${
        placeholder ||
        `Type or paste here... \n\nShortcuts:\n\n1. Make text copying more convenient by using the keyboard shortcuts: "Command + C" or "Control + C"\n\n2. Enhance the download process's convenience with keyboard shortcuts: utilize either "Command + B" or "Control + B"`
      }`}
    ></StyledTextArea>
  );
}

export default TextArea;
