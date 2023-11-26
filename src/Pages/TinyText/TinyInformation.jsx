import InformationBox from "../../UI/InformationBox";

const TinyInformationList = [
  {
    header: "Tiny Text Case",
    description:
      "Looking to generate compact text effortlessly? Utilize our user-friendly microtext generator. This tool provides the easiest way for you to transform any text into a diminutive style. Save precious time that would otherwise be spent manually converting text. Our microtext generator simplifies the process, turning what could take hours into a quick and efficient task.<br/><br/>We highly recommend using our convenient microtext generator to streamline the conversion process. Simply input the text you want to change from regular to microtext in the left box, and it will be adjusted to align with the small text style you desire.<br/><br/>When expediting text generation is crucial, this tool can be a game-changer. Instead of laboriously adjusting your text manually, our microtext generator swiftly accomplishes what can be a tedious and time-consuming task.<br/><br/>Take the burden off yourself with the assistance of a microtext generator that ensures accuracy. By avoiding typos, mistakes, and errors, you can promptly complete this task. Regardless of the purpose, our microtext generator simplifies the generation of tiny text, making it a much more efficient process than ever before!",
  },

  {
    header: "Why is the Text Reduced in Size?",
    description:
      "The tiny text generator functions by converting regular text into a series of subscript characters and small caps, giving it a visually smaller appearance. This reduction in size is achieved through the use of a Unicode alphabet. The small text generator provides you with the ability to easily copy and paste the transformed text into status updates on platforms like Facebook, Instagram, and Twitter, as well as applications like Excel and Word.<br/><br/>If the text were genuinely converted into a tiny font, unfortunately, you wouldn't have the flexibility to use it across various platforms.<br/><br/>For instance:<br/>ᴛʜɪs ɪs ᴀɴ ᴇxᴀᴍᴘʟᴇ ᴏꜰ ᴛɪɴʏ ᴛᴇxᴛ ᴄᴀꜱᴇ ᴡɪᴛʜ ꜱᴍᴀʟʟ ᴄᴀᴘꜱ<br/><br/>ᵗʰⁱˢ ⁱˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ᵗⁱⁿʸ ᵗᵉˣᵗ ᶜᵃˢᵉ ᵘˢⁱⁿᵍ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
  },
];

function TinyInformation() {
  return <InformationBox data={TinyInformationList} />;
}

export default TinyInformation;
