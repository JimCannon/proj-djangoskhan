import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { PlayerEdit } from "./playerEdit/PlayerEdit"
import { PlayerInfo } from "./playerInfo/PlayerInfo"
import { UserContext } from "../../../shared/provider/UserProvider"
import RoutingPath from "../../../routes/RoutingPath"
import djangoHero from "../../../shared/images/djangoHero.jpg"
import "./PlayerCard.scss"

export const PlayerCard = ({ player, setPlayers, players }) => {
	const { playersBioProvider } = useContext(UserContext)
	// eslint-disable-next-line
	const [playerBio, setPlayerBio] = playersBioProvider
	const history = useHistory()
	const [edit, setEdit] = useState(false)

	const openPlayerBioAndSendPlayerData = (player) => {
		setPlayerBio(player)
		history.push(RoutingPath.playerBio + "/" + player._id)
	}

	return (
		<div className="playerCard" onClick={() => openPlayerBioAndSendPlayerData(player)}>
			<div className="ds-top"></div>
			<div className="avatar-holder">
				<img src={djangoHero} alt="Django" />
			</div>
			{edit ? (
				<PlayerEdit
					player={player}
					setEdit={setEdit}
					players={players}
					setPlayers={setPlayers.bind(this)}
				></PlayerEdit>
			) : (
				<PlayerInfo player={player} setEdit={setEdit}></PlayerInfo>
			)}
		</div>
	)
}
