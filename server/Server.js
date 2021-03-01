import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./configurations/Configurations.js"
import UserRoutes from "./src/routes/User.routes.js"

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan("common"))

app.get("/", (req, res) => {
	res.send("Djangooooo!")
})

app.get("/players", isAuthenticated, (req, res) => {
	res.send("Django Playah Numbah 9")
})

UserRoutes.routes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

function isAuthenticated(req, res, next) {
	req.query.admin === "true"
		? res.send("You are the father!")
		: res.send("NOOOOOOOOOOOO You are not the father!!!(cant make api call to this url)")
	next()
}

Configuration.connectToPort(app)
Configuration.connectToDatabase()
