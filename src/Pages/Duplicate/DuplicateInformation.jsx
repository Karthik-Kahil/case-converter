import InformationBox from "../../UI/InformationBox";

const DuplicateInformationList = [
  {
    header: "Effortless Duplicate Line Removal",
    description:
      "We understand the challenges of dealing with duplicate lines in your text. That's why we've developed this easy-to-use online tool to help you clean up your data. Our tool is perfect for professionals dealing with large data sets, students working on research projects, and anyone in need of quick and efficient duplicate line removal.",
  },
  {
    header: "What is the Online Duplicate Line Remover?",
    description:
      "The Online Duplicate Line Remover is a free online tool that helps you to easily remove duplicate lines from your text. This tool is useful for managing large data sets, cleaning up lists, and eliminating redundant information.",
  },
  {
    header: "How do I use the Online Duplicate Line Remover?",
    description:
      "To use the tool, simply paste your text into the provided field and on the right the tool will automatically process your text and provide a version free of any duplicate lines.",
  },
  {
    header: "Is there a limit to the size of text I can process?",
    description:
      "The Online Duplicate Line Remover can handle large data sets efficiently. However, for best performance, we recommend processing text of less than 1,00,000 lines at a time.",
  },
];

function DuplicateInformation() {
  return <InformationBox data={DuplicateInformationList} />;
}

export default DuplicateInformation;
