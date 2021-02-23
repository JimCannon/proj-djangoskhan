import "./SideBar.css";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";

export const SideBar = (props) => {
  const history = useHistory();

  const handleRedirect = (navigate) => {
    history.push(navigate);
    props.drawerHandler(false);
  };

  return (
    <div className={props.drawerIsOpen ? "side-drawer open" : "side-drawer"}>
      <button
        onClick={() => {
          props.drawerHandler(false);
        }}
      >
        Close Hamburger
      </button>
      <ul>
        <li onClick={() => history.push(handleRedirect(RoutingPath.playersView))}>Players</li>
        <li onClick={() => history.push(handleRedirect(RoutingPath.signInView))}>Sign In</li>
      </ul>
    </div>
  );
};
