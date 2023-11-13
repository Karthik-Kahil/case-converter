import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
  differentType: "sansSerifBold",
};

const boldSlice = createSlice({
  name: "boldSlice",
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
    convertedTextLoader(state, action) {
      const convertedTexts = action.payload;
      state.convertedText = convertedTexts
        .split("\n")
        .map((letter) => letter)
        .join("<br>\n");
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
    typeSelector(state, action) {
      state.differentType = action.payload;
    },
  },
});

export const {
  currentTextLoader,
  convertedTextLoader,
  copyClipBoard,
  typeSelector,
} = boldSlice.actions;

export default boldSlice.reducer;
