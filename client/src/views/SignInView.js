import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../shared/provider/UserProvider"
import RoutingPath from "../routes/RoutingPath"

export const SignInView = () => {
	const [loginCredentials, setLoginCredentials] = useState({
		username: "",
		password: "",
	})
	// eslint-disable-next-line
	const { authenticatedUserProvider } = useContext(UserContext)
	const [authenticatedUser, setAuthenticatedUser] = authenticatedUserProvider
	const history = useHistory()

	const signIn = () => {
		setAuthenticatedUser(loginCredentials.username)
		localStorage.setItem("user", loginCredentials.username)
		history.push(RoutingPath.homeView)
	}

	const updateLoginCredentials = (event) => {
		setLoginCredentials({
			...loginCredentials,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<div>
			<form>
				<input
					name="username"
					placeholder="username"
					onChange={(event) => updateLoginCredentials(event)}
				/>{" "}
				<br />
				<input
					name="password"
					type="password"
					placeholder="password"
					onChange={(event) => updateLoginCredentials(event)}
				/>
				<br />
				<button onClick={() => signIn()}>Sign in</button>
			</form>
		</div>
	)
}
