import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentText: "",
};

const convertslice = createSlice({
  name: "convertCase",
  initialState,
  reducers: {
    textLoader(state, action) {
      state.currentText = action.payload;
      console.log(state.currentText);
    },
    sentenceCase(state, action) {
      const sentence =
        state.currentText.toLowerCase().charAt(0).toUpperCase() +
        state.currentText.slice(1);

      console.log(sentence);
      state.currentText = action.payload;
    },
  },
});

export const { sentenceCase, textLoader } = convertslice.actions;

export default convertslice.reducer;
