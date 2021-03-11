import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../shared/provider/UserProvider"
import StarWarsAPIService from "../../../shared/api/service/StarWarsAPIService"
import { UserProvider } from "../../../shared/provider/UserProvider"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"
import "./PlayersView.css"

export const PlayersView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [starwarsData, setStarswarsData] = useState()
	const { playersProvider } = useContext(UserContext)
	const [playersChar] = playersProvider
	const [count, setCount] = useState(1)

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers()
		setUsers(response.data)
	}

	useEffect(() => {
		fetchData()
	}, [loading])

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
