import UserModel from "../models/User.model.js"

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		age: req.body.age,
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

const deleteUser = async (req, res) => {
	try {
		const dataBaseResponse = await UserModel.findByIdAndDelete(req.params.userId)
		res.status(200).send({ message: "Successfully deleted user", data: dataBaseResponse })
	} catch (error) {
		res.status(500).send({
			message: "Error occured while trying to retrieve user with ID: " + req.params.userId,
			message: error.message,
		})
	}
}

const updateUser = async (req, res) => {
	const data = {
		username: req.body.username,
		password: req.body.password,
	}
	try {
		const dataBaseResponse = await UserModel.findByIdAndUpdate(
			req.params.userId,
			{ $set: { data } },
			{
				new: true,
			}
		)
		res.status(200).send({
			message: "Successfully updated user",
			data: dataBaseResponse,
		})
	} catch (error) {
		res.status(500).send({
			message: "Error occured while trying to retrieve user with ID: " + req.params.userId,
			message: error.message,
		})
	}
}

const queryUsername = async (req, res) => {
	try {
		const dataBaseResponse = await UserModel.find({ username: req.query.username })
		res.status(200).send(dataBaseResponse)
	} catch (error) {
		res.status(500).send({
			message: `Error occured while trying to retrieve user with username: ${req.query.username}`,
			message: error,
		})
	}
}

const getUserById = async (req, res) => {
	try {
		const dataBaseResponse = await UserModel.findOne({ _id: req.query._id })
		res.status(200).send(dataBaseResponse)
	} catch (error) {
		res.status(500).send({
			error: `Error occured while trying to retrieve user with the ID: ${req.query._id}`,
			message: error,
		})
	}
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	queryUsername,
	getUserById,
}
