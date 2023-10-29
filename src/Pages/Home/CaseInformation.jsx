import InformationBox from "../../UI/InformationBox";

const caseInformationList = [
  {
    header: "Welcome to the Convert Morpher Text Generator Tool",
    description:
      "A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:",
  },
  {
    header: "Lower Case",
    description:
      "If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab. this is an example of lower case.",
  },
  {
    header: "Sentence Case",
    description:
      "The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence. <br/><br/>It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.<br/><br/>Note: it won’t, however, capitalize names or places.<br/><br/>This is an example of sentence case.",
  },
  {
    header: "Upper Case",
    description:
      "The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).<br/><br/>To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.<br/><br/>THIS IS AN EXAMPLE OF UPPER CASE.",
  },
  {
    header: "Capitalized Case",
    description:
      "The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.<br/><br/>Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.<br/><br/>This Is An Example Of Capitalized Case.",
  },
  {
    header: "Alternating Case",
    description:
      "The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.<br/><br/>tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.",
  },
  {
    header: "Title Case",
    description:
      "The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as “an” will be left all in lower case and words that are important will be converted such as “Title”.<br/><br/>This Is an Example of Title Case.",
  },
  {
    header: "Inverse Case",
    description:
      "The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as “an” will be left all in lower case and words that are important will be converted such as “Title”.<br/><br/>This Is an Example of Title Case.",
  },
];

function CaseInformation() {
  return <InformationBox data={caseInformationList} />;
}

export default CaseInformation;
