import React from "react";

function Image({src}){
  console.log("render img", src);

  return(
    <img src={src} alt="Better title" />
  );
}
// export default Image;
export default React.memo(Image);