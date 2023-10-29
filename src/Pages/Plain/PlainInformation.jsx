import InformationBox from "../../UI/InformationBox";

const PlainInformationList = [
  {
    header: "How to Use ConvertCase's Plain Text Converter",
    description:
      "Using our Plain Text Converter is simple. Just copy the rich text you want to convert and paste it into the converter. Our tool will automatically remove all the embedded code and preserve the numbered, bulleted, and tabbed formatting. You can then copy the plain text and use it in any online form or application without losing your formatting. Say goodbye to manual reformatting and hello to seamless productivity with ConvertCase's Plain Text Converter.",
  },

  {
    header: "Is the Plain Text Converter free to use?",
    description:
      "Yes, our converter is completely free to use. Simply visit our website and start converting your rich text to plain text today.",
  },
  {
    header: "What types of formatting does the Plain Text Converter preserve?",
    description:
      "Our converter preserves numbered, bulleted, and tabbed formatting, making it easy for you to copy and paste your text into any online form or application without losing your formatting.",
  },
  {
    header:
      "Does the Plain Text Converter support languages other than English?",
    description:
      "Yes, our converter supports a wide range of languages, including non-Latin scripts. Simply copy and paste your text into the converter and let us do the rest.",
  },
];

function PlainInformation() {
  return <InformationBox data={PlainInformationList} />;
}

export default PlainInformation;
