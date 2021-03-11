import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			allowNull: false,
			required: true,
		},
		age: {
			type: Number,
			min: [15, "You need to be above 15"],
			max: [50, "You're too old you Boomer!"],
			required: false,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const UserModel = mongoose.model("user", UserSchema)
export default UserModel
