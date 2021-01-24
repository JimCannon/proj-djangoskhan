import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../shared/global/provider/UserProvider'
import RoutingPath from '../routes/RoutingPath';

export const SignInView = () => {

    const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''})
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const signIn = () => {
        history.push(RoutingPath.homeView)
        setAuthenticatedUser(loginCredentials.username)
        localStorage.setItem('user', loginCredentials.username)
    }

    return (
        <div>
            <form>
                <input
                    placeholder='username'
                    onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br 
                />
                <input
                    type="password"
                    placeholder='password'
                    onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} 
                />
                <br />
                <button onClick={() => signIn()}>Sign in</button>
            </form>
        </div>
    )
}
