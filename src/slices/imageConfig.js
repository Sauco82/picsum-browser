import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const imageConfigSlice = createSlice({
  name:     "imageConfig",
  initialState,  
  reducers: {
    updateWidth: (state, {payload: width}) => {
      state.width = width;
    },
    init: (state, {payload: searchConfig}) => ({
      ...state,
      ...searchConfig,
    }),
    reset: () => initialState,
  },  
});

export const { updateWidth, reset, init } = imageConfigSlice.actions;

export default imageConfigSlice.reducer;
