import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { copyClipBoard, currentTextLoader } from "./cursedSlice";
import WordsCounter from "../../Features/Counter/WordsCounter";
import TextArea from "../../UI/TextArea";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import CursedInformation from "./CursedInformation";

function CursedText() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.cursedTool);

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
    (currentText.length > 0 && saveAs(file, "CaseMorph_cursed_tool.txt")) ||
      toast.error("No files to download");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Cursed Text Tool</h3>
          <p>
            Try our cursed text generator and create slanting text that suits
            your profile and content! If you&rsquo;re looking for action-packed
            posts, then this is the perfect tool for you. With our cursed text
            generator, you can add a touch of excitement to your posts and make
            them stand out from the rest. So go ahead and give it a try!
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
      <CursedInformation />
    </div>
  );
}

export default CursedText;
