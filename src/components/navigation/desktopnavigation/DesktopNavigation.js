import {useContext} from 'react'
import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.png';
import { useHistory } from 'react-router-dom';
import RoutingPath from "../../../routes/RoutingPath"
import { UserContext } from '../../../shared/global/provider/UserProvider'

export const DesktopNavigation = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className="desktopNavigationWrapper">
            <img 
                onClick={() => history.push(RoutingPath.homeView)}
                className="navigationLogotype"
                src={Logotype} alt="" />
            <span 
                onClick={() => history.push(RoutingPath.playersView)} 
                className="players">Players</span>
            <span 
                onClick={() => history.push(RoutingPath.signInView)}
                className="signIn">Sign in</span>
            <h3>{authenticatedUser}</h3>
        </div>
    )
}
