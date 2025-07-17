import styles from './ShareNavItem.module.css';

function ShareNavItem(props) {
  return (
    <li className={styles.li}>
      <img src={props.path} alt={props.description} />
    </li>
  );
}

export default ShareNavItem;
