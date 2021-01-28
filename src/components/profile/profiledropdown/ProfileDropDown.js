import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import "./ProfileDropDown.css";
import { UserContext } from "../../../shared/provider/UserProvider";

export const ProfileDropDown = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const logout = () => {
    setAuthenticatedUser(false);
    localStorage.removeItem("user");
    history.push(RoutingPath.homeView);
  };

  return (
    <div className="profileDropdown">
      <span>Alternativ 1</span>
      <span>Alternativ 2</span>
      <span>Alternativ 3</span>
      <span onClick={() => logout()}>Sign Out!</span>
    </div>
  );
};
