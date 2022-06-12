import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";

export default function Skeleton(){
  return(
    <>
      <Header />
      <Hero/>
      <h1>Gallery</h1>
      <p>Loading photos</p>      
    </>
  );
}