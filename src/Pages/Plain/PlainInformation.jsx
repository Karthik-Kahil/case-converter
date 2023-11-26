import InformationBox from "../../UI/InformationBox";

const PlainInformationList = [
  {
    header: "Effortless Formatting Preservation with Plain Text Converter",
    description:
      "Simplify the conversion of rich text with ease by following these simple steps: Copy the rich text you want to convert, paste it into our converter, and watch as our tool effortlessly eliminates embedded code while preserving numbered, bulleted, and tabbed formatting. Copy the resulting plain text and seamlessly integrate it into any online form or application without sacrificing your formatting. Say goodbye to manual reformatting challenges and embrace streamlined productivity with ConvertCase's Plain Text Converter.",
  },

  {
    header: "Free Conversion Service",
    description:
      "Experience the benefits of our free converter. Visit our website and effortlessly convert your rich text into plain text today.",
  },
  {
    header: "Preserve Formatting with Ease",
    description:
      "Our converter guarantees the preservation of your numbered, bulleted, and tabbed formatting, simplifying the process of copying and pasting your text into any online form or application without compromising its structure.",
  },
  {
    header: "Multilingual Support",
    description:
      "Benefit from our converter's comprehensive language support, which includes non-Latin scripts. Simply copy and paste your text into the converter, and we'll handle the rest.",
  },
];

function PlainInformation() {
  return <InformationBox data={PlainInformationList} />;
}

export default PlainInformation;
