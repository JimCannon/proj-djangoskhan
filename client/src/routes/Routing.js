import React, { useEffect, useContext } from "react"
//Import necessary packages from router-dom package
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { PlayersView } from "../views/desktopnavigationsviews/players/PlayersView"
import { HomeView } from "../views/HomeView"
import { SignInView } from "../views/SignInView"
import RoutingPath from "./RoutingPath"
import { UserContext } from "../shared/provider/UserProvider"
import { ScheduleView } from "../views/desktopnavigationsviews/schedule/ScheduleView"
import { AboutUsView } from "../views/desktopnavigationsviews/aboutus/AboutUsView"
import { SettingsView } from "../views/desktopnavigationsviews/desktopnavigationstabsview/settings/SettingsView"
import { AppRoute } from "./AppRoute"
import { PlayersLayout } from "../components/layout/PlayersLayout"

export const Routing = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfAuthenticated = (allowedView, notAllowedView) => {
		return !authenticatedUser ? allowedView : notAllowedView
	}

	const authenticationRequiered = (allowedView, notAllowedView) => {
		return authenticatedUser ? allowedView : notAllowedView
	}

	const checkIfUserIsAuthenticadInBrowser = () => {
		if (!authenticatedUser && localStorage.getItem("user")) {
			setAuthenticatedUser(localStorage.getItem("user"))
		}
	}

	useEffect(() => {
		checkIfUserIsAuthenticadInBrowser()
		// eslint-disable-next-line
	}, [])

	const { children } = props

	return (
		<Router>
			{children}
			<Switch>
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				{/* <Route exact path={RoutingPath.playersView} component={PlayersView} /> */}
				<AppRoute
					exact
					path={RoutingPath.playersView}
					component={PlayersView}
					layout={PlayersLayout}
				/>
				<Route
					exact
					path={RoutingPath.signInView}
					component={blockRouteIfAuthenticated(SignInView, HomeView)}
				/>
				<Route exact path={RoutingPath.aboutUsView} component={AboutUsView} />
				<Route exact path={RoutingPath.scheduleView} component={ScheduleView} />
				<Route
					exact
					path={RoutingPath.settingsView}
					component={authenticationRequiered(SettingsView, SignInView)}
				/>
			</Switch>
		</Router>
	)
}
