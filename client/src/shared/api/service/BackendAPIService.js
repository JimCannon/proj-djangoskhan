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

const updateUser = (data) => {
	return http.put(`/user/${data._id}`, data)
}

const updateUserTest = (userInfo) => {
	return http.put(`/user`, { ...userInfo })
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	updateUserTest,
}
