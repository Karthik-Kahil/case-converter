import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";

import { copyClipBoard, currentTextLoader } from "./binarySlice";
import { useState } from "react";
import { saveAs } from "file-saver";
import BinaryInformation from "./BinaryInformation";

function BinaryTranslator() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);

  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.binaryConvert);

  const textHandler = (e) => {
    dispatch(currentTextLoader(e.target.value));
  };

  const copiedSucessfully = () => {
    (currentText.length > 0 && toast.success("Copied to clipboard")) ||
      toast.error("Please enter some text to copy");

    dispatch(copyClipBoard());
  };

  const keyPressHandler = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "c") copiedSucessfully();
    if ((e.metaKey || e.ctrlKey) && e.key === "b") handleDownload();
  };

  const handleDownload = () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);

    const file = new Blob([convertedText]);
    convertedText.length > 0 && saveAs(file, "CaseMorph_Pro_Binary.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Binary Code Translator</h3>
          <p>
            You can use this convenient online tool to easily convert English
            text into binary code. Just input your text on the left side, and it
            will automatically be translated into binary code on the right.
            Similarly, if you have binary code, enter it on the right side to
            get an English translation.
          </p>
        </HeaderText>
        <Toaster />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} />
          <TextOutput
            textSelection={false}
            currentText={convertedText}
            copiedSucessfully={copiedSucessfully}
            handleDownload={handleDownload}
            isDownloading={isDownloading}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <BinaryInformation />
    </div>
  );
}

export default BinaryTranslator;
