import { useState, useEffect } from "react"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"

export const ScheduleView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [newUser, setNewUser] = useState({
		username: "Flädersaft",
		password: "secret",
	})

	const create = async () => {
		try {
			setLoading(true)
			await BackendAPIService.createUser(newUser)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers()
		setUsers(response.data)
	}

	useEffect(() => {
		fetchData()
	}, [loading])
	return (
		<div>
			<h1>Backend API:</h1>
			<p>USERNAME</p>
			<input onChange={(event) => setNewUser({ ...newUser, username: event.target.value })} />{" "}
			<br />
			<p>PASSWORD</p>
			<input /> <br />
			<p>AGE</p>
			<input /> <br />
			<button onClick={() => create()}>Create User</button>
			<hr />
			<h1>Display all users: </h1>
			{users.map((x) => (
				<div>
					<span>{x.username}</span>
				</div>
			))}
		</div>
	)
}
