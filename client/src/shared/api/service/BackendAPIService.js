import http from "../BackendAPI"

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

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	updateUserTest,
	getUserById,
}
