import toast, { Toaster } from "react-hot-toast";
import StyledBox from "../../UI/StyledBox";
import { useDispatch, useSelector } from "react-redux";
import { copyClipBoard, currentTextLoader } from "./reverseSlice";
import HeaderText from "../../UI/HeaderText";
import WordsCounter from "../../Features/Counter/WordsCounter";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import ReverseInformation from "./ReverseInformation";
import { useState } from "react";
import { saveAs } from "file-saver";

function ReverseConvert() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.reverseConvert);

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

    const file = new Blob([currentText]);
    currentText.length > 0 && saveAs(file, "CaseMorph_Reverse_Convert.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Backwards Text Generator</h3>
          <p>
            Experience a straightforward online tool for converting your regular
            text to its reverse counterpart. Just input your text in the left
            column or paste it, and observe it seamlessly transform in the right
            column.
          </p>
        </HeaderText>
        <Toaster />
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
      <ReverseInformation />
    </div>
  );
}

export default ReverseConvert;
