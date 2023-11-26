import InformationBox from "../../UI/InformationBox";

const Utf8InformationList = [
  {
    header: "What is UTF8?",
    description:
      "Exactly right! UTF-8's compatibility with ASCII makes it particularly versatile, and its ability to represent characters from various languages and scripts within a single encoding scheme is a key reason for its widespread adoption. It plays a crucial role in ensuring that software and systems can handle text data in a way that supports a diverse range of languages and characters. If you have any specific questions or if there's anything else you'd like to know, feel free to ask!",
  },

  {
    header: "UTF-8 Character Encoding & Decoding",
    description:
      "Certainly! The UTF-8 encoder and decoder tool is versatile, offering valuable functionalities. It proves beneficial for browser testing, identifying weak data validation that could lead to security vulnerabilities, and analyzing byte representations of input data. It's also useful for understanding the characters involved in the byte encoding process.<br/><br/>If you have specific use cases for the tool or any questions, please share your insights. Additionally, if you have suggestions on how we can enhance the tool further, we're open to feedback. Feel free to let us know your thoughts and requirements!",
  },
];

function Utf8Information() {
  return <InformationBox data={Utf8InformationList} />;
}

export default Utf8Information;
