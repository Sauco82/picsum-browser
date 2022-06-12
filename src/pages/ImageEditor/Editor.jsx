import { useDispatch } from "react-redux";


import { useImageConfig } from "./_hooks";
import styles from "./ImageEditor.module.css";
import { 
  updateWidth,
  updateHeight,
  updateGrayscale,
  updateBlur,  
} from "../../slices/imageConfig";

export default function Editor(){
  const dispatch = useDispatch(),
        {width, height, blur, grayscale} = useImageConfig();
  
  return (
    <div className={`${styles.editor}`}>
      <label className="">
        Width
        <input 
          name="width"
          type="range" 
          min={30} 
          max={1000} 
          onChange={e=>dispatch(updateWidth(e.target.value))} 
          value={width}
        />
      </label>
      <label>
        Height
        <input 
          name="height"
          type="range" 
          min={30} 
          max={1000} 
          onChange={e=>dispatch(updateHeight(e.target.value))} 
          value={height}
        />
      </label>
      <label>
        Grayscale
        <input 
          name="grayscale"
          type="checkbox" 
          checked={grayscale}
          onChange={()=>dispatch(updateGrayscale(!grayscale))}        
        />
      </label>
      <label>
        Blur
        <input 
          name="blur"
          type="range" 
          min={0} 
          max={10} 
          onChange={e=>dispatch(updateBlur(e.target.value))} 
          value={blur}
        />
      </label>
    </div>
  ); 
}