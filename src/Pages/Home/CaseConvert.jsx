import toast, { Toaster } from "react-hot-toast";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  alternatingCase,
  capitalizeCase,
  clear,
  copyClipBoard,
  inverseCase,
  lowerCase,
  sentenceCase,
  textLoader,
  upperCase,
} from "./ConvertSlice";
import CaseInformation from "./CaseInformation";
import WordsCounter from "../../Features/Counter/WordsCounter";
import HeaderText from "../../UI/HeaderText";
import TextArea from "../../UI/TextArea";
import StyledBox from "../../UI/StyledBox";
import { useState } from "react";
import { saveAs } from "file-saver";

function CaseConvert() {
  const [isDownloading, setIsDownloading] = useState(false);
  const dispatch = useDispatch();
  const { currentText, charactersCount, wordCount, lineCount } = useSelector(
    (select) => select.convertCase
  );

  const textHandler = (e) => {
    dispatch(textLoader(e.target.value));
  };

  const copiedSucessfully = () => {
    (currentText.length > 0 && toast.success("Copied to clipboard")) ||
      toast.error("Please enter some text to copy");

    dispatch(copyClipBoard());
  };

  const keyPressHandler = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "c") copiedSucessfully();
    if ((e.metaKey || e.ctrlKey) && e.key === "b") handleDownload();
    if (e.key === "CapsLock")
      toast("Caps lock on", {
        icon: "🔒",
      });
  };

  const handleDownload = () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);

    const file = new Blob([currentText]);
    currentText.length > 0 && saveAs(file, "CaseMorph_Case_Convert.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Oops, accidentally typed something in caps lock? No worries!</h3>
          <p>
            Simply enter your text and choose the case you want to convert it
            to.
          </p>
        </HeaderText>
        <TextArea currentText={currentText} textHandler={textHandler} />
        <Button onClick={() => dispatch(sentenceCase())}>Sentense case</Button>
        <Button onClick={() => dispatch(lowerCase())}>Lower case</Button>
        <Button onClick={() => dispatch(upperCase())}>UPPER case</Button>
        <Button onClick={() => dispatch(capitalizeCase())}>
          Captilize case
        </Button>
        <Button onClick={() => dispatch(alternatingCase())}>
          aLtErNaTiNg cAsE
        </Button>
        <Button>Title Case</Button>
        <Button onClick={() => dispatch(inverseCase())}>InVeRsE CaSe</Button>
        <Button onClick={copiedSucessfully}>Copy to Clipboard</Button>
        <Toaster />
        <Button onClick={() => dispatch(clear())}>Clear</Button>
        <Button onClick={() => handleDownload()}>Download text</Button>
        <Button>
          <a href="https://www.buymeacoffee.com/karthikkahil" target="__blank">
            <img
              src="../../public/Buy Me a Coffee.svg"
              alt="Buy a coffee"
              style={{ height: "15px", width: "15px" }}
            />{" "}
            Buy me a Coffee
          </a>
        </Button>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <CaseInformation />
    </div>
  );
}

export default CaseConvert;
