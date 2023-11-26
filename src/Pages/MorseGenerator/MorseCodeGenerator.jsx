import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  copyClipBoard,
  currentTextLoader,
  pauseAudio,
  playAudio,
} from "./morsecodeSlice";
import { saveAs } from "file-saver";
import MorseCodeInformation from "./MorseCodeInformation";

function MorseCodeGenerator() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const {
    currentText,
    convertedText,
    charactersCount,
    wordCount,
    lineCount,
    playButtonText,
  } = useSelector((select) => select.morseSlice);

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
          <h3>Morse Code Translator & Morse Audio Player</h3>
          <p>
            To utilize the Morse code translator, enter the text in the left
            column, and you&rsquo;ll see an automatic translation on the right
            column. Conversely, for decoding Morse code, input the Morse code on
            the right side of the converter to see it translated back into
            English. Besides converting text to Morse code, you can also utilize
            audio via the &rsquo;Morse code translator audio play button.&rsquo;
            Enter or decode the text, hit the play button, and listen to the
            audio Morse code.
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
            playButton={true}
            playFunc={playAudio}
            pauseFunc={pauseAudio}
            playText={playButtonText}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <MorseCodeInformation />
    </div>
  );
}

export default MorseCodeGenerator;
