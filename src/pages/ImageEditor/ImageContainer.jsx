import Image from "./Image";
import { useDebouncedImgSrc, useImageConfig } from "./_hooks";
import styles from "./ImageEditor.module.css";

export default function ImageContainer(){
  const {src, isChanging} = useDebouncedImgSrc(),
        { blur, width, height } = useImageConfig();
  
  const style = isChanging ? {    
    width:    `${width}px`,
    height:   `${height}px`,    
  } : null;

  return (
    <div className={`flex align-items-center justify-center ${styles.image_container}`}>
      <div className={`flex align-items-center justify-center ${styles.future_image_wrapper}`} style={{...style}}>
        <div className={isChanging ? styles.future_image : ""} />
        <Image src={src} />
      </div>
    </div>
  );
}