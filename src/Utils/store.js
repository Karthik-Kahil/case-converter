import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";
import boldSlice from "../Pages/Bold/boldSlice";
import duplicateSlice from "../Pages/Duplicate/duplicateSlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
    boldConvert: boldSlice,
    duplicateConvert: duplicateSlice,
  },
});

export default store;
