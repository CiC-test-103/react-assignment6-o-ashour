import CardWrapper from "../CardWrapper";
import Description from "../Description";
import Header from "../Header";
import styles from "./style.module.css";

function Content(props) {
  return (
    <div className={styles.content}>
      <main>
        <Header />
        <Description />
      </main>
      <CardWrapper
        setShowDialog={props.setShowDialog}
        showDialog={props.showDialog}
      />
    </div>
  );
}

export default Content;
