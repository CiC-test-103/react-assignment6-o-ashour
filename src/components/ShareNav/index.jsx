import styles from "./style.module.css"
import ShareNavItem from "./ShareNavItem";

const shareIcons = {
  facebook: {
    path: "../images/icon-facebook.svg",
    description: "facebook icon",
  },
  twitter: {
    path: "../images/icon-twitter.svg",
    description: "twitter icon",
  },
  pinterest: {
    path: "../images/icon-pinterest.svg",
    description: "pinterest icon",
  },
};

function ShareNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {Object.keys(shareIcons).map((shareIconKey) => {
          return (
            <ShareNavItem
              key={shareIconKey}
              path={shareIcons[shareIconKey].path}
              description={shareIcons[shareIconKey].description}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default ShareNav;
