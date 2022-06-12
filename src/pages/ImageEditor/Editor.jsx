import { useDispatch } from "react-redux";


import { useImageConfig } from "./_hooks";
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
    <div>
      <input 
        type="range" 
        min={30} 
        max={1000} 
        onChange={e=>dispatch(updateWidth(e.target.value))} 
        value={width}
      />
      <input 
        type="range" 
        min={30} 
        max={1000} 
        onChange={e=>dispatch(updateHeight(e.target.value))} 
        value={height}
      />
      <input 
        type="checkbox" 
        checked={grayscale}
        onChange={()=>dispatch(updateGrayscale(!grayscale))}        
      />
      <input 
        type="range" 
        min={0} 
        max={10} 
        onChange={e=>dispatch(updateBlur(e.target.value))} 
        value={blur}
      />
    </div>
  ); 
}