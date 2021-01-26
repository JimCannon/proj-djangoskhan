import React, {useEffect, useContext} from 'react';
//Import necessary packages from router-dom package
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PlayersView } from '../views/PlayersView';
import { HomeView } from '../views/HomeView';
import { SignInView } from '../views/SignInView';
import RoutingPath from './RoutingPath'
import {UserContext} from '../shared/provider/UserProvider'

export const Routing = (props) =>  {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const checkIfUserIsAuthenticadInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("user"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticadInBrowser()
    }, [])

    const { children } = props

    return(
        <Router>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView}component={HomeView} />
                <Route exact path={RoutingPath.playersView}component={PlayersView} />
                <Route exact path={RoutingPath.signInView} component={SignInView} />
            </Switch>
        </Router>
    )
}