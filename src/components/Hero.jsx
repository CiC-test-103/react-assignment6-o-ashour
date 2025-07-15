import styles from "./Hero.module.css";

function Hero() {
  return (
    <figure className={styles["hero"]}>
      <img src="./images/drawers.jpg" alt="Forest green chest of drawers" />
    </figure>
  );
}

export default Hero;
