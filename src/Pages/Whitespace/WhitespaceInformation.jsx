/* eslint-disable react/prop-types */
import InformationBox from "../../UI/InformationBox";

const WhitespaceInformationList = [
  {
    header: "Why Use a Whitespace Remover?",
    description:
      "While whitespace may seem trivial, its impact on coding environments and document formatting can be significant. Extra spaces can disrupt program compilation and result in inconsistent document appearances. Our Whitespace Remover is the solution to these issues, saving you both time and the headaches associated with messy code or text. Simply input your text or code, click 'Remove', and voila—clean and tidy content is at your fingertips.<br/><br/>Beyond its application in code and text documents, our tool serves various purposes, including database cleaning and CSV file formatting. It's a versatile solution that you'll find invaluable for maintaining cleanliness and efficiency. So, why wait? Make the smart choice for cleaner, more efficient text and code today.",
  },
];

function WhitespaceInformation() {
  return <InformationBox data={WhitespaceInformationList} />;
}

export default WhitespaceInformation;
