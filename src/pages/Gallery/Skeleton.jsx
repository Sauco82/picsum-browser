import { useGetPhotosQuery } from "../../api/api";

export default function Skeleton(){
  return(
    <>
      <h1>Gallery</h1>

      <p>Loading photos</p>      
    </>
  );
}