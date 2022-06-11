export function imageSrc({
  id,
  grayscale,
  blur,
  width,
  height,
}={}) {
  if (!id) throw "Missing image ID";

  let url = `https://picsum.photos/id/${id}/${width || 600}/${height || 400}`;
  
  if (grayscale && blur) return `${url}?grayscale&blur=${blur}`;
  if (grayscale) return `${url}?grayscale`;
  if (blur) return `${url}?blur=${blur}`;

  return url;
}