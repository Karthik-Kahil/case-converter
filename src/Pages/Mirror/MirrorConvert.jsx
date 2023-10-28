import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import CaseInformation from "../Home/CaseInformation";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { copyClipBoard, currentTextLoader } from "./mirrorSlice";
import { useDispatch, useSelector } from "react-redux";

function MirrorConvert() {
  const dispatch = useDispatch();

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

  return (
    <div>
      <StyledBox>
        <HeaderText>
          <h3>Mirror Text Generator</h3>
          <p>
            Use this mirrored text generator as a quick and easy way of changing
            standard text into the mirrored version. Simply type the normal and
            regular text in the left hand panel and see it get converted to the
            mirrored text on the right hand side.
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

export default MirrorConvert;
