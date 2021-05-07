import { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
	const [authenticatedUserProvider, setAuthenticatedUserProvider] = useState()
	const [playersProvider, setPlayersProvider] = useState()
	const [userBioProvider, setUserBioProvider] = useState()
	const { children } = props

	return (
		<UserContext.Provider
			value={{
				authenticatedUserProvider: [authenticatedUserProvider, setAuthenticatedUserProvider],
				playersProvider: [playersProvider, setPlayersProvider],
				userBioProvider: [userBioProvider, setUserBioProvider],
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
