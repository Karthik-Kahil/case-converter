import InformationBox from "../../UI/InformationBox";

const SlugifyurlInformationList = [
  {
    header: "How Does the Slugify URL Generator Work?",
    description:
      'The Slugify URL Generator simplifies the process of creating user-friendly and search engine-friendly URLs. By inputting your desired text or URL, the tool uses an advanced algorithm to remove special characters, replace spaces with hyphens, and convert the text to lowercase. This results in a clean and easily readable URL, enhancing user experience and potentially improving search engine rankings.<br/><br/>For example, the tool can transform a text like "This is an example of a slug handle" into the hyphenated slug URL handle: "this-is-an-example-of-a-slug-handle". Use this Slugify URL Generator to optimize your URLs and make them more accessible for your audience.',
  },
];

function SlugifyurlInformation() {
  return <InformationBox data={SlugifyurlInformationList} />;
}

export default SlugifyurlInformation;
