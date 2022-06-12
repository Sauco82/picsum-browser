import Image from "./Image";
import { useDebouncedImgSrc } from "./_hooks";
import styles from "./ImageEditor.module.css";

export default function ImageContainer(){
  const src = useDebouncedImgSrc();

  return (
    <div className={`flex align-items-center justify-center ${styles.image_container}`}>
      <Image src={src} />
    </div>
  );
}