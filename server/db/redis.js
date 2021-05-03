import redis from "redis"
import dotenv from "dotenv"

dotenv.config()

const redisClient = redis.createClient({
	host: dotenv.REDISHOST,
	port: dotenv.REDISPORT,
	password: dotenv.sessionSecret,
})

redisClient
	.on("connect", () => console.log("Connecting to Redis ..."))
	.on("reconnecting", () => console.log("Reconnecting to Redis ..."))
	.on("end", () => console.log("Redis connection terminated"))
	.on("ready", () => console.log("Successfully connected to Redis"))
	.on("error", console.error)

export default redisClient
