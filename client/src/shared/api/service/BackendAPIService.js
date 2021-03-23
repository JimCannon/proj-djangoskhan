import http from "../BackendAPI"

const createUser = (data) => {
	return http.post("/user", data)
}

const getAllUsers = () => {
	return http.get("/user")
}

const deleteUser = (id) => {
	return http.delete(`/user/${id}`)
}

const updateUser = (id, data) => {
	return http.put(`/user/${id}`, data)
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
}
