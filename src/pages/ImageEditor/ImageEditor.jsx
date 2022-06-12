import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Image from "./Image";
import Editor from "./Editor";
import { useImageConfig, useSyncUrl, useDebouncedImgSrc } from "./_hooks";
import { reset, init } from "../../slices/imageConfig";

export default function ImageEditor(){
  const {id} = useParams(),        
        imageConfig = useImageConfig(),  
        src = useDebouncedImgSrc(),
        dispatch = useDispatch();  
  
  useSyncUrl();

  useEffect(()=>{
    dispatch(init(imageConfig));
    return ()=>dispatch(reset());
  },[]);

  // const {data: photo, isLoading} = useGetPhotoQuery(id);

  return(
    <>
      <h1>Image editor {id}</h1>      
      <Image src={src}  />
      <Editor />
    </>
  );

}