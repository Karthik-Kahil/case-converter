import InformationBox from "../../UI/InformationBox";

const PlainInformationList = [
  {
    header: "Effortless Formatting Preservation with Plain Text Converter",
    description:
      "Converting rich text has never been easier. Follow these straightforward steps: Copy the rich text you wish to convert, paste it into our converter, and our tool will seamlessly remove embedded code while retaining numbered, bulleted, and tabbed formatting. Copy the plain text and seamlessly utilize it in any online form or application, without losing your formatting. No more manual reformatting hassles - embrace seamless productivity with ConvertCase's Plain Text Converter.",
  },

  {
    header: "Free Conversion Service",
    description:
      "Enjoy the benefits of our free converter. Visit our website and effortlessly convert your rich text to plain text today.",
  },
  {
    header: "Preserve Formatting with Ease",
    description:
      "Our converter ensures your numbered, bulleted, and tabbed formatting remains intact. It simplifies the process of copying and pasting your text into any online form or application without compromising your formatting.",
  },
  {
    header: "Multilingual Support",
    description:
      "Our converter offers extensive language support, including non-Latin scripts. Just copy and paste your text into the converter, and we'll take care of the rest.",
  },
];

function PlainInformation() {
  return <InformationBox data={PlainInformationList} />;
}

export default PlainInformation;
