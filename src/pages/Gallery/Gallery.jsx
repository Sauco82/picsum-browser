import { Link } from "react-router-dom";

import { useGetPhotosQuery } from "../../api/api";
import { useSearchParams, useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import Error from "../../components/Error";

export default function Gallery(){
  const [searchParams] = useSearchParams(),
        page = searchParams.get("page") || 1,
        limit = searchParams.get("limit");  

  const {isLoading, data} = useGetPhotosQuery({page, limit});

  if (isLoading) return <Skeleton/>;
  if (!data) return <Error/>;

  const {photos, next, prev} = data;  

  return(
    <>
      <h1>Gallery</h1>
      {photos.map( ({id}) => (
        <Link to={`/${id}`}>
          <img src={`https://picsum.photos/id/${id}/200/300`} />
        </Link>
      ))}
      <h1>
        {prev && <Link to={`?page=${page - 1}`} >Prev</Link>}
      </h1>
      <h1>
        {next && <Link to={`?page=${page + 1}`}>Next</Link>}
      </h1>    
    </>
  );
}