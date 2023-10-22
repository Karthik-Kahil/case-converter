import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const convertslice = createSlice({
  name: "convertCase",
  initialState,
  reducers: {
    textLoader(state, action) {
      state.currentText = action.payload;
      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload.split(" ").length;
      state.lineCount = action.payload.split(/\n/).length;
    },
    sentenceCase(state) {
      const sentence =
        state.currentText.toLowerCase().charAt(0).toUpperCase() +
        state.currentText.slice(1);
      state.currentText = sentence;
    },
    lowerCase(state) {
      const sentence = state.currentText.toLowerCase();
      state.currentText = sentence;
    },
    upperCase(state) {
      const sentence = state.currentText.toUpperCase();
      state.currentText = sentence;
    },
  },
});

export const { sentenceCase, textLoader, lowerCase, upperCase } =
  convertslice.actions;

export default convertslice.reducer;
