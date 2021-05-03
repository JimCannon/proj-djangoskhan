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
			max: [50, "You're too old! You Boomer!"],
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

UserModel.schema.pre("save", async function (next) {
	try {
		const hash = await bcrypt.hash(this.password, 10)
		this.password = hash
	} catch (err) {
		console.log(err.message)
		return next(err)
	}

	next()
})

export default UserModel
