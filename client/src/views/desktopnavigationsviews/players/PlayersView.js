import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../shared/provider/UserProvider"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"
import "./PlayersView.css"
import { PlayerList } from "../../../components/playerList/PlayerList"

export const PlayersView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const { playersProvider } = useContext(UserContext)
	const [playersChar] = playersProvider

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers()
		setUsers(response.data)
	}

	useEffect(() => {
		fetchData()
	}, [loading])

	return (
		<div className="playersBody">
			<div className="playersContainer">
				<PlayerList users={users} setUsers={setUsers} />
			</div>
		</div>
	)
}
