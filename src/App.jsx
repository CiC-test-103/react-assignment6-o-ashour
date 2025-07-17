import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";
import ShareButton from "./components/ShareButton";
import SharePopup from "./components/SharePopup";

import { useState } from "react";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <article>
      <Hero />
      <main>
        <Header />
        <Description />
        <Card />
        <ShareButton showDialog={showDialog} setShowDialog={setShowDialog} />
      </main>
      <SharePopup showDialog={showDialog} />
    </article>
  );
};

export default App;
