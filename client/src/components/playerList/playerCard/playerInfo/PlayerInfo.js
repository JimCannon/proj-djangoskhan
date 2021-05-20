import EditSVG from "../../../../shared/images/create-white-18dp.svg"
import "./PlayerInfo.scss"
import styled, { keyframes } from "styled-components"
import { PlayerBars, PlayersBars } from "./playerBars/PlayersBars"

const playerStatBar = keyframes`
0% {
	width: 0;
}
100% {
	width: ${(player) => player.stats[0]}%;
}
`

const MyStylyedComp = styled.div`
	width: ${(player) => player.stats}%;
	animation: ${playerStatBar} 1.5s;
	animation-delay: 0.1s;
`

export const PlayerInfo = ({ player, setEdit }) => {
	const evaluateBeastRating = () => {
		const beastRating =
			(player.stats[0].physical +
				player.stats[0].pace +
				player.stats[0].defense +
				player.stats[0].physical) /
			4
		return Math.round(beastRating)
	}

	return (
		<>
			<div className="name">
				<p>
					<strong>{player.name}</strong>
				</p>
			</div>
			<div className="ds-info">
				<div className="ds foot">
					<h6 title="Preferred foot">Strong Foot</h6>
					<p>R</p>
				</div>
				<div className="ds nation">
					<h6 title="Nation of the player">Nation</h6>
					<p>{player.nation.toUpperCase()}</p>
				</div>
				<div className="ds beast-rating">
					<h6 title="Beast Rating of the player">Beast Rating</h6>
					<p>{evaluateBeastRating()}</p>
				</div>
			</div>

			<div className="ds-rating">
				<h6>RATING</h6>
				<div className="rating pace">
					<h6>PACE</h6>
					<MyStylyedComp stats={player.stats[0].pace} className="bar rating-pace">
						{/* <p>{player.stats[0].pace}%</p> */}
					</MyStylyedComp>
				</div>
				<div className="rating defending">
					<h6>DEFENDING</h6>
					<MyStylyedComp stats={player.stats[0].defense} className="bar rating-defending">
						{/* <p>{player.stats[0].defense}%</p> */}
					</MyStylyedComp>
				</div>
				<div className="rating passing">
					<h6>PASSING</h6>
					<MyStylyedComp stats={player.stats[0].passing} className="bar rating-passing">
						{/* <p>{player.stats[0].passing}%</p> */}
					</MyStylyedComp>
					{/* <PlayersBars></PlayersBars> */}
				</div>
			</div>
			<div className="iconContainer">
				<img src={EditSVG} alt="Edit" onClick={() => setEdit(true)} className="playerIcon edit" />
			</div>
		</>
	)
}
