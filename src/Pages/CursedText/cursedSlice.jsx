import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export {currentTextLoader} = cursedSlice.actions

export default cursedSlice.reducer;
