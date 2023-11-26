import toast, { Toaster } from "react-hot-toast";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveAs } from "file-saver";
import { copyClipBoard, currentTextLoader } from "./UtmSlice";
import InputFields from "./InputFields";
import UtmBuilderInformation from "./UtmBuilderInformation";

function UtmBuilder() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText } = useSelector(
    (select) => select.utmBuilder
  );

  const textHandler = (data) => {
    dispatch(currentTextLoader(data));
  };

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
          <h3>UTM Builder</h3>
          <p>
            The UTM Builder Generator simplifies the process of creating custom
            UTM codes, empowering marketers to track and analyze the performance
            of their marketing campaigns. This user-friendly tool provides a
            convenient interface for generating precise and accurate UTM codes,
            enhancing the ability to optimize marketing efforts and improve
            return on investment (ROI). Gain valuable insights into campaign
            performance with customized UTM tracking and elevate your marketing
            strategy.
          </p>
        </HeaderText>
        <Toaster />
        <StyledTwoGrid>
          {/* <TextArea textHandler={textHandler} /> */}
          <InputFields textHandler={textHandler} />
          <TextOutput
            textSelection={false}
            currentText={convertedText}
            copiedSucessfully={copiedSucessfully}
            handleDownload={handleDownload}
            openLinkBtn={true}
          />
        </StyledTwoGrid>
      </StyledBox>
      <UtmBuilderInformation />
    </div>
  );
}

export default UtmBuilder;
