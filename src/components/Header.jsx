import { Link } from "react-router-dom";

export default function Header({fullScreen}){
  const container = fullScreen ? "fullscreen-container" : "container";

  return (
    <header className={`${container} flex justify-between align-items-center`}>
      <Link to="/">
        <img src="/synthesia-logo.svg" alt="Logo" style={{display: "block"}} />      
      </Link>
    </header>
  );
}