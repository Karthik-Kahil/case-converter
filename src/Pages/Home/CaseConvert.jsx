import styled from "styled-components";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  capitalizeCase,
  clear,
  inverseCase,
  lowerCase,
  sentenceCase,
  textLoader,
  upperCase,
} from "./ConvertSlice";

const StyledBox = styled.div`
  background-color: #445d48;
  padding: 2rem;
  color: #ffffff;
  border-radius: 20px;

  & h3 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 400;
  }

  & p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  & textarea {
    width: 100%;
    padding: 20px;
    color: #186f65;
    margin-top: 2rem;
    background-color: #f5eec8;
  }
`;

function CaseConvert() {
  const dispatch = useDispatch();
  const { currentText, charactersCount, wordCount, lineCount } = useSelector(
    (select) => select.convertCase
  );

  const textHandler = (e) => {
    dispatch(textLoader(e.target.value));
  };

  return (
    <div>
      <StyledBox>
        <h3>
          Accidentally left the caps lock on and typed something, but
          can&rsquo;t be bothered to start again and retype it all?
        </h3>
        <p>
          Simply enter your text and choose the case you want to convert it to.
        </p>
        <textarea
          rows="10"
          value={currentText}
          onChange={textHandler}
          placeholder="Type or paste here..."
        ></textarea>
        <Button onClick={() => dispatch(sentenceCase())}>Sentense case</Button>
        <Button onClick={() => dispatch(lowerCase())}>Lower case</Button>
        <Button onClick={() => dispatch(upperCase())}>UPPER case</Button>
        <Button onClick={() => dispatch(capitalizeCase())}>
          Captilize case
        </Button>
        <Button>aLtErNaTiNg cAsE</Button>
        <Button>Title Case</Button>
        <Button onClick={() => dispatch(inverseCase())}>InVeRsE CaSe</Button>
        <Button>Copy to Clipboard</Button>
        <Button onClick={() => dispatch(clear())}>Clear</Button>
        <div>
          <p>
            Character Count: {charactersCount} | Word Count: {wordCount} | Line
            Count: {lineCount}
          </p>
        </div>
      </StyledBox>
    </div>
  );
}

export default CaseConvert;
