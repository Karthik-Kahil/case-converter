import styled from "styled-components";

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
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Type or paste here..."
        ></textarea>
        <button>Sentense case</button>
        <button>Lower case</button>
        <button>UPPER case</button>
        <button>Captilize case</button>
        <button>aLtErNaTiNg cAsE</button>
        <button>Title Case</button>
        <button>InVeRsE CaSe</button>
        <button>Copy to Clipboard</button>
        <button>Clear</button>
      </StyledBox>
    </div>
  );
}

export default CaseConvert;
