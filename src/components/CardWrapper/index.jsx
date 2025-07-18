import Card from "../Card";
import ShareButton from "../ShareButton";
import SharePopup from "../SharePopup";
import styles from "./style.module.css";

function CardWrapper(props) {
  return (
    <div className={styles.wrapper}>
      <Card />
      <SharePopup showDialog={props.showDialog} id="shareSM" />
      <ShareButton
        showDialog={props.showDialog}
        setShowDialog={props.setShowDialog}
        id="shareBtnSM"
      />
      <ShareButton
        showDialog={props.showDialog}
        setShowDialog={props.setShowDialog}
        id="shareBtnLG"
      />
    </div>
  );
}

export default CardWrapper;
