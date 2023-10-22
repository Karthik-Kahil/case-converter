import styled from "styled-components";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { sentenceCase } from "./ConvertSlice";

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

  & button {
    background-color: #d6cc99;
    border: 0;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    color: #445d48;
  }
`;

function CaseConvert() {
  const dispatch = useDispatch();

  const textHandler = (e) => {
    dispatch(sentenceCase(e.target.value));
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
          cols="30"
          rows="10"
          onChange={textHandler}
          placeholder="Type or paste here..."
        ></textarea>
        <Button>Sentense case</Button>
        <Button>Lower case</Button>
        <Button>UPPER case</Button>
        <Button>Captilize case</Button>
        <Button>aLtErNaTiNg cAsE</Button>
        <Button>Title Case</Button>
        <Button>InVeRsE CaSe</Button>
        <Button>Copy to Clipboard</Button>
        <Button>Clear</Button>
        <div>
          <p>Character Count: 0 | Word Count: 0 | Line Count: 0</p>
        </div>
      </StyledBox>
    </div>
  );
}

export default CaseConvert;
