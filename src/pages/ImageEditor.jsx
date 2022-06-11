import { useParams } from "react-router-dom";

export default function ImageEditor(){
  const {id} = useParams();

  return(
    <h1>Image editor {id}</h1>
  );

}