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

export default {
	createUser,
	getAllUsers,
	deleteUser,
}
