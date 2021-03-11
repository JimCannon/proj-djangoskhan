import RoutingPath from "../../../routes/RoutingPath"
import { useHistory } from "react-router-dom"
import { useContext } from "react"

import "./ProfileDropDown.css"
import { UserContext } from "../../../shared/provider/UserProvider"

export const ProfileDropDown = () => {
	const history = useHistory()
	// eslint-disable-next-line
	const { authenticatedUserProvider } = useContext(UserContext)
	const [authenticatedUser, setAuthenticatedUser] = authenticatedUserProvider

	const logout = () => {
		setAuthenticatedUser(false)
		localStorage.removeItem("user")
		history.push(RoutingPath.homeView)
	}

	const settings = () => {
		history.push(RoutingPath.settingsView)
	}

	return (
		<div className="profileDropdown">
			<ul>
				<li onClick={() => settings()}>Settings</li>
				<li onClick={() => logout()}>Sign Out!</li>
			</ul>
		</div>
	)
}
