import InformationBox from "../../UI/InformationBox";

const caseInformationList = [
  {
    header: "Welcome to the CaseMorph Pro Text Generator Tool",
    description:
      "Discover a versatile online text tool that allows you to switch between lowercase and uppercase letters. This tool empowers you to capitalize, uncapitalize, convert to mixed case, and transform your text as needed. Explore the available options below.",
  },
  {
    header: "Lower Case",
    description:
      "If you're wondering how to convert text to lowercase, the lowercase text converter is the tool that will help you achieve this. It effectively changes all the letters in your text to lowercase. Just copy the text you want to convert to lowercase and paste it into the box above. Then, select the 'lower case' tab. Here's an example of text in lowercase.<br/><br/>this is an example of lower case.",
  },
  {
    header: "Sentence Case",
    description:
      "The Sentence Case Converter offers you the ability to paste text of your choice, automatically transforming it into well-structured sentences. It accomplishes this by capitalizing the initial letter of each sentence, converting the rest of the text to lowercase, and changing 'i' to 'I.' Moreover, every letter following a full stop becomes uppercase.<br/><br/>Please note that it does not capitalize names or places. This serves as an example of text in sentence case.",
  },
  {
    header: "Upper Case",
    description:
      "The Upper Case Transformer can convert any text you have into all uppercase letters. It transforms all lowercase letters into CAPITALS while maintaining uppercase letters in their original form.<br/><br/>To achieve this, just select the text you want to change, paste it into the box above, and then click on the 'UPPER CASE' tab.<br/><br/>Here's an example of text in UPPER CASE.",
  },
  {
    header: "Capitalized Case",
    description:
      "The Capitalized Case Converter automatically changes the initial letter of every word to uppercase while keeping the rest in lowercase.<br/><br/>To achieve this, copy the content you'd like to format in this way and paste it into the form above. Then, click on the 'Capitalized Case' tab.<br/><br/>Here's an example of text in Capitalized Case.",
  },
  {
    header: "Alternating Case",
    description:
      "The Alternating Case Converter enables you to change your text, regardless of its current format, into a pattern that alternates between lowercase and uppercase letters. It creates a sequence of capital and lowercase letters within the same word.<br/><br/>For this effect, simply input your text, and it will generate alternating case text.<br/><br/>Here is an example: tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.",
  },
  {
    header: "Title Case",
    description:
      "The Title Case Converter is an ideal tool for individuals who may be uncertain about how to format the title of an upcoming essay. It guarantees that the appropriate words are capitalized within the context of a title. Common words like 'an' will remain in lowercase, while significant words, such as 'Title,' will be capitalized.<br/><br/>Here's an example of text in Title Case: This Is an Example of Title Case.",
  },
  {
    header: "Inverse Case",
    description:
      "Inverse Case reverses the usual letter capitalization, making uppercase letters lowercase and lowercase letters uppercase.<br/><br/>Here's an example of text in Title Case: THIS IS AN eXAMPLE OF iNVERSE CASE.",
  },
];

function CaseInformation() {
  return <InformationBox data={caseInformationList} />;
}

export default CaseInformation;
