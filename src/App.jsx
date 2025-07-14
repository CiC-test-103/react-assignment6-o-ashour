const App = () => {
  return (
    <article>
      <figure>
        <img src="./images/drawers.jpg" alt="Forest green chest of drawers" />
      </figure>

      <main>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>

        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
      </main>

      <div className="card">
        <figure>
          <img
            src="./images/avatar-michelle.jpg"
            alt="Michelle Appleton's Avatar"
          />
        </figure>
        <h2>Michelle Appleton</h2>
        <span className="date">28 Jun 2020</span>
      </div>

      <figure>
        <img src="./images/icon-share.svg" alt="Share Icon" />
      </figure>
    </article>
  );
};

export default App;
