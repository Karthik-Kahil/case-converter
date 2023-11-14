/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import styled from "styled-components";
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
    height: 200px;
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

function UploadInput({ accept, placeHolder, convertLoader }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const csvDrop = (e) => {
    setLoader(true);

    convertLoader({ setLoader, dispatch }, e);
  };

  return (
    <>
      <StyledOuter>
        <div className="dragBox">
          {placeHolder}
          <input
            type="file"
            accept={accept}
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
