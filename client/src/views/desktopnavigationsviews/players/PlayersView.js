import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../shared/provider/UserProvider"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"
import "./PlayersView.css"
import { PlayerList } from "../../../components/playerList/PlayerList"

export const PlayersView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [updateField, setUpdateField] = useState(true)
	const { playersProvider } = useContext(UserContext)
	const [playersChar] = playersProvider
	const [newUser, setNewUser] = useState({
		username: "Flädersaft",
		age: 0,
		password: "secret",
	})

	const createUser = async () => {
		try {
			setLoading(true)
			await BackendAPIService.createUser(newUser)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const updateUser = async (id, data) => {
		try {
			setLoading(true)
			await BackendAPIService.updateUser(id, data)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const deleteUser = async (id) => {
		try {
			setLoading(true)
			await BackendAPIService.deleteUser(id)
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

	const updateUserButton = () => {
		setUpdateField(!updateField)
		console.log(updateField)
	}

	const updateUserField = (event) => {
		setUsers({
			...users,
			[event.target.name]: event.target.value,
		})
	}

	/* Make a playersCard component instead */
	return (
		<div>
			<div className="playersContainer">
				<PlayerList users={users} setUsers={setUsers} />
				{/* {users.map((user) => {
					return <PlayersCards users={users} setUsers={setUsers} users={users} />
				})} */}
			</div>
			<hr />
			<div>
				<h1>Backend API:</h1>
				<p>USERNAME</p>
				<input onChange={(event) => setNewUser({ ...newUser, username: event.target.value })} />
				<br />
				<p>PASSWORD</p>
				<input onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} />
				<br />
				<p>AGE</p>
				<input onChange={(event) => setNewUser({ ...newUser, age: event.target.value })} />
				<br />
				<button onClick={() => createUser()}>Create User</button>
			</div>
		</div>
	)
}
