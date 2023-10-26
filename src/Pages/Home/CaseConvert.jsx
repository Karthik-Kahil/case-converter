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

function CaseConvert() {
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

  return (
    <div>
      <StyledBox>
        <HeaderText>
          <h3>
            Accidentally left the caps lock on and typed something, but
            can&rsquo;t be bothered to start again and retype it all?
          </h3>
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
        <Button>
          <img
            src="../../public/kofi.png"
            alt="Buy a coffee"
            style={{ height: "14px", width: "21px" }}
          />{" "}
          Buy me a Coffee
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
