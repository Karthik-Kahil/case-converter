import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentText: "",
};

const convertslice = createSlice({
  name: "convertCase",
  initialState,
  reducers: {
    sentenceCase(state, action) {
      state.currentText = action.payload;
    },
  },
});

export const { sentenceCase } = convertslice.actions;

export default convertslice.reducer;
