import Hero from "./components/Hero";
import SharePopup from "./components/SharePopup";
import Content from "./components/Content";

import { useState } from "react";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="dialog-wrapper-outer">
      <article>
        <Hero />
        <Content setShowDialog={setShowDialog} showDialog={showDialog} />
      </article>
      <SharePopup showDialog={showDialog} id="shareLG" />
    </div>
  );
};

export default App;
