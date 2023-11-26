import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveAs } from "file-saver";
import { copyClipBoard, currentTextLoader } from "./hextextSlice";
import HexTextInformation from "./HexTextInformation";

function HextoText() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.hextextSlice);

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

    currentText.length === 0 && toast.error("No files to download");

    setIsDownloading(true);

    const plainText = convertedText.replace(/<[^>]*>/g, "");
    const file = new Blob([plainText]);
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_hextotext.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Hex to Text Converter</h3>
          <p>
            This online converter provides the ability to transform hexadecimal
            strings into text. Input the hex string into the designated field,
            and observe the result on the right.
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
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <HexTextInformation />
    </div>
  );
}

export default HextoText;
