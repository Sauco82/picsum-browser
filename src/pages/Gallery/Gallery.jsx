import { Link } from "react-router-dom";

import { useGetPhotosQuery } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import Error from "../../components/Error";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";
import styles from "./Gallery.module.css";

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
      <Hero/>
      <div className={`container ${styles.gallery}`} >
        <div className="grid" style={{"--row-gap": "2rem","--column-gap": "1rem"}}>
          {photos.map( ({id, author}) => (
            <div className="g-col-4" key={id}>
              <Link to={`/${id}`}>
                <picture>
                  <source srcSet={`https://picsum.photos/id/${id}/300/400.webp`} loading="lazy" />
                  <img src={`https://picsum.photos/id/${id}/300/400`} loading="lazy" />
                </picture>
                <p>by {author}</p>
              </Link>
            </div>
          ))}
        </div>
        
        <div className={`flex justify-center m-4 ${styles.pagination}`}>
          {prev && <Link to={`?page=${parseInt(page) - 1}`} >Prev</Link>}        
          {next && <Link to={`?page=${parseInt(page) + 1}`}>Next</Link>}
        </div>        
      </div>      
    </>
  );
}