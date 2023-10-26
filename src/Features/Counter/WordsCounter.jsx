import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 1rem;
`;

// eslint-disable-next-line react/prop-types
function WordsCounter({ lineCount, charactersCount, wordCount }) {
  return (
    <StyledDiv>
      <p>
        Character Count: {charactersCount} | Word Count: {wordCount} | Line
        Count: {lineCount}
      </p>
    </StyledDiv>
  );
}

export default WordsCounter;
