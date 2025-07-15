import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";
import ShareIcon from "./components/ShareIcon";

const App = () => {
  return (
    <article>
      <Hero />
      <main>
        <Header />
        <Description />
        <Card />
        <ShareIcon />
      </main>
    </article>
  );
};

export default App;
