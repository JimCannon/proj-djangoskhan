import PlayerController from "../controllers/Player.controller.js"

const routes = (app) => {
	app.post("/player", PlayerController.createPlayer)
	app.get("/player", PlayerController.getAllPlayers)
	app.delete("/player/:playerId", PlayerController.deletePlayer)
	app.put("/player/:playerId", PlayerController.updatePlayer)
}

export default {
	routes,
}
