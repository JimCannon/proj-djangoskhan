import { useContext, useState } from "react"
import "./Navbar.css"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import { UserContext } from "../../../shared/provider/UserProvider"
import { Profile } from "../../profile/Profile"
import { Modal } from "../../../components/modal/Modal"
import { SignInView } from "../../../views/SignInView"

export const DesktopNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line
	const { authenticatedUserProvider } = useContext(UserContext)
	// eslint-disable-next-line
	const [authenticatedUser, setAuthenticatedUser] = authenticatedUserProvider
	//set showmodal to false, preventing the popup
	const [showModal, setShowModal] = useState(false)

	const signInModal = () => {
		setShowModal(true)
	}

	const cancelSignInModal = () => {
		setShowModal(false)
	}

	const displayUserIfAuthenticated = () => {
		return authenticatedUser ? (
			<div className="profile">
				<Profile />
			</div>
		) : (
			<div className="navbar-item" onClick={() => signInModal()}>
				Sign in
			</div>
		)
	}

	return (
		<nav className="navbar">
			<div className="container">
				<div className="left">
					<div className="navbar-logo" onClick={() => history.push(RoutingPath.homeView)}>
						Djangos Khan
					</div>
					<div className="navbar-item" onClick={() => history.push(RoutingPath.playersView)}>
						Players
					</div>
					<div className="navbar-item" onClick={() => history.push(RoutingPath.scheduleView)}>
						Schedule
					</div>
					<div className="navbar-item" onClick={() => history.push(RoutingPath.aboutUsView)}>
						About us
					</div>
				</div>
				<div className="right">
					<Modal show={showModal} modalClosed={cancelSignInModal}>
						<SignInView />
					</Modal>
					{displayUserIfAuthenticated()}
				</div>
			</div>
		</nav>
	)
}
