import mongoose from "mongoose"

const PlayerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			unique: false,
			allowNull: false,
			required: true,
		},
		nickname: {
			type: String,
			unique: true,
			allowNull: true,
			required: true,
		},
		age: {
			type: Number,
			allowNull: false,
			required: true,
		},
		nation: {
			type: String,
			allowNull: false,
			required: true,
		},
		position: {
			type: String,
			allowNull: false,
			required: true,
		},
		rating: {
			type: Number,
			allowNull: false,
			required: true,
		},
		playerNumber: {
			type: Number,
			unique: true,
			allowNull: false,
			required: true,
		},
		stats: [
			{
				pace: { type: Number, allowNull: false, required: true },
				shooting: { type: Number, allowNull: false, required: true },
				passing: { type: Number, allowNull: false, required: true },
				dribbling: { type: Number, allowNull: false, required: true },
				defense: { type: Number, allowNull: false, required: true },
				physical: { type: Number, allowNull: false, required: true },
				// new stat beastRating: pace + shooting + physical / 3 = Beast Rating
			},
		],
	},
	{ timestamps: true }
)

const PlayerModel = mongoose.model("player", PlayerSchema)
export default PlayerModel
