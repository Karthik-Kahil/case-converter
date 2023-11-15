import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const hextextSlice = createSlice({
  name: "hextextSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      const stringToHex = (str) => {
        let hex = [];
        for (let i = 0; i < str.length; i++) {
          const hexCharCode = str.charCodeAt(i).toString(16);
          hex.push(hexCharCode.length === 1 ? "0" + hexCharCode : hexCharCode);
        }
        return hex.join(" ");
      };

      state.convertedText = stringToHex(state.currentText);
    },

    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = hextextSlice.actions;

export default hextextSlice.reducer;
