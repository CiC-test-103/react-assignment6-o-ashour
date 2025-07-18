import styles from "./style.module.css";

function ShareButton(props) {
  const iconStyles = {
    default: {
      color: "#6E8098",
      backgroundColor: "hsl(210, 46%, 95%)",
    },
    active: {
      color: "#fff",
      backgroundColor: "hsl(214, 17%, 51%)", // same as #6E8098?
    }
  }
  return (
    <button
    id={props.id}
      className={styles.icon}
      onClick={() => {
        props.setShowDialog(() => !props.showDialog);
      }}
      style={{ backgroundColor: `${props.showDialog ? iconStyles.active.backgroundColor : iconStyles.default.backgroundColor }`, top: `${props.showDialog ? '3px' : 'initial'}`}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={!props.showDialog ? iconStyles.default.color : iconStyles.active.color}
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
    </button>
  );
}

export default ShareButton;
