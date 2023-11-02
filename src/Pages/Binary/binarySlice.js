import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import { textToBinary } from "../../Utils/binaryCode";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const binarySlice = createSlice({
  name: "binarySlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;
      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;
      state.convertedText = textToBinary(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, convertedTextLoader, copyClipBoard } =
  binarySlice.actions;

export default binarySlice.reducer;
