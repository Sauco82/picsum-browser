import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useImageConfig, useSyncUrl, useDebouncedImgSrc } from "./_hooks";
import { reset, init } from "../../slices/imageConfig";
import Editor from "./Editor";
import Header from "../../components/Header";
import ImageContainer from "./ImageContainer";
import styles from "./ImageEditor.module.css";

export default function ImageEditor(){
  const imageConfig = useImageConfig(),          
        dispatch = useDispatch();  
  
  useSyncUrl();

  useEffect(()=>{
    dispatch(init(imageConfig));
    return ()=>dispatch(reset());
  },[]);

  // const {data: photo, isLoading} = useGetPhotoQuery(id);

  return(
    <>
      <Header fullScreen={true}/>      
      <div className={styles.image_editor}>
        <ImageContainer />        
        <Editor />
      </div>
    </>
  );

}