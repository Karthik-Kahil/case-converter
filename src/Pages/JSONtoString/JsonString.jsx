import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveAs } from "file-saver";
import { copyClipBoard, currentTextLoader } from "./jsonstringSlice";
import JsonStringInformation from "./JsonStringInformation";

function JsonString() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.jsonStringSlice);

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
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_jsonstring.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>JSON Stringify Text Generator</h3>
          <p>
            This tool assists you in generating JSON Stringify text. Enter your
            regular text in the left panel, and witness the JSON Stringify text
            generated for you in the next panel. Copy and paste the result as
            needed.
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
      <JsonStringInformation />
    </div>
  );
}

export default JsonString;
