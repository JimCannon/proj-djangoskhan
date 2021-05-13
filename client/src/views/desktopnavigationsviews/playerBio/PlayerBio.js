import React, { useState, useEffect } from "react"
import traoreHero from "../../../shared/images/traore.png"
import "./PlayerBio.scss"
import { PlayerStats } from "../../../components/playerStats/PlayerStats"
import BackendAPIService from "../../../shared/api/service/BackendAPIService"

export const PlayerBio = () => {
	const [player, setPlayer] = useState()

	useEffect(() => {
		let pathName = window.location.pathname
		let id = pathName.split("/").pop()
		fetchData(id)
	}, [])

	const fetchData = async (id) => {
		const response = await BackendAPIService.getPlayerById(id)
		setPlayer(response.data)
	}

	return (
		<div className="player-bio">
			<div className="player-hero">
				<div className="container">
					<div className="player-hero-details">
						<div className="player-hero-inner-details">
							<h1>{player?.playerNumber}</h1>
							<h1>{player?.name}</h1>
							<h1>{player?.nation}</h1>
						</div>
					</div>
					<div className="player-hero-image">
						<img src={traoreHero} alt="traoreHero" />
					</div>
				</div>
			</div>
			<PlayerStats player={player}></PlayerStats>
		</div>
	)
}
