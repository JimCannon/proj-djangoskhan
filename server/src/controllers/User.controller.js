import UserModel from "../models/User.model.js"

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		password: req.body.password,
	})

	try {
		const response = await user.save()
		res.status(201).send(response)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const response = await UserModel.find()
		res.status(200).send(response)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const getUserById = async (req, res) => {
	try {
		const response = await UserModel.findById(req.params.userId)
		res.status(200).send(response)
	} catch (error) {
		res
			.status(500)
			.send({
				message: "Error occured while trying to retrieve user with ID: " + req.params.userId,
				message: error.message,
			})
	}
}

export default { createUser, getAllUsers, getUserById }
