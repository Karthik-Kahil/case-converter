import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import UploadInput from "../../UI/UploadInput";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { copyClipBoard, currentTextLoader } from "./asciiArtSlice";
import { saveAs } from "file-saver";

function AsciiArtGenerator() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.asciiSlice);

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
    currentText.length > 0 && saveAs(file, "CaseMorph_Mirror_Convert.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Ascii Generator - Text to Image Generator</h3>
          <p>
            Looking for a handy online tool that can convert your picture and
            art to ascii? Then use this simple tool just below.
          </p>
        </HeaderText>
        <Toaster />
        <UploadInput
          accept={".png, .jpg"}
          placeHolder={"Drag & drop an image here or click to upload"}
        />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} currentText={currentText} />
          <TextOutput
            textSelection={false}
            currentText={convertedText}
            copiedSucessfully={copiedSucessfully}
            handleDownload={handleDownload}
            isTextArea={true}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      {/* <CsvInformation /> */}
    </div>
  );
}

export default AsciiArtGenerator;
