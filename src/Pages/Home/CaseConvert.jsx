import styled from "styled-components";
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
    resize: vertical;
    min-height: 300px;
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

  const copiedSucessfully = () => {
    toast("Copied to clipboard");
    dispatch(copyClipBoard());
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
          autoFocus={true}
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
