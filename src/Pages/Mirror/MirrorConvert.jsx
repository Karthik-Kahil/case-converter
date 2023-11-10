import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { copyClipBoard, currentTextLoader } from "./mirrorSlice";
import { useDispatch, useSelector } from "react-redux";
import MirrorInformation from "./MirrorInformation";
import { saveAs } from "file-saver";
import { useState } from "react";

function MirrorConvert() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.mirrorConvert);

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
          <h3>Mirror Text Generator</h3>
          <p>
            Transform regular text into its mirrored version with ease using our
            Mirrored Text Generator. Just type your standard text in the
            left-hand panel, and witness it instantly converted into mirrored
            text on the right-hand side.
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
      <MirrorInformation />
    </div>
  );
}

export default MirrorConvert;
