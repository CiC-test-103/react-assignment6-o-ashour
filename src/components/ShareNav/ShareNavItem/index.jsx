import styles from './style.module.css';

function ShareNavItem(props) {
  return (
    <li className={styles.li}>
      <img src={props.path} alt={props.description} />
    </li>
  );
}

export default ShareNavItem;
