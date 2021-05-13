import EditSVG from "../../../../shared/images/create-white-18dp.svg"
import "./PlayerInfo.scss"

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
					<div className="bar rating-pace">
						<p>95%</p>
					</div>
				</div>
				<div className="rating defending">
					<h6>DEFENDING</h6>
					<div className="bar rating-defending">
						<p>90%</p>
					</div>
				</div>
				<div className="rating passing">
					<h6>PASSING</h6>
					<div className="bar rating-passing" style={{ width: player.stats[0].passing + "%" }}>
						<p>{player.stats[0].passing}%</p>
					</div>
				</div>
			</div>
			<div className="iconContainer">
				<img src={EditSVG} alt="Edit" onClick={() => setEdit(true)} className="playerIcon edit" />
			</div>
		</>
	)
}
