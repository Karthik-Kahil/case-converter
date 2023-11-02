/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import { getFonts, transform } from "convert-unicode-fonts";
import TextSelection from "./TextSelection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertedTextLoader } from "../Pages/Bold/boldSlice";

const StyledTextArea = styled.div`
  & p {
    width: 100%;
    padding: 20px;
    color: #186f65;
    background-color: #f5eec8;
    margin-top: 2rem;
    min-height: 300px;
  }
  overflow: hidden;
`;

function TextOutput({
  currentText,
  copiedSucessfully,
  textSelection,
  handleDownload,
  isDownloading,
}) {
  const dispatch = useDispatch();
  const fonts = getFonts();

  const { convertedText, differentType } = useSelector(
    (select) => select.boldConvert
  );

  useEffect(() => {
    const resultText = transform(currentText, fonts[differentType]);
    dispatch(convertedTextLoader(resultText));
  }, [currentText, differentType, dispatch, fonts]);

  return (
    <StyledTextArea>
      <p
        dangerouslySetInnerHTML={{
          __html: textSelection ? convertedText : currentText,
        }}
      ></p>
      {textSelection && <TextSelection />}
      <Button onClick={handleDownload} disabled={isDownloading}>
        Download Text
      </Button>
      <Button onClick={copiedSucessfully}>Copy to Clipboard</Button>
      <Button>
        <a href="https://www.buymeacoffee.com/karthikkahil" target="__blank">
          <img
            src="../../public/Buy Me a Coffee.svg"
            alt="Buy a coffee"
            style={{ height: "15px", width: "15px" }}
          />{" "}
          Buy me a Coffee
        </a>
      </Button>
    </StyledTextArea>
  );
}

export default TextOutput;
