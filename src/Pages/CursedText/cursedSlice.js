import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import zalgo from "zalgo-js";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const cursedSlice = createSlice({
  name: "cursedSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      const cursedText = zalgo(state.currentText);
      state.convertedText = cursedText;
    },

    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = cursedSlice.actions;

export default cursedSlice.reducer;
