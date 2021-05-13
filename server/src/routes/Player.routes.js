import PlayerController from "../controllers/Player.controller.js"

const routes = (app) => {
	app.post("/player", PlayerController.createPlayer)
	app.get("/players", PlayerController.getAllPlayers)
	app.delete("/player/:playerId", PlayerController.deletePlayer)
	app.put("/player/:playerId", PlayerController.updatePlayer)
	app.get("/player", PlayerController.getPlayerById)
}

export default {
	routes,
}
