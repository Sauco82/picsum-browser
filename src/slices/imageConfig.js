import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: {
    width:  600,
    height: 400,
  },
  grayscale: "false",
  blur:      1,
};

export const imageConfigSlice = createSlice({
  name:     "imageConfig",
  initialState,  
  reducers: {
    updateWidth: (state, {payload: width}) => {
      state.size.width = width;
    },    
  },  
});

export const { updateWidth } = imageConfigSlice.actions;

export default imageConfigSlice.reducer;
