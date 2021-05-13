import http from "../BackendAPI"

/* USERS */

const createUser = (data) => {
	return http.post("/user", data)
}

const getAllUsers = () => {
	return http.get("/users")
}

const deleteUser = (id) => {
	return http.delete(`/user/${id}`)
}

const updateUser = (data) => {
	return http.put(`/user/${data._id}`, data)
}

const updateUserTest = (userInfo) => {
	return http.put(`/user`, { ...userInfo })
}

const getUserById = (userId) => {
	return http.get(`/user?_id=${userId}`)
}

/* PLAYERS */

const createPlayer = (data) => {
	return http.post("/player", data)
}

const getAllPlayers = () => {
	return http.get("/players")
}

const deletePlayer = (id) => {
	return http.delete(`/player/${id}`)
}

const updatePlayer = (data) => {
	return http.post(`/player/${data._id}`, data)
}

const getPlayerById = (playerId) => {
	return http.get(`/player?_id=${playerId}`)
}

// eslint-disable-next-line
export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	updateUserTest,
	getUserById,
	createPlayer,
	getAllPlayers,
	deletePlayer,
	updatePlayer,
	getPlayerById,
}
