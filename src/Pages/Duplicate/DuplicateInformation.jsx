import InformationBox from "../../UI/InformationBox";

const DuplicateInformationList = [
  {
    header: "Effortless Duplicate Line Removal",
    description:
      "We acknowledge the challenges that come with handling duplicate lines in your text. That's precisely why we've created this user-friendly online tool to assist you in tidying up your data. Our tool is an ideal choice for professionals dealing with extensive data sets, students engaged in research projects, and anyone seeking a swift and effective solution for removing duplicate lines.",
  },
  {
    header: "What is the Online Duplicate Line Remover?",
    description:
      "The Online Duplicate Line Remover is a no-cost online utility designed to simplify the process of eliminating duplicate lines from your text. It proves valuable for handling extensive data sets, streamlining lists, and eradicating redundant information.",
  },
  {
    header: "How do I use the Online Duplicate Line Remover?",
    description:
      "To utilize this tool, just paste your text into the designated field. On the right, the tool will automatically process your text and deliver a version that is free of duplicate lines.",
  },
  {
    header: "Is there a limit to the size of text I can process?",
    description:
      "The Online Duplicate Line Remover efficiently manages substantial data sets. For optimal performance, we recommend processing text with fewer than 1,000,000 lines at a time.",
  },
];

function DuplicateInformation() {
  return <InformationBox data={DuplicateInformationList} />;
}

export default DuplicateInformation;
