import { useState, useEffect } from "react"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"
import "./PlayersView.css"
import { PlayerList } from "../../../components/playerList/PlayerList"

export const PlayersView = () => {
	const [players, setPlayers] = useState([])
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		const response = await BackendAPIService.getAllPlayers()
		setPlayers(response.data)
	}

	useEffect(() => {
		fetchData()
	}, [loading])

	return (
		<div className="playersBody">
			<div className="playersContainer">
				<PlayerList players={players} setPlayers={setPlayers} setLoading={setLoading} />
			</div>
		</div>
	)
}
