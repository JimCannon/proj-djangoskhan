import { useContext, useState } from "react";
import "./DesktopNavigation.css";
import "./Navbar.css";
import Logotype from "../../../shared/images/logotype.svg";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import { DesktopNavigationTabs } from "./desktopnavigationtabs/DesktopNavigationTabs";
import { Modal } from "../../../components/modal/Modal";
import { SignInView } from "../../../views/SignInView";

export const DesktopNavigation = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  //set showmodal to false, preventing the popup
  const [showModal, setShowModal] = useState(false);

  const signInModal = () => {
    setShowModal(true);
  };

  const cancelSignInModal = () => {
    setShowModal(false);
  };

  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      // <span onClick={() => history.push(RoutingPath.signInView)} className="signIn">
      // <span onClick={() => signInModal()} className="signIn">
      //   Sign in
      // </span>
      <div class="navbar-item" onClick={() => signInModal()}>
        Sign in
      </div>
    );
  };

  return (
    <nav class="navbar">
      <div class="container">
        <div class="left">
          <div class="navbar-item" onClick={() => history.push(RoutingPath.homeView)}>
            Djangos Khan
          </div>
          <div class="navbar-item" onClick={() => history.push(RoutingPath.playersView)}>
            Players
          </div>
          <div class="navbar-item" onClick={() => history.push(RoutingPath.scheduleView)}>
            Schedule
          </div>
          <div class="navbar-item" onClick={() => history.push(RoutingPath.aboutUsView)}>
            About us
          </div>
        </div>
        <div class="right">
          <Modal show={showModal} modalClosed={cancelSignInModal}>
            <SignInView />
          </Modal>
          {displayUserIfAuthenticated()}
        </div>
      </div>
    </nav>

    // <div className="desktopNavigationWrapper">
    //   <img
    //     onClick={() => history.push(RoutingPath.homeView)}
    //     className="navigationLogotype"
    //     src={Logotype}
    //     alt=""
    //   />
    //   <Modal show={showModal} modalClosed={cancelSignInModal}>
    //     {/* Hej! */}
    //     <SignInView />
    //   </Modal>
    //   <div className="desktopNavigationTabs">
    //     <DesktopNavigationTabs />
    //   </div>
    //   {displayUserIfAuthenticated()}
    // </div>
  );
};
