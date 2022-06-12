import { Link } from "react-router-dom";

import { useGetPhotosQuery } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import Error from "../../components/Error";
import Header from "../../components/Header";

export default function Gallery(){
  const [searchParams] = useSearchParams(),
        page = searchParams.get("page") || 1;  

  const {isLoading, data} = useGetPhotosQuery({page});

  if (isLoading) return <Skeleton/>;
  if (!data) return <Error/>;

  const {photos, next, prev} = data;  

  return(
    <>
      <Header/>
      <h1>Gallery</h1>
      {photos.map( ({id, author}) => (
        <Link to={`/${id}`} key={id}>
          <div>
            <img src={`https://picsum.photos/id/${id}/200/300`} />
            <p>{author}</p>
          </div>
        </Link>
      ))}
      <h1>
        {prev && <Link to={`?page=${parseInt(page) - 1}`} >Prev</Link>}
      </h1>
      <h1>
        {next && <Link to={`?page=${parseInt(page) + 1}`}>Next</Link>}
      </h1>
    </>
  );
}