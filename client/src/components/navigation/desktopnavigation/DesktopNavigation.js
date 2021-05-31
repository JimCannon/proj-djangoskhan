import React, { useContext, useState, useEffect } from "react"
import "./Navbar.scss"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import { UserContext } from "../../../shared/provider/UserProvider"
import { Profile } from "../../profile/Profile"
import { Modal } from "../../../components/modal/Modal"
import { SignInView } from "../../../views/SignInView"

export const DesktopNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line
	const { authenticatedUserProvider, navbarClassNameProvider } = useContext(UserContext)
	// eslint-disable-next-line
	const [authenticatedUser, setAuthenticatedUser] = authenticatedUserProvider
	const [navbarClassName, setNavbarClassName] = navbarClassNameProvider
	//set showmodal to false, preventing the popup
	const [showModal, setShowModal] = useState(false)
	const [navbar, setNavbar] = useState(false)
	const [test, setTest] = useState("")
	const [loading, setLoading] = useState(false)

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

	const changeNavBarBackground = () => {
		if (window.scrollY >= 70) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}

	window.addEventListener("scroll", changeNavBarBackground)

	const navbarTransparentOnHomeView = () => {
		setLoading(true)
		if (history.location.pathname === RoutingPath.homeView) {
			setTest(history.location.pathname + " HOME")
			// console.log(test)
		} else if (history.location.pathname !== RoutingPath.homeView) {
			setTest(history.location.pathname + " NOT HOME")
			// console.log(test)
		}
		setLoading(false)
	}

	const navigatePath = (path) => {
		history.push(path)
		navbarTransparentOnHomeView()
		console.log(test)
		// console.log(history.location.pathname)
	}

	useEffect(() => {
		navbarTransparentOnHomeView()
		console.log(test)
	}, [loading])

	return (
		<nav className={navbar ? `navbar-active ${navbarClassName}` : `navbar ${navbarClassName}`}>
			<div className="container">
				<div className="left">
					<div className="navbar-logo" onClick={() => navigatePath(RoutingPath.homeView)}>
						Djangos Khan
					</div>
					<div className="navbar-item" onClick={() => navigatePath(RoutingPath.playersView)}>
						Players
					</div>
					<div className="navbar-item" onClick={() => navigatePath(RoutingPath.scheduleView)}>
						Schedule
					</div>
					<div className="navbar-item" onClick={() => navigatePath(RoutingPath.aboutUsView)}>
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
