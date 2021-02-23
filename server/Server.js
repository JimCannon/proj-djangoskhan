import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import mongoose from "mongoose"
import middlewares from "./src/middlewares/Middlewares.js"

dotenv.config()
const app = express()
app.use(helmet())
app.use(morgan("common"))

const port = process.env.PORT

app.get("/", (req, res) => {
	res.send("Djangooooo!")
})

app.get("/players", isAuthenticated, (req, res) => {
	res.send("Django Playah Numbah 9")
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

function isAuthenticated(req, res, next) {
	req.query.admin === "true"
		? res.send("You are the father!")
		: res.send("NOOOOOOOOOOOO You are not the father!!!(cant make api call to this url)")
	next()
}

mongoose
	.connect("mongodb://localhost/namndb", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Sucessfully connected to the database"))
	.catch((error) => {
		console.log("ERROR WHILE TRYING TO CONNECT TO THE DATABASE: " + error)
		process.exit()
	})

app.listen(port, () => {
	console.log(`Server running on port: ${port}`)
})
