import InformationBox from "../../UI/InformationBox";

const InvisibleInformationList = [
  {
    header: "Invisible Text Generator",
    description:
      "Numerous apps and websites do not recognize empty space as valid input. Nevertheless, our convenient online tool provides a workaround. As an invisible text generator, you can effortlessly input the desired text, copy the generated result, and paste it wherever needed.  ",
  },
  {
    header:
      "Can I create invisible letters or words using the Invisible Text Generator?",
    description:
      "Indeed, with the Invisible Text Generator, you can create invisible letters and words. When you input a character or letter, the generator produces an invisible counterpart for each. Moreover, if you input a word, the generator generates invisible text that corresponds to that specific word.",
  },
];

function InvisibleInformation() {
  return <InformationBox data={InvisibleInformationList} />;
}

export default InvisibleInformation;
