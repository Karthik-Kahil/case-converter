import { createSlice } from "@reduxjs/toolkit";
import { copyTextToClipboard } from "../../Utils/copyclip";
import morsify from "morsify";

const initialState = {
  currentText: "",
  convertedText: "",
  playButtonText: "Play",
  convertedAudio: "",
  charactersCount: 0,
  wordCount: 0,
  lineCount: 0,
};

const morsecodeSlice = createSlice({
  name: "morsecodeSlice",
  initialState,
  reducers: {
    currentTextLoader(state, action) {
      state.currentText = action.payload;

      state.charactersCount = action.payload.split("").length;
      state.wordCount = action.payload
        .split(" ")
        .filter((word) => word !== "").length;
      state.lineCount = action.payload.split(/\n/).length;

      const encoded = morsify.encode(state.currentText);
      state.convertedText = encoded;
    },
    playAudio(state) {
      state.convertedAudio = morsify.audio(state.convertedText);
      state.convertedAudio.play();
      state.playButtonText = "Stop";
    },
    pauseAudio(state) {
      state.convertedAudio.stop();
      state.playButtonText = "Play";
    },
    copyClipBoard(state) {
      copyTextToClipboard(state.convertedText);
    },
  },
});

export const { currentTextLoader, copyClipBoard, playAudio, pauseAudio } =
  morsecodeSlice.actions;

export default morsecodeSlice.reducer;

// actionAudio: {
//     prepare(playAudio, pauseAudio) {
//       return { payload: { playAudio, pauseAudio } };
//     },
//     reducer(state, action) {
//       const morsifyAudio = morsify.audio(state.convertedText);

//       if (action.playAudio) {
//         morsifyAudio.play();
//         state.playButtonText = "Pause";
//       }

//       if (action.pauseAudio) {
//         morsifyAudio.stop();
//         state.playButtonText = "Play";
//       }
//     },
//   },
