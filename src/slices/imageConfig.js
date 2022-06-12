import { createSlice } from "@reduxjs/toolkit";

import { DEFAULT_IMAGE_CONFIG } from "../pages/ImageEditor/_consts";

const initialState = null;

const parseBlur = blur => blur ? parseInt(blur) : 0;
const parseGrayscale = grayscale => !!grayscale;

export const imageConfigSlice = createSlice({
  name:     "imageConfig",
  initialState,  
  reducers: {
    updateWidth: (state, {payload: width}) => {
      state.width = parseInt(width);
    },
    updateHeight: (state, {payload: height}) => {
      state.height = parseInt(height);
    },
    updateBlur: (state, {payload: blur}) => {
      state.blur = parseBlur(blur);
    },
    updateGrayscale: (state, {payload: grayscale}) => {
      state.grayscale = parseGrayscale(grayscale);
    },
    init: (state, {payload: {width, height, blur, grayscale}}) => {
      if (state != initialState) return state;
      
      return {
        width:     parseInt(width), 
        height:    parseInt(height), 
        blur:      parseBlur(blur), 
        grayscale: parseGrayscale(grayscale)
      };
    },
    reset: () => initialState,
  },  
});

export const { 
  updateWidth, 
  updateHeight,
  updateBlur,
  updateGrayscale,
  reset, 
  init 
} = imageConfigSlice.actions;

export default imageConfigSlice.reducer;
