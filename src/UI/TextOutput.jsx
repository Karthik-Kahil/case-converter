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
    height: 300px;
    padding: 20px;
    color: #186f65;
    background-color: #f5eec8;
    margin-top: 2rem;
    min-height: 300px;
    overflow: scroll;
  }

  & textarea {
    width: 100%;
    height: 300px;
    padding: 20px;
    color: #186f65;
    background-color: #f5eec8;
    margin-top: 2rem;
    min-height: 300px;
    overflow: scroll;
  }

  overflow: hidden;
`;

function TextOutput({
  currentText,
  copiedSucessfully,
  textSelection,
  handleDownload,
  isDownloading,
  downloadBtn,
  isTextArea,
  playButton,
  playFunc,
  playText,
  pauseFunc,
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
      {isTextArea || (
        <p
          dangerouslySetInnerHTML={{
            __html: textSelection ? convertedText : currentText,
          }}
        ></p>
      )}
      {isTextArea && <textarea defaultValue={currentText}></textarea>}
      {textSelection && <TextSelection />}
      {playButton && (
        <Button
          onClick={() =>
            (currentText && playText === "Play" && dispatch(playFunc())) ||
            (playText === "Stop" && dispatch(pauseFunc()))
          }
        >
          {playText}
        </Button>
      )}
      <Button onClick={handleDownload} disabled={isDownloading}>
        {downloadBtn || "Download Text"}
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
