import styles from "./style.module.css";

function Card() {
  return (
    <div className={styles["card"]}>
      <figure>
        <img
          src="./images/avatar-michelle.jpg"
          alt="Michelle Appleton's Avatar"
        />
      </figure>
      <div>
        <h2>Michelle Appleton</h2>
        <span>28 Jun 2020</span>
      </div>
    </div>
  );
}

export default Card;
