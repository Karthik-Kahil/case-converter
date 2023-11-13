import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const underlineSlice = createSlice({
  name: "underlineSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = underlineSlice.actions;

export default underlineSlice.reducer;
