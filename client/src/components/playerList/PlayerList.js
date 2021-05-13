import { PlayerCard } from "../../components/playerList/playerCard/PlayerCard"
import { PlayerCardCreate } from "./playerCard/playerCardCreate/PlayerCardCreate"
import "./PlayerList.css"

export const PlayerList = ({ players, setPlayers, setLoading }) => {
	return (
		<div className="playerList">
			{players.map((player) => {
				return (
					<PlayerCard key={player._id} player={player} setPlayers={setPlayers} players={players} />
				)
			})}
			<PlayerCardCreate setLoading={setLoading} />
		</div>
	)
}
