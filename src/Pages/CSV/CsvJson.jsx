import toast, { Toaster } from "react-hot-toast";
import WordsCounter from "../../Features/Counter/WordsCounter";
import HeaderText from "../../UI/HeaderText";
import StyledBox from "../../UI/StyledBox";
import StyledTwoGrid from "../../UI/StyledTwoGrid";
import TextOutput from "../../UI/TextOutput";
import TextArea from "../../UI/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveAs } from "file-saver";

import { copyClipBoard, currentTextLoader } from "./csvtojson";
import UploadInput from "../../UI/UploadInput";
import CsvInformation from "./CsvInformation";
import csvConvertCode from "../../Utils/csvCode";

function CsvJson() {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentText, convertedText, charactersCount, wordCount, lineCount } =
    useSelector((select) => select.csvConvert);

  const textHandler = (e) => {
    dispatch(currentTextLoader(e.target.value));
  };

  const copiedSucessfully = () => {
    (convertedText.length > 0 && toast.success("Copied to clipboard")) ||
      toast.error("Please enter some text to copy");

    dispatch(copyClipBoard());
  };

  const keyPressHandler = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "c") copiedSucessfully();
    if ((e.metaKey || e.ctrlKey) && e.key === "b") handleDownload();
  };

  // const handleDownload = () => {
  //   if (isDownloading) {
  //     return;
  //   }

  //   setIsDownloading(true);

  //   const file = new Blob([convertedText]);
  //   (convertedText.length > 0 && saveAs(file, "CaseMorph_csv_to_json.json")) ||
  //     toast.error("No files to download");

  //   setIsDownloading(false);
  // };

  const handleDownload = () => {
    if (isDownloading) {
      return;
    }

    currentText.length === 0 && toast.error("No files to download");

    setIsDownloading(true);

    const plainText = convertedText.replace(/<[^>]*>/g, "");
    const file = new Blob([plainText]);
    plainText.length > 0 && saveAs(file, "CaseMorph_Pro_json.json");

    setIsDownloading(false);
  };

  return (
    <div onKeyDown={keyPressHandler}>
      <StyledBox>
        <HeaderText>
          <h3>Convert CSV to JSON and JSON to CSV</h3>
          <p>
            This tool is straightforward and enables you to convert CSV to JSON
            and vice versa, JSON to CSV. Just copy and paste your code into the
            respective field, and observe the conversion in the adjacent field.
          </p>
        </HeaderText>
        <Toaster />
        <UploadInput
          accept={".csv,.xlsx,.xls"}
          placeHolder={"Drag & drop a CSV file here or click to upload"}
          convertLoader={csvConvertCode}
        />
        <StyledTwoGrid>
          <TextArea textHandler={textHandler} currentText={currentText} />
          <TextOutput
            textSelection={false}
            currentText={convertedText}
            copiedSucessfully={copiedSucessfully}
            handleDownload={handleDownload}
            downloadBtn={"Download JSON"}
            isTextArea={true}
          />
        </StyledTwoGrid>
        <WordsCounter
          charactersCount={charactersCount}
          wordCount={wordCount}
          lineCount={lineCount}
        />
      </StyledBox>
      <CsvInformation />
    </div>
  );
}

export default CsvJson;
