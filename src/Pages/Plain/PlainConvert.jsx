import toast, { Toaster } from "react-hot-toast";
import StyledBox from "../../UI/StyledBox";
import { useDispatch, useSelector } from "react-redux";
import { copyClipBoard, currentTextLoader } from "./plainSlice";
import HeaderText from "../../UI/HeaderText";
import WordsCounter from "../../Features/Counter/WordsCounter";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import PlainInformation from "./PlainInformation";
import { useState } from "react";
import { saveAs } from "file-saver";

function PlainConvert() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.plainConvert);

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
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_Plain.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Plain Text Converter</h3>
          <p>
            Do you encounter issues with losing numbering, bullet points, or
            tabbed formatting when copying and pasting rich text into an online
            form? Convert Case&rsquo;s Plain Text Converter is your solution.
            Our online tool retains the advantages of formatting while
            eliminating the troublesome embedded background code. This enables
            smooth copying and pasting between applications and forms,
            eliminating frustration and enhancing productivity.
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
      <PlainInformation />
    </div>
  );
}

export default PlainConvert;
