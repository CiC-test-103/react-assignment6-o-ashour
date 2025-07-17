import { useEffect, useRef } from "react";
import "../variables.css";
import ShareNav from "./ShareNav";

function SharePopup(props) {
  const dialog = useRef(null);

  useEffect(() => {
    if (!props.showDialog) {
      dialog.current.close();
    } else {
      dialog.current.show();
    }
  }, [props.showDialog]);

  return (
    <dialog ref={dialog}>
      <div className="dialog-wrapper-inner">
        <span>SHARE</span>
        <ShareNav />
      </div>
      <svg viewBox="-28 0 56 57">
        <rect
          x="0"
          y="0"
          width="40"
          height="40"
          fill="hsl(217, 19%, 35%)"
          transform="rotate(45)"
        />
      </svg>
    </dialog>
  );
}

export default SharePopup;
