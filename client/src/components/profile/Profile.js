import { useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { ProfileDropDown } from "./profiledropdown/ProfileDropDown"
import "./Profile.css"

export const Profile = () => {
	const { authenticatedUserProvider } = useContext(UserContext)
	const [authenticatedUser] = authenticatedUserProvider

	return (
		<div className="profileWrapper">
			<span className="displayUsername">{authenticatedUser}</span>
			<ProfileDropDown />
		</div>
	)
}
