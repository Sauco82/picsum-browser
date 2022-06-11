import { useGetPhotosQuery } from "../../api/api";

export default function Gallery(){
  const {isLoading, data} = useGetPhotosQuery({page: 2, limit: 10});

  console.log({isLoading, data});

  return(
    <>
      <h1>Gallery</h1>

      {isLoading ? 
        <>isLoading...</>
        :      
        data?.photos.map( ({id}) => <img src={`https://picsum.photos/id/${id}/200/300`} />)
      }

      {data?.pagination?.next}
      {data?.pagination?.prev}
    </>
  );
}