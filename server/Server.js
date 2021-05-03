import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./configurations/Configurations.js"
import UserRoutes from "./src/routes/User.routes.js"
import PlayerRoutes from "./src/routes/Player.routes.js"
import cors from "cors"
// import session from "express-session"
// import connectRedis from "connect-redis"
// import redisClient from "./db/redis.js"

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

Configuration.connectToPort(app)
Configuration.connectToDatabase()

export default app
