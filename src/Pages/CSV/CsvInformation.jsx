import InformationBox from "../../UI/InformationBox";

const CsvInformationList = [
  {
    header: "What does the CSV to JSON converter do?",
    description:
      "Whether you have some JSON code or some CSV code that you want converting int the new format, you can use the tool above to automatically do that for you.<br/><br/>Simply copy the data you have into the above field, JSON code into the JSON field and the CSV data into the CSV field and then you can see it automatically be converted into your desired format in the field next to it. Copy it and then paste it where you need to.<br/><br/>If you have any questions about the converter or even have some suggestions on how we can improve it further, then we’d love to hear about it.",
  },
];

function CsvInformation() {
  return <InformationBox data={CsvInformationList} />;
}

export default CsvInformation;
