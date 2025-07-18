import styles from "./style.module.css";

function ShareNavItem(props) {
  return (
    <li className={styles.li}>
      <button>
        <img src={props.path} alt={props.description} />
      </button>
    </li>
  );
}

export default ShareNavItem;
