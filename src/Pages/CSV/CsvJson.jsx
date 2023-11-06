import toast, { Toaster } from "react-hot-toast";
import WordsCounter from "../../Features/Counter/WordsCounter";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveAs } from "file-saver";

import { copyTextToClipboard } from "../../Utils/copyclip";
import { currentTextLoader } from "./csvtojson";
import UploadInput from "../../UI/UploadInput";

function CsvJson() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.csvConvert);

  const textHandler = (e) => {
    dispatch(currentTextLoader(e.target.value));
  };

  const copiedSucessfully = () => {
    (currentText.length > 0 && toast.success("Copied to clipboard")) ||
      toast.error("Please enter some text to copy");

    dispatch(copyTextToClipboard());
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

    const file = new Blob([currentText]);
    currentText.length > 0 && saveAs(file, "CaseMorph_duplicate_Convert.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Convert CSV to JSON and JSON to CSV</h3>
          <p>
            This is a simple tool that allows you to convert CSV to JSON and
            vice versa JSON to CSV as well. Simply copy and paste your code into
            the corresponding field and see it get converted back in the next
            field.
          </p>
        </HeaderText>
        <Toaster />
        <UploadInput />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} />
          <TextOutput
            textSelection={false}
            currentText={convertedText}
            copiedSucessfully={copiedSucessfully}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      {/* <DuplicateInformation /> */}
    </div>
  );
}

export default CsvJson;
