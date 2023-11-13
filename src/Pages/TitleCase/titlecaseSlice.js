import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import { titleCase as titleConverter } from "title-case";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const titlecaseSlice = createSlice({
  name: "titlecaseSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      state.convertedText = state.currentText
        .split("\n")
        .map((letter) => titleConverter(letter))
        .join("<br>\n");
      console.log(state.currentText.split("\n").join("\n"));
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});
export const { currentTextLoader, copyClipBoard } = titlecaseSlice.actions;

export default titlecaseSlice.reducer;
