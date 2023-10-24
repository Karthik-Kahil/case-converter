// eslint-disable-next-line react/prop-types
function WordsCounter({ lineCount, charactersCount, wordCount }) {
  return (
    <div>
      <p>
        Character Count: {charactersCount} | Word Count: {wordCount} | Line
        Count: {lineCount}
      </p>
    </div>
  );
}

export default WordsCounter;
