import { useSelector } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { debounce, throttle } from "underscore";

import { reset } from "../../slices/imageConfig";
import { imageSrc, removeFalsyKeys } from "./_utils";

export const useImageConfig = () => {
  const [searchParams] = useSearchParams(),
        imageConfig = useSelector(s=>s.imageConfig);
  
  const searchImageConfig = useMemo(()=>({
    width:     searchParams.get("width") || 600,
    height:    searchParams.get("height") || 400,
    grayscale: searchParams.get("grayscale") || false,
    blur:      searchParams.get("blur") || 0,
  }), []);
  
  if (imageConfig) return imageConfig;
  return searchImageConfig;
};

export const useInitializeImageConfig = () => {
  useEffect(()=>{
    dispatch(init(imageConfig));
    return ()=>dispatch(reset());
  },[]);
};

export const useSyncUrl = ()=>{
  const config = useImageConfig(),
        [ _, setSearchParams ] = useSearchParams();

  const changeSearchParams = useMemo( ()=>(
    throttle (config=>{      
      setSearchParams(removeFalsyKeys(config), {replace: true});
    },300)
  ), []);

  useEffect(()=>{
    changeSearchParams(config);
  },[config]);
};


export const useDebouncedImgSrc = ()=>{
  const {id} = useParams(),
        config = useImageConfig(),
        [ src, setSrc ]= useState(imageSrc(id, config));

  const changeSrc = useMemo( ()=>(
    debounce (config=>{         
      setSrc(imageSrc(id, config));
    },750)
  ), []);

  useEffect(()=>{
    changeSrc(config);
  },[config]);

  return src;
};