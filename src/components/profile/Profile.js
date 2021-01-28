import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import { ProfileDropDown } from "./profiledropdown/ProfileDropDown";
import "./Profile.css";

export const Profile = () => {
  const [authenticatedUser] = useContext(UserContext);

  return (
    <div className="profileWrapper">
      <img
        className="profileImg"
        src={"https://www.thispersondoesnotexist.com/image"}
        alt=""
      ></img>
      <span className="displayUsername">{authenticatedUser}</span>
      <ProfileDropDown />
    </div>
  );
};
