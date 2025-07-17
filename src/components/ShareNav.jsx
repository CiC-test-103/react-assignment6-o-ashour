import "../variables.css";
import ShareNavItem from "./ShareNavItem";

const shareIcons = {
  facebook: {
    path: "./images/icon-facebook.svg",
    description: "facebook icon",
  },
  twitter: {
    path: "./images/icon-twitter.svg",
    description: "twitter icon",
  },
  pinterest: {
    path: "./images/icon-pinterest.svg",
    description: "pinterest icon",
  },
};

function ShareNav() {
  return (
    <nav>
      <ul>
        {Object.keys(shareIcons).map((shareIconKey) => {
          return (
            <ShareNavItem
              path={shareIconKey.path}
              description={shareIconKey.description}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default ShareNav;
