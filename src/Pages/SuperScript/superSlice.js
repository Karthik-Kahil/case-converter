import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import toSuperScript from "superscript-text";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const superSlice = createSlice({
  name: "superSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      state.convertedText = toSuperScript(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = superSlice.actions;

export default superSlice.reducer;
