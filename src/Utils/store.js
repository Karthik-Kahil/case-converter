import { configureStore } from "@reduxjs/toolkit";
import ConvertSlice from "../Pages/Home/ConvertSlice";

const store = configureStore({
  reducer: {
    convertCase: ConvertSlice,
  },
});

export default store;
