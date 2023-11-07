import toast from "react-hot-toast";
import styled from "styled-components";

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

const drag = () => {
  document.getElementById("uploadFile").parentNode.className =
    "draging dragBox";
};

const drop = () => {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
};

const dragNdrop = async (e) => {
  const file = e.target.files[0]; // Get the selected file
  if (file && file.type === "text/csv") {
    const reader = new FileReader(); // Create a FileReader

    reader.onload = function (e) {
      const fileContent = e.target.result; // Get the file content
      console.log(fileContent);
      //   document.getElementById("fileContent").textContent = fileContent; // Display the content
    };

    reader.readAsText(file); // Read the file as text
  } else {
    toast.error("Please upload files in .csv format");
  }
};

function UploadInput() {
  return (
    <>
      <StyledOuter>
        <div className="dragBox">
          Drag and Drop image here
          <input
            type="file"
            accept=".csv"
            onChange={dragNdrop}
            onDragOver={drag}
            onDrop={drop}
          />
        </div>
      </StyledOuter>
    </>
  );
}

export default UploadInput;
