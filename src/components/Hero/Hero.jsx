import styles from "./Hero.module.css";

export default function Hero(){
  return (
    <div className={`${styles.splash} flex justify-center align-items-center`}>
      <h1>Synthesia Image browser</h1>
    </div>
  );
}