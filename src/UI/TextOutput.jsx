import styled from "styled-components";
import Button from "./Button";

const StyledTextArea = styled.div`
  & p {
    width: 100%;
    padding: 20px;
    color: #186f65;
    margin-top: 2rem;
    background-color: #f5eec8;
    min-height: 300px;
  }
`;

function TextOutput() {
  return (
    <StyledTextArea>
      <p>Result</p>
      <Button>Download Text</Button>
      <Button>Copy to Clipboard</Button>
      <Button>
        <img
          src="../../public/kofi.png"
          alt="Buy a coffee"
          style={{ height: "14px", width: "21px" }}
        />{" "}
        Buy me a Coffee
      </Button>
    </StyledTextArea>
  );
}

export default TextOutput;
