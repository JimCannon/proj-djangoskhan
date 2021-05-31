import { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
	const [authenticatedUserProvider, setAuthenticatedUserProvider] = useState()
	const [playersProvider, setPlayersProvider] = useState()
	const [playersBioProvider, setPlayersUserBioProvider] = useState()
	const [navbarClassNameProvider, setNavbarClassNameProvider] = useState()
	const { children } = props

	return (
		<UserContext.Provider
			value={{
				authenticatedUserProvider: [authenticatedUserProvider, setAuthenticatedUserProvider],
				playersProvider: [playersProvider, setPlayersProvider],
				playersBioProvider: [playersBioProvider, setPlayersUserBioProvider],
				navbarClassNameProvider: [navbarClassNameProvider, setNavbarClassNameProvider],
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
