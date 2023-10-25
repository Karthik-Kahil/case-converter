import InformationBox from "../../UI/InformationBox";

const caseInformationList = [
  {
    header: "Welcome to the Convert Case Text Generator Tool",
    description:
      "A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:",
  },
  {
    header: "Lower Case",
    description:
      "If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab. <br/><br/>this is an example of lower case.",
  },
  {
    header: "Sentence Case",
    description:
      "The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence. <br/><br/>It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.<br/><br/>Note: it won’t, however, capitalize names or places.<br/>This is an example of sentence case.",
  },
  {
    header: "Upper Case",
    description:
      "The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).",
  },
];

function CaseInformation() {
  return <InformationBox data={caseInformationList} />;
}

export default CaseInformation;
