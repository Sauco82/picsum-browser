import React from "react";

function Image({src}){
  return(
    <img src={src} alt="Better title" />
  );
}

export default React.memo(Image);