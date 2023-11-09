import toast from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CursedText() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);

  const copiedSucessfully = () => {
    (currentText.length > 0 && toast.success("Copied to clipboard")) ||
      toast.error("Please enter some text to copy");

    dispatch(copyClipBoard());
  };

  const keyPressHandler = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "c") copiedSucessfully();
    if ((e.metaKey || e.ctrlKey) && e.key === "b") handleDownload();
  };

  const handleDownload = () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);

    const file = new Blob([convertedText]);
    currentText.length > 0 && saveAs(file, "CaseMorph_Mirror_Convert.txt");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Cursed Text Tool</h3>
          <p>
            Try our cursed text generator and create slanting text that suits
            your profile and content! If you&rsquo;re looking for action-packed
            posts, then this is the perfect tool for you. With our cursed text
            generator, you can add a touch of excitement to your posts and make
            them stand out from the rest. So go ahead and give it a try!
          </p>
        </HeaderText>
      </StyledBox>
    </div>
  );
}

export default CursedText;
