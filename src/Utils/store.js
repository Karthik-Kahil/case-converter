import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";
import boldSlice from "../Pages/Bold/boldSlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
    boldConvert: boldSlice,
  },
});

export default store;
