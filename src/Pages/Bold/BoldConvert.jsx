import styled from "styled-components";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import TextArea from "../../UI/TextArea";
import TextOutput from "../../UI/TextOutput";
import CaseInformation from "../Home/CaseInformation";
import WordsCounter from "../../Features/Counter/WordsCounter";
import { currentTextLoader } from "./boldSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledTwoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

function BoldConvert() {
  const dispatch = useDispatch();
  const { currentText, charactersCount, wordCount, lineCount } = useSelector(
    (select) => select.boldConvert
  );

  const textHandler = (e) => {
    dispatch(currentTextLoader(e.target.value));
  };

  return (
    <div>
      <StyledBox>
        <HeaderText>
          <h3>Bold Text Generator</h3>
          <p>
            Use this handy bold text generator. Simply paste or write the text
            that you need to be converted into a bold font into the left field,
            then as you write it, you will see it being converted into bold into
            the field on the right. Then simply copy it from the bold text
            converter and paste it where you want it to go.
          </p>
        </HeaderText>
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} />
          <TextOutput currentText={currentText} />
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

export default BoldConvert;