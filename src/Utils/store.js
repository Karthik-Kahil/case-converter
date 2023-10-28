import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";
import boldSlice from "../Pages/Bold/boldSlice";
import duplicateSlice from "../Pages/Duplicate/duplicateSlice";
import mirrorSlice from "../Pages/Mirror/mirrorSlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
    boldConvert: boldSlice,
    duplicateConvert: duplicateSlice,
    mirrorConvert: mirrorSlice,
  },
});

export default store;
