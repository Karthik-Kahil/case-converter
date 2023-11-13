import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";
import boldSlice from "../Pages/Bold/boldSlice";
import duplicateSlice from "../Pages/Duplicate/duplicateSlice";
import mirrorSlice from "../Pages/Mirror/mirrorSlice";
import plainSlice from "../Pages/Plain/plainSlice";
import reverseSlice from "../Pages/Reverse/reverseSlice";
import binarySlice from "../Pages/Binary/binarySlice";
import csvtojson from "../Pages/CSV/csvtojson";
import cursedSlice from "../Pages/CursedText/cursedSlice";
import invisibleSlice from "../Pages/Invisible/invisibleSlice";
import tinySlice from "../Pages/TinyText/tinySlice";
import strikethroughSlice from "../Pages/Strikethrough/strikethroughSlice";
import superSlice from "../Pages/SuperScript/superSlice";
import titlecaseSlice from "../Pages/TitleCase/titlecaseSlice";
import underlineSlice from "../Pages/Underline/underlineSlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
    boldConvert: boldSlice,
    duplicateConvert: duplicateSlice,
    mirrorConvert: mirrorSlice,
    plainConvert: plainSlice,
    reverseConvert: reverseSlice,
    binaryConvert: binarySlice,
    csvConvert: csvtojson,
    cursedTool: cursedSlice,
    invisibleGen: invisibleSlice,
    tinyGen: tinySlice,
    strikeThrough: strikethroughSlice,
    superSlice: superSlice,
    titleSlice: titlecaseSlice,
    underlineSlice: underlineSlice,
  },
});

export default store;
