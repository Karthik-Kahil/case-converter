import { useDispatch, useSelector } from "react-redux";
import StyledBox from "../../UI/StyledBox";
import toast, { Toaster } from "react-hot-toast";
import { saveAs } from "file-saver";
import { useState } from "react";
import { copyClipBoard, currentTextLoader } from "./invisibleSlice";
import HeaderText from "../../UI/HeaderText";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import InvisibleInformation from "./InvisibleInformation";

function InvisibleGenerator() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.invisibleGen);

  const textHandler = (e) => {
    dispatch(currentTextLoader(e.target.value));
  };

  const copiedSucessfully = () => {
    (convertedText.length > 0 && toast.success("Copied to clipboard")) ||
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
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_Invisible.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Invisible Text Generator</h3>
          <p>
            If you aim to generate hidden text that appears as blank space while
            concealing a distinct message, this online tool is the solution
            you&rsquo;re seeking.
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
      <InvisibleInformation />
    </div>
  );
}

export default InvisibleGenerator;
