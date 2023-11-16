import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const slugifyurlSlice = createSlice({
  name: "slugifyurlSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      // const generateSlug = (text) => {
      //   return slugify(text, {
      //     lower: true, // Convert to lowercase
      //     remove: /[*+~.()'"!:@]/g, // Remove special characters
      //   });
      // };
      // state.convertedText = generateSlug(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = slugifyurlSlice.actions;

export default slugifyurlSlice.reducer;
