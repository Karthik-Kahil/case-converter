/* eslint-disable react/prop-types */
import InformationBox from "../../UI/InformationBox";

const SuperScriptInformationList = [
  {
    header: "How Does the Superscript Generator Work?",
    description:
      "Superscript text involves characters positioned slightly above the normal line of type. Commonly used for citing footnotes, mathematical expressions, or denoting special characters in chemical formulas (e.g., `E=mc^2`), superscript also serves well for writing small text, offering multiple ways to enhance your content.<br/><br/>Utilizing our Superscript Generator is simple. Just input your regular text into the designated panel, and it will be automatically converted into superscript format in the adjacent panel. Once converted, copy and paste the text into your desired document or application. It's as straightforward as that!<br/><br/>ᵗʰⁱˢ ⁱˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ᵗⁱⁿʸ ᵗᵉˣᵗ ᶜᵃˢᵉ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
  },
];

function SuperScriptInformation() {
  return <InformationBox data={SuperScriptInformationList} />;
}

export default SuperScriptInformation;
