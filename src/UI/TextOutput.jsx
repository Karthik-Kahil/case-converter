import styled from "styled-components";
import Button from "./Button";
import { getFonts, transform } from "convert-unicode-fonts";
import TextSelection from "./TextSelection";
import { useState } from "react";

const StyledTextArea = styled.div`
  & p {
    width: 100%;
    padding: 20px;
    color: #186f65;
    background-color: #f5eec8;
    margin-top: 2rem;
    min-height: 300px;
  }
`;

function TextOutput() {
  const [fontType, setFontType] = useState("");

  const fonts = getFonts();
  const resultText = transform(
    "abcdefXZYUPO91234 hello WORLD",
    fonts["sansSerifBold"]
  );

  return (
    <StyledTextArea>
      <p>Result</p>
      <TextSelection setFontType={setFontType} />
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
