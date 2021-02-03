import { useContext } from "react";
import "./DesktopNavigation.css";
import Logotype from "../../../shared/images/logotype.svg";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import { DesktopNavigationTabs } from "./desktopnavigationtabs/DesktopNavigationTabs";

export const DesktopNavigation = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <span
        onClick={() => history.push(RoutingPath.signInView)}
        className="signIn"
      >
        Sign in
      </span>
    );
  };

  return (
    <div className="desktopNavigationWrapper">
      <img
        onClick={() => history.push(RoutingPath.homeView)}
        className="navigationLogotype"
        src={Logotype}
        alt=""
      />
      <div className="desktopNavigationTabs">
        <DesktopNavigationTabs />
      </div>
      {displayUserIfAuthenticated()}
    </div>
  );
};
