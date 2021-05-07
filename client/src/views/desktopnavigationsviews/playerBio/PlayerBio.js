import React, { useContext } from "react"
import { UserContext } from "../../../shared/provider/UserProvider"
import traoreHero from "../../../shared/images/traore.png"
import "./PlayerBio.scss"
import { PlayerStats } from "../../../components/playerStats/PlayerStats"

export const PlayerBio = () => {
	const { userBioProvider } = useContext(UserContext)
	const [userBio, setUserBio] = userBioProvider

	return (
		<div className="player-bio">
			<div className="player-hero">
				<div className="container">
					<div className="player-hero-details">
						<div className="player-hero-inner-details">
							<h1>he</h1>
							<h1>he</h1>
							<h1>he</h1>
						</div>
					</div>
					<div className="player-hero-image">
						<img src={traoreHero} />
					</div>
				</div>
			</div>
			{console.log(userBio)}
			<PlayerStats user={userBio}></PlayerStats>
		</div>
	)
}
