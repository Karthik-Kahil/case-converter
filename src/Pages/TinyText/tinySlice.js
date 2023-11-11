import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import tinyText from "tiny-text";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const tinySlice = createSlice({
  name: "tinySlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      state.convertedText = tinyText(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, convertedTextLoader, copyClipBoard } =
  tinySlice.actions;

export default tinySlice.reducer;
