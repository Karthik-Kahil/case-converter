import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { copyClipBoard, currentTextLoader } from "./boldSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import BoldInformation from "./BoldInformation";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function BoldConvert() {
  const [searchParms] = useSearchParams();
  const types = searchParms.get("type");
  console.log(types);

  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.boldConvert);

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
    convertedText.length > 0 && saveAs(file, "CaseMorph_Pro_Bold.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Bold Text Generator</h3>
          <p>
            Utilize our convenient Bold Text Generator. Just input the text you
            want to convert to bold in the left field. As you type, you&rsquo;ll
            instantly see it transform into bold text in the right field. Once
            it&rsquo;s bold, copy it from the converter and place it where you
            need it.
          </p>
        </HeaderText>
        <Toaster />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} />
          <TextOutput
            textSelection={true}
            currentText={currentText}
            copiedSucessfully={copiedSucessfully}
            handleDownload={handleDownload}
            isDownloading={isDownloading}
            multiPageType={types}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <BoldInformation />
    </div>
  );
}

export default BoldConvert;
