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
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;
    },
    sentenceCase(state) {
      const sentence = state.currentText.toLowerCase();
      state.currentText = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    },
    lowerCase(state) {
      const sentence = state.currentText.toLowerCase();
      state.currentText = sentence;
    },
    upperCase(state) {
      const sentence = state.currentText.toUpperCase();
      state.currentText = sentence;
    },
    capitalizeCase(state) {
      const sentence = state.currentText.toLowerCase("").split(" ");
      state.currentText = sentence
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    inverseCase(state) {
      const sentence = state.currentText.toUpperCase("").split(" ");
      state.currentText = sentence
        .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
        .join(" ");
    },
    clear(state) {
      state.currentText = "";
    },
  },
});

export const {
  sentenceCase,
  textLoader,
  lowerCase,
  upperCase,
  capitalizeCase,
  inverseCase,
  clear,
} = convertslice.actions;

export default convertslice.reducer;
