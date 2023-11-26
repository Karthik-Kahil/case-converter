import InformationBox from "../../UI/InformationBox";

const JsonStringInformationList = [
  {
    header: "JSON Stringify Text",
    description:
      'Developed by and for developers, this JSON Stringify text generator is designed to streamline the process of formatting for Stringified Text, saving you valuable time. Simply input your text in the left panel, and observe the Stringified Text version generated on the right panel. Copy and paste the result as needed.<br/><br/>The generator automatically converts new lines to "/n" symbols, tabs to "/t" symbols, and encapsulates the entire quote in speech marks. If you have any questions or suggestions for improvement, feel free to reach out - we\'re here to help and open to feedback.',
  },
];

function JsonStringInformation() {
  return <InformationBox data={JsonStringInformationList} />;
}

export default JsonStringInformation;
