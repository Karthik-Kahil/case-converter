import InformationBox from "../../UI/InformationBox";

const InvisibleInformationList = [
  {
    header: "Invisible Text Generator",
    description:
      "There are a lot of apps and websites that don’t accept empty space as an input, however, you can get around this with our handy online tool. An invisible text generator, simply type the text you want to and then copy the text to be pasted wherever you want.",
  },
  {
    header:
      "Can I create invisible letters or words using the Invisible Text Generator?",
    description:
      "Yes, the Invisible Text Generator can create invisible letters and words. For each character or letter you input, an invisible character is produced. If you input a word, the generator will produce invisible text corresponding to that word.",
  },
];

function InvisibleInformation() {
  return <InformationBox data={InvisibleInformationList} />;
}

export default InvisibleInformation;
