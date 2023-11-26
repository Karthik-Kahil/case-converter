import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { copyClipBoard, currentTextLoader } from "./utfSlice";
import { saveAs } from "file-saver";
import Utf8Information from "./Utf8Information";

function UtfConverter() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.utf8Slice);

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
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_utm8.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>UTF8 Encoder/Decoder</h3>
          <p>
            The UTF-8 Encoder and Decoder is a convenient online tool designed
            for developers and programmers. To use it, copy and paste your text
            into the form field, and the tool will display the corresponding
            UTF-8 data on the right. This makes it easy to encode or decode text
            in UTF-8 format, an essential process for handling character
            encoding in programming and development projects.
          </p>
        </HeaderText>
        <Toaster />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} />
          <TextOutput
            isTextArea={true}
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
      <Utf8Information />
    </div>
  );
}

export default UtfConverter;
