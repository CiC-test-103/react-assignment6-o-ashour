import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";
import ShareButton from "./components/ShareButton";

import { useState, useRef, useEffect } from "react";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const dialog = useRef(null);

  useEffect(() => {
    if (!showDialog) {
      dialog.current.close();
    } else {
      dialog.current.show();
    }
  }, [showDialog]);

  return (
    <article>
      <Hero />
      <main>
        <Header />
        <Description />
        <Card />
        <ShareButton showDialog={showDialog} setShowDialog={setShowDialog} />
      </main>
      <dialog ref={dialog}>
        <div className="dialog-wrapper-inner">
          <span>SHARE</span>
          <nav>
            <ul>
              <li>
                <figure>
                  <img src="./images/icon-facebook.svg" alt="facebook icon" />
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./images/icon-twitter.svg" alt="twitter icon" />
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
                </figure>
              </li>
            </ul>
          </nav>
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
    </article>
  );
};

export default App;
