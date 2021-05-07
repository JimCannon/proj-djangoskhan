import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { PlayerEdit } from "./playerEdit/PlayerEdit"
import { PlayerInfo } from "./playerInfo/PlayerInfo"
import { UserContext } from "../../../shared/provider/UserProvider"
import RoutingPath from "../../../routes/RoutingPath"
import djangoHero from "../../../shared/images/djangoHero.jpg"
import "./PlayerCard.scss"

export const PlayerCard = ({ user, setUsers, users }) => {
	const { userBioProvider } = useContext(UserContext)
	const [userBio, setUserBio] = userBioProvider
	const history = useHistory()
	const [edit, setEdit] = useState(false)

	const openPlayerBioAndSendUserData = (user) => {
		setUserBio(user)
		history.push(RoutingPath.playerBio + "/" + user._id)
	}

	return (
		<div className="playerCard" onClick={() => openPlayerBioAndSendUserData(user)}>
			<div className="ds-top"></div>
			<div className="avatar-holder">
				<img src={djangoHero} alt="Django" />
			</div>
			{edit ? (
				<PlayerEdit
					user={user}
					setEdit={setEdit}
					users={users}
					setUsers={setUsers.bind(this)}
				></PlayerEdit>
			) : (
				<PlayerInfo user={user} setEdit={setEdit}></PlayerInfo>
			)}
		</div>
	)
}
