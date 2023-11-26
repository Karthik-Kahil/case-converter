import InformationBox from "../../UI/InformationBox";

const UtmBuilderInformationList = [
  {
    header: "How Does the UTM Builder Generator Work?",
    description:
      "The UTM Builder Generator simplifies the creation of UTM codes for your marketing campaigns. To begin, input your campaign's destination URL, source, medium, name, and any relevant terms or content. The generator will then amalgamate these components to generate a distinctive UTM code that can be appended to your URL for tracking purposes.<br/><br/>By incorporating UTM codes into your marketing campaigns, you can access essential data on traffic sources, user behavior, and the efficacy of your strategies. This invaluable information empowers you to make informed decisions, fine-tune your marketing initiatives, and ultimately achieve superior results for your business. Harness the capabilities of our UTM Builder Generator to elevate your marketing campaigns today.",
  },

  {
    header: "What are the main UTM parameters?",
    description:
      "The primary UTM parameters are:<br/><br/>&bull; utm_source - Identifies the traffic source (e.g., Google, Facebook).<br/>&bull; utm_medium - Describes the marketing medium (e.g., email, cpc, social).<br/>&bull; utm_campaign - Specifies the specific campaign or promotion.<br/>&bull; utm_term - Used for paid search to identify keywords.<br/>&bull; utm_content - Differentiates similar content or links within the same ad.",
  },
  {
    header: "How do I use a UTM-built link?",
    description:
      "Absolutely, once you've generated the UTM-tagged link using our UTM Builder Generator, you can incorporate it into your campaigns, ads, emails, or social media posts. When users interact with the link and click on it, their actions will be systematically tracked based on the specified UTM parameters. This tracking mechanism provides valuable insights into the performance of your various marketing channels, helping you understand the effectiveness of each campaign element and make informed decisions for future strategies.",
  },
  {
    header: "Does it integrate with analytics platforms?",
    description:
      "Exactly, analytics platforms like Google Analytics are designed to recognize and categorize traffic based on UTM parameters. When users click on a UTM-tagged link, the parameters embedded in the URL provide detailed information about the source, medium, campaign, and other relevant details. This data is then captured and processed by analytics tools, allowing you to track and analyze the performance of your marketing campaigns accurately. It's a powerful way to gain insights into user behavior, measure the success of different channels, and optimize your marketing efforts accordingly.",
  },
];

function UtmBuilderInformation() {
  return <InformationBox data={UtmBuilderInformationList} />;
}

export default UtmBuilderInformation;
