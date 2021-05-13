import PlayerModel from "../models/Player.model.js"

/*======= CREATE PLAYER =======*/
const createPlayer = async (req, res) => {
	const player = new PlayerModel({
		name: req.body.name,
		nickname: req.body.nickname, //nickname is optional
		age: req.body.age,
		nation: req.body.nation,
		position: req.body.position,
		rating: req.body.rating,
		playerNumber: req.body.playerNumber,
		stats: [
			{
				pace: req.body.pace,
				shooting: req.body.shooting,
				passing: req.body.passing,
				dribbling: req.body.dribbling,
				defense: req.body.defense,
				physical: req.body.physical,
			},
		],
	})
	console.log(req.body)
	console.log(typeof req.body.age)
	try {
		const databaseResponse = await player.save()
		res.status(201).send(databaseResponse)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const getAllPlayers = async (req, res) => {
	try {
		const databaseResponse = await PlayerModel.find()
		res.status(200).send(databaseResponse)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const deletePlayer = async (req, res) => {
	try {
		const databaseResponse = await PlayerModel.findByIdAndDelete(req.params.playerId)
		res.status(200).send({ message: "Successfully deleted player", data: databaseResponse })
	} catch (error) {
		res.status(500).send({
			messsage: "Error occured while trying to retrieve player with ID: " + req.params.playerId,
			message: error.message,
		})
	}
}

const updatePlayer = async (req, res) => {
	const data = {
		name: req.body.name,
		nickname: req.body.nickname, //nickname is optional
		age: req.body.age,
		nation: req.body.nation,
		position: req.body.position,
		rating: req.body.rating,
		stats: req.body.stats, //stats is an array with numbers
	}
	try {
		const databaseResponse = await PlayerModel.findByIdAndUpdate(req.params.playerId, data, {
			new: true,
		})
		if (databaseResponse) {
			res.status(200).send({
				message: "Successfully updated player",
				data: databaseResponse,
			})
		} else {
			res.status(400).send({
				message: "Something went wrong",
				data: databaseResponse,
			})
		}
	} catch (error) {
		res.status(500).send({
			message: "Error occured while trying to retrieve player with ID: " + req.params.playerId,
			message: error.message,
		})
	}
}

const getPlayerById = async (req, res) => {
	try {
		const dataBaseResponse = await PlayerModel.findOne({ _id: req.query._id })
		res.status(200).send(dataBaseResponse)
	} catch (error) {
		res.status(500).send({
			error: `Error occured while trying to retrieve player with the ID: ${req.query._id}`,
			message: error,
		})
	}
}

export default {
	createPlayer,
	getAllPlayers,
	deletePlayer,
	updatePlayer,
	getPlayerById,
}
