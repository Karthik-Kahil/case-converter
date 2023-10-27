import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import CaseInformation from "../Home/CaseInformation";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import WordsCounter from "../../Features/Counter/WordsCounter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { copyClipBoard, currentTextLoader } from "./duplicateSlice";

const StyledTwoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

function DuplicateConvert() {
  const dispatch = useDispatch();
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.duplicateConvert);

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
          <h3>Online Duplicate Line Remover</h3>
          <p>
            Whether you&rsquo;re dealing with large data sets, cleaning up
            lists, or just need to eliminate redundant information, our tool is
            here to simplify your task. Simply paste your text and let our tool
            do the rest!
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

export default DuplicateConvert;
