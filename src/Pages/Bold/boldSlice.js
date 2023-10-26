import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
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
      state.convertedText = action.payload;
    },
  },
});

export const { currentTextLoader, convertedTextLoader } = boldSlice.actions;

export default boldSlice.reducer;
