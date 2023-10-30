import InformationBox from "../../UI/InformationBox";

const BoldInformationList = [
  {
    header: "Bold Font Text Converter",
    description:
      "When you want to make text stand out quickly, bold text is a compelling choice. However, manually formatting all your text in bold can be time-consuming, especially if you're not proficient with keyboard shortcuts. For a quicker solution, our Bold Text Converter comes in handy. It provides a swift and straightforward way to meet your bold text needs, ensuring your content stands out effectively.<br/><br/>Today, bold text is widely used to capture the audience's attention. It's also a great stylistic choice for emphasizing specific information. For instance, a crucial statistic or fact can be better understood when highlighted in bold text. Bold type brings a significant stylistic change that can quickly make a strong impact, ensuring your text grabs attention and engages your audience.<br/><br/>It's the small things in life that can leave a lasting impression, and that's precisely what our Bold Text Converter does. These tools efficiently handle tasks that, when done manually, can be labor-intensive and time-consuming.<br/><br/>If you're looking to reduce the time spent on a particular task, this is an effective approach. Editors like this enable you to easily input or paste as much text as needed into the left-hand box. Then, you can retrieve the formatted text from the right-hand box using the 'Copy to Clipboard' or 'Download Text' feature.",
  },
  {
    header: "How Does the Bold Case Converter Work?",
    description:
      "To generate bold text, simply compose your content as usual in the left column. As you write, you'll notice the text transforming into its bold version in the right column.<br/><br/>Once you've finished composing the text you want to bold, you'll find it available for copying and pasting. Just highlight the text on the right, 'copy' it, and then paste it into your preferred text editor.<br/><br/>For an example of bolded text, please refer to the following:<br/><br/>𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁.<br/><br/>If you have any ideas on how we can enhance the bold text generator, please don't hesitate to contact us through the contact page. We look forward to hearing your thoughts.",
  },
];

function BoldInformation() {
  return <InformationBox data={BoldInformationList} />;
}

export default BoldInformation;
