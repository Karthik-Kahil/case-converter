import InformationBox from "../../UI/InformationBox";

const BinaryInformationList = [
  {
    header: "Binary Code Generator",
    description:
      "Binary code, one of the world's most widely used computing languages, has a rich history. When you aim to communicate with a machine, merely inserting text often won't suffice. You often need to convert your message into binary code, which can also bring a unique stylistic transformation to your text.<br/><br/>Whether your goal is to conceal your code in a hidden message or to make a creative design decision, our binary code translator might be just what you're seeking. This tool simplifies the process and keeps binary code accessible for your needs.<br/><br/>Translating ASCII text into binary can be a time-consuming task, taking hours for just a few paragraphs. To save time and minimize errors, our binary code translator is a smart choice.<br/><br/>This user-friendly tool streamlines the process and helps you avoid mistakes that can impact the intended message. Give it a try by downloading our translation tool. You'll quickly discover the value of using binary code in coding or artistic design.",
  },
  {
    header: "How to change text to binary code?",
    description:
      "All you have to do is write out text on the left hand side and then as you do you will see the code being generated on the right. You can then copy and paste this code wherever you want. You will see that when you paste it back on the right hand side column that it also gets converted back into English. You can do this back and forth if you wish.<br/><br/>If you are looking for an example of binary code then please see below:<br/><br/>01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000011 01101111 01100100 01100101 00100000 01010100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01101111 01110010<br/><br/>Of course, if you have any questions with regards to the binary code generator then please do let us know and we will be more than happy to help you.",
  },
];

function BinaryInformation() {
  return <InformationBox data={BinaryInformationList} />;
}

export default BinaryInformation;
