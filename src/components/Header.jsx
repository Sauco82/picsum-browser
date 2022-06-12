export default function Header({fullScreen}){
  const container = fullScreen ? "fullscreen-container" : "container";

  return (
    <header className={`p-3 ${container} flex justify-between align-items-center`}>
      <img src="/synthesia-logo.svg" alt="Logo" />      
    </header>
  );
}