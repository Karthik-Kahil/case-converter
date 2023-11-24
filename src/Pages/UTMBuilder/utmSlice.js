import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";

const initialState = {
  currentText: "",
  convertedText: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const utmSlice = createSlice({
  name: "utmSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      const campaignSouce = state.currentText.campaignSource;
      const campaignMedium = state.currentText.campaignMedium;
      const campaignName = state.currentText.campaignName;
      const campaignTerm = state.currentText.campaignTerm;
      const campaignContent = state.currentText.campaignContent;

      const utmConverter = `${state.currentText.siteURL}${
        campaignSouce.length > 0 ? `?utm_source=${campaignSouce}` : ""
      }${campaignMedium.length > 0 ? `&utm_medium=${campaignMedium}` : ""}${
        campaignName.length > 0 ? `&utm_campaign=${campaignName}` : ""
      }${campaignTerm.length > 0 ? `&utm_term=${campaignTerm}` : ""}${
        campaignContent.length > 0 ? `&utm_content=${campaignContent}` : ""
      }`;

      state.convertedText = utmConverter;
      console.log(state.currentText);
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard } = utmSlice.actions;

export default utmSlice.reducer;
