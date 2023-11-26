import InformationBox from "../../UI/InformationBox";

const HexTextInformationList = [
  {
    header: "Text to Hex and Hex to Text",
    description:
      'This online tool provides the capability to convert hexadecimal codes into text and vice versa. It ensures accuracy and helps avoid potential errors in your code.<br/><br/>To use the converter, simply enter the hex code in the provided text box, and observe the result on the right. You can then copy and paste this text into your project.<br/><br/>The converter supports both upper and lowercase letters, as well as numbers and symbols like !$%&*()+.<br/><br/>For converting a large string of hex codes, separate the codes with commas. For example, entering "A1,B2,C3" into the text box would display "41 31 2c 42 32 2c 43 33" in the box beside it.',
  },
  {
    header: "Why Use a Cursed Text Tool?",
    description:
      "Elevate your online presence with our cursed text generator, the ultimate tool for crafting attention-grabbing content. Infuse your words with an unsettling aura, transforming ordinary text into spine-chilling messages that will leave a lasting impression.<br/><br/>Immerse yourself in a realm of typographic terror as you explore an array of eerie fonts, each meticulously designed to evoke a sense of dread and intrigue. Whether you seek to add a touch of mystery to your social media posts or inject a chilling twist into your Halloween greetings, our cursed text generator will unleash the unfathomable horrors lurking within your words.<br/><br/>Embrace the power of textual transformation and watch as your mundane messages morph into captivating spectacles of slanted text. Unleash the eldritch energies within your keyboard and command attention with every post.",
  },
  {
    header: "What is the purpose of this online converter?",
    description:
      "This online converter serves the purpose of transforming hexadecimal strings into text and vice versa. It proves to be a valuable tool for verifying the accuracy of the entered code and avoiding potential errors in the process.",
  },
  {
    header: "How do I convert a large string of hex codes?",
    description:
      'If you have a large string of hex codes that you need to convert, you can achieve this by separating the codes with commas. For instance, if you wished to convert the string "A1, B2, C3" into text, you would input "A1,B2,C3" into the text box, and the result "41 31 2c 42 32 2c 43 33" would be presented in the box beside it.',
  },
];

function HexTextInformation() {
  return <InformationBox data={HexTextInformationList} />;
}

export default HexTextInformation;
