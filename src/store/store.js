import { configureStore } from "@reduxjs/toolkit";
import imageConfigReducer from "../slices/imageConfig";

export const store = configureStore({
  reducer: {
    imageConfig: imageConfigReducer,
  },
});
