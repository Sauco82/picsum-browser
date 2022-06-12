import React from "react";

function Image({src}){
  return(
    <img src={src} alt="Editable image" data-testid="editable-image" />
  );
}

export default React.memo(Image);