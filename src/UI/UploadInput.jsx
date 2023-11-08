/* eslint-disable react/prop-types */
import Papa from "papaparse";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { convertedTextLoader, currentTextLoader } from "../Pages/CSV/csvtojson";
import Loader from "../Features/Loader/Loader";
import { useState } from "react";

const StyledOuter = styled.div`
  cursor: pointer;
  padding: 20px 0px 0px 0px;
  strong {
    padding: 0 10px;
  }

  .dragBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    margin: 0 auto;
    position: relative;
    font-weight: bold;
    color: #ffffff;
    border: 2px dashed #ffffff;
    transition: transform 0.3s;
    input[type="file"] {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      cursor: pointer;
    }
  }

  .draging {
    transform: scale(1);
    color: #f5eec8;
    border: 2px dashed #f5eec8;
  }
`;

function UploadInput() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const csvDrop = (e) => {
    setLoader(true);
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
          console.log(result.data); // This will contain the JSON data
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

  return (
    <>
      <StyledOuter>
        <div className="dragBox">
          Drag & drop a CSV file here or click to upload
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={csvDrop}
            disabled={loader}
          />
        </div>
      </StyledOuter>
      {loader && <Loader />}
    </>
  );
}

export default UploadInput;
