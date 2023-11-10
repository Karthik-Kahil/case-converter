import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const invisibleSlice = createSlice({
  name: "invisibleText",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = invisibleSlice.actions;

export default invisibleSlice.reducer;
