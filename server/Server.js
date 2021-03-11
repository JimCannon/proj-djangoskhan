import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./configurations/Configurations.js"
import UserRoutes from "./src/routes/User.routes.js"
import PlayerRoutes from "./src/routes/Player.routes.js"
import cors from "cors"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({ credentials: true }))
app.use(helmet())
app.use(morgan("common"))

UserRoutes.routes(app)
PlayerRoutes.routes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

// function isAuthenticated(req, res, next) {
// 	req.query.admin === "true"
// 		? res.send("You are the father!")
// 		: res.send("NOOOOOOOOOOOO You are not the father!!!(cant make api call to this url)")
// 	next()
// }

Configuration.connectToPort(app)
Configuration.connectToDatabase()

export default app
