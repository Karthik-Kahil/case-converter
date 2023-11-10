import InformationBox from "../../UI/InformationBox";

const CursedInformationList = [
  {
    header: "Cursed Text Generator",
    description:
      "To use the cursed text generator simply enter the text you want being 'cursed' on the left panel. On the right, you'll see the output of what your text will look like with our generator.<br/><br/>If you're looking to add a bit of excitement to your posts, then this is the perfect tool for you. With our cursed text generator, you can make your posts stand out from the rest. Ideal for a Halloween text generator, it's produces very scary text. So go ahead and give it a try!",
  },
  {
    header: "Why Use a Cursed Text Tool?",
    description:
      "If you're looking for a way to add some excitement to your posts, then you should definitely try out our cursed text generator. With this tool, you can easily create slanted text that will make your posts stand out from the rest.<br/><br/>As you can see there is a range of different 'cursed fonts' that you can use to create your own 'creepy vibe'. Not only is this tool great for adding a bit of excitement to your posts, but it's also perfect for creating attention-grabbing headlines. So if you're looking for a way to make your content more noticeable.",
  },
];

function CursedInformation() {
  return <InformationBox data={CursedInformationList} />;
}

export default CursedInformation;
