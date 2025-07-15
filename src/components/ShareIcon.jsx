import styles from "./ShareIcon.module.css";

function ShareIcon() {
  return (
    <figure className={styles["icon"]}>
      <img src="./images/icon-share.svg" alt="Share Icon" />
    </figure>
  );
}

export default ShareIcon;
