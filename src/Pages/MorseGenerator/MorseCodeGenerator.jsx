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
            To use the morse code translator simply enter the text on the left
            column and you will see that it is automatically getting translated
            on the right column. Likewise, if you want to decode morse code,
            then you can enter the morse code on the right handside of the Morse
            Code converter and see it get translated back to English. Not only
            can you convert your text into morse code you are actually able to
            use the audio too via the ‘morse code translator audio play button’.
            Simply type in the text you want converting or decoding and then hit
            the play button and you will hear the audio morse code played.
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
      {/* <MirrorInformation /> */}
    </div>
  );
}

export default MorseCodeGenerator;
