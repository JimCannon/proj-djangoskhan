import Axios from "axios"

const devURL = "http://localhost:3001"

const BackendAPI = Axios.create({
	baseURL: devURL,
})

// export const getAllUsers = () => {
// 	return Axios.get(devURL + "user")
// 		.then((res) => res)
// 		.catch((err) => console.error(err))
// }

// export const deleteUser = (_id) => {
// 	return Axios.delete(devURL + "user", { data: { _id: _id } })
// 		.then((res) => res)
// 		.catch((err) => console.error(err))
// }

// export const createProduct = () => {
// 	return Axios.post(baseUrl + "product", { ...productInfo })
// 		.then((res) => res)
// 		.catch((err) => console.error(err))
// }

export default BackendAPI
