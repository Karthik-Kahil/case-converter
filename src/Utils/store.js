import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";
import boldSlice from "../Pages/Bold/boldSlice";
import duplicateSlice from "../Pages/Duplicate/duplicateSlice";
import mirrorSlice from "../Pages/Mirror/mirrorSlice";
import plainSlice from "../Pages/Plain/plainSlice";
import reverseSlice from "../Pages/Reverse/reverseSlice";
import binarySlice from "../Pages/Binary/binarySlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
    boldConvert: boldSlice,
    duplicateConvert: duplicateSlice,
    mirrorConvert: mirrorSlice,
    plainConvert: plainSlice,
    reverseConvert: reverseSlice,
    binaryConvert: binarySlice,
  },
});

export default store;
