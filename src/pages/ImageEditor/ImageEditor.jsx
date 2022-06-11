import { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useGetPhotoQuery } from "../../api/api";
import { imageSrc } from "./_utils";

export default function ImageEditor(){
  const {id} = useParams(),
        [ searchParams, setSearchParams ] = useSearchParams(),
        width = searchParams.get("width"),
        height = searchParams.get("height"),
        grayscale = searchParams.get("grayscale"),
        blur = searchParams.get("blur"),
        src = imageSrc({id, width, height, grayscale, blur});

  const {data: photo, isLoading} = useGetPhotoQuery(id, {width,height,grayscale,blur});

  return(
    <>
      <h1>Image editor {id}</h1>
      <input 
        type="range" 
        min={30} 
        max={1000} 
        onChange={e => setSearchParams({width: e.target.value})} 
        value={width || 400}
      />
      <img src={src} alt="Better title" />      
    </>
  );

}