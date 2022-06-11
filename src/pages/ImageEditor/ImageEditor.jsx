import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useGetPhotoQuery } from "../../api/api";
import { imageSrc } from "./_utils";
import { debounce } from "underscore";
import { useDispatch } from "react-redux";

import Image from "./Image";
import { useImageConfig, useSyncUrl, useDebouncedImgSrc } from "./_hooks";
import { reset, init, updateWidth } from "../../slices/imageConfig";

export default function ImageEditor(){
  const {id} = useParams(),        
        imageConfig = useImageConfig(),  
        src = useDebouncedImgSrc(),
        dispatch = useDispatch();

  // const {data: photo, isLoading} = useGetPhotoQuery(id);
  
  useEffect(()=>{
    dispatch(init(imageConfig));
    return ()=>dispatch(reset());
  },[]);

  useSyncUrl();
  
  return(
    <>
      <h1>Image editor {id}</h1>
      <input 
        type="range" 
        min={30} 
        max={1000} 
        onChange={e=>dispatch(updateWidth(e.target.value))} 
        value={imageConfig.width}
      />
      <Image src={src}  />
    </>
  );

}