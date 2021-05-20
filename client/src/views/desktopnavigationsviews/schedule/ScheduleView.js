import { useState, useEffect } from "react"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"

export const ScheduleView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [newUser, setNewUser] = useState({})

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
			<input onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} />{" "}
			<br />
			<p>AGE</p>
			<input onChange={(event) => setNewUser({ ...newUser, age: event.target.value })} /> <br />
			<button onClick={() => create()}>Create User</button>
			<hr />
			<h1>Display all users: </h1>
			{users.map((x, index) => (
				<div key={index}>
					<span>{x.username}</span>
				</div>
			))}
		</div>
	)
}
