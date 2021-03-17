import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../shared/provider/UserProvider"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"
import "./PlayersView.css"

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

	/* Make a playersCard component instead */
	return (
		<div>
			<div className="playersContainer">
				{users.map((x) => (
					<div className="playersCard">
						<h3>Name: {x.username}</h3>
					</div>
				))}
			</div>
		</div>
	)
}
