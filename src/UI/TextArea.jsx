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
`;

function TextArea({ currentText, textHandler }) {
  return (
    <StyledTextArea
      autoFocus={true}
      value={currentText}
      onChange={textHandler}
      placeholder={`Type or paste here... | Make text copying more convenient by using the keyboard shortcuts + C or Control + C.`}
    ></StyledTextArea>
  );
}

export default TextArea;
