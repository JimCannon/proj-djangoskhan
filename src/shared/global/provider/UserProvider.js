import { useState, createContext } from 'react';

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState()
    const { children } = props

    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}
