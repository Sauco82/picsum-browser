import { DEFAULT_IMAGE_CONFIG } from "./_consts";

export function imageSrc(id,{  
  grayscale,
  blur,
  width,
  height,
}={}) {
  if (!id) throw "Missing image ID";

  let url = `https://picsum.photos/id/${id}/${width || DEFAULT_IMAGE_CONFIG.width}/${height || DEFAULT_IMAGE_CONFIG.height}`;
  
  if (grayscale && blur) return `${url}?grayscale&blur=${blur}`;
  if (grayscale) return `${url}?grayscale`;
  if (blur) return `${url}?blur=${blur}`;

  return url;
}


export function removeFalsyKeys(obj){
  return Object.keys(obj).filter(key => obj[key]).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}