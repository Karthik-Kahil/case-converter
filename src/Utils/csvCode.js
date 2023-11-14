import toast from "react-hot-toast";
import { convertedTextLoader, currentTextLoader } from "../Pages/CSV/csvtojson";
import Papa from "papaparse";

const csvConvertCode = ({ setLoader, dispatch }, e) => {
  const file = e.target.files[0]; // Get the selected file
  if (file && file.type !== "text/csv")
    toast.error("Please upload files in .csv format");

  const reader = new FileReader(); // Create a FileReader

  if (file && file.type === "text/csv")
    reader.onload = function (e) {
      setLoader(false);
      const fileContent = e.target.result; // Get the file content
      dispatch(currentTextLoader(fileContent));
    };

  reader.readAsText(file); // Read the file as text

  Papa.parse(file, {
    header: true, // Use the first row as the header
    skipEmptyLines: true,
    complete: (result) => {
      if (result.data.length > 0) {
        dispatch(convertedTextLoader(result.data));
      } else {
        toast.error("CSV file is empty.");
      }
    },
    error: (error) => {
      toast(`Error parsing CSV: ${error.message}`, {
        duration: 2000,
      });
    },
  });
};

export default csvConvertCode;
