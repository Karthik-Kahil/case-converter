import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const htmltoText = (html) => {
  let text = html;
  text = text.replace(/\n/gi, "");
  text = text.replace(/<style([\s\S]*?)<\/style>/gi, "");
  text = text.replace(/<script([\s\S]*?)<\/script>/gi, "");
  text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
  text = text.replace(/<\/div>/gi, "\n\n");
  text = text.replace(/<\/li>/gi, "\n");
  text = text.replace(/<li.*?>/gi, "  *  ");
  text = text.replace(/<\/ul>/gi, "\n\n");
  text = text.replace(/<\/p>/gi, "\n\n");
  text = text.replace(/<br\s*[\/]?>/gi, "\n");
  text = text.replace(/<[^>]+>/gi, "");
  text = text.replace(/^\s*/gim, "");
  text = text.replace(/ ,/gi, ",");
  text = text.replace(/ +/gi, " ");
  text = text.replace(/\n+/gi, "\n\n");
  return text;
};

const plainSlice = createSlice({
  name: "plainConvert",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;
      state.convertedText = htmltoText(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = plainSlice.actions;

export default plainSlice.reducer;
