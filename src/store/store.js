import { configureStore } from "@reduxjs/toolkit";

import imageConfigReducer from "../slices/imageConfig";
import { api } from "../api/api";

export const store = configureStore({
  reducer: {
    imageConfig: imageConfigReducer,
    api:         api.reducer,
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(api.middleware)
  )
});
