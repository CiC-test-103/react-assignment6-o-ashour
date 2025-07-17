import "../variables.css";

function ShareNavItem(props) {
  return (
    <li>
      <img src={props.path} alt={props.description} />
    </li>
  );
}

export default ShareNavItem;
