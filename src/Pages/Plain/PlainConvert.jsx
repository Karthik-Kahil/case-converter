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

function PlainConvert() {
  const dispatch = useDispatch();

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
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Plain Text Converter</h3>
          <p>
            Are you struggling with losing the numbering, bulleted, or tabbed
            formatting when copying and pasting rich text into an online form?
            Convert Case&rsquo;s Plain Text Converter is here to help. Our
            online utility preserves the benefits of formatting while removing
            the frustrating background embedded code, allowing you to easily
            copy and paste from one application or form to another. No more
            frustration, just seamless productivity.
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
      <PlainInformation />
    </div>
  );
}

export default PlainConvert;
