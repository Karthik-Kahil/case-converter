import toast, { Toaster } from "react-hot-toast";
import StyledBox from "../../UI/StyledBox";
import { useDispatch, useSelector } from "react-redux";
import { copyClipBoard, currentTextLoader } from "./reverseSlice";
import HeaderText from "../../UI/HeaderText";
import WordsCounter from "../../Features/Counter/WordsCounter";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import CaseInformation from "../../Pages/Home/CaseInformation";

function ReverseConvert() {
  const dispatch = useDispatch();

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
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Backwards Text Generator</h3>
          <p>
            Normal front facing text to backwards text. A simple online backward
            text generator tool that allows you to switch the way your text is
            facing. Simply write or paste the text in the left column and see it
            get converted in the right.
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
      <CaseInformation />
    </div>
  );
}

export default ReverseConvert;
