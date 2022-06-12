import { useSelector } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { debounce, throttle } from "underscore";

import { reset } from "../../slices/imageConfig";
import { imageSrc, removeFalsyKeys } from "./_utils";
import { DEFAULT_IMAGE_CONFIG } from "./_consts";

export const useImageConfig = () => {
  const [searchParams] = useSearchParams(),
        imageConfig = useSelector(s=>s.imageConfig);
  
  const searchImageConfig = useMemo(()=>({
    width:     searchParams.get("width")     || DEFAULT_IMAGE_CONFIG.width,
    height:    searchParams.get("height")    || DEFAULT_IMAGE_CONFIG.height,
    blur:      searchParams.get("blur") || DEFAULT_IMAGE_CONFIG.blur,
    grayscale: searchParams.get("grayscale") == "true" ? true : false,
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
        [ src, setSrc ]= useState(imageSrc(id, config)),
        [ isChanging, setIsChanging ] = useState(false);

  const changeSrc = useMemo( ()=>(
    debounce (config=>{         
      setSrc(imageSrc(id, config));
      setIsChanging(false);
    },750)
  ), []);

  useEffect(()=>{
    changeSrc(config);
    setIsChanging(true);
  },[config]);

  return {src, isChanging};
};