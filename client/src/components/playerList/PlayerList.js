import { PlayerCard } from "../../components/playerList/playerCard/PlayerCard"
import "./PlayerList.css"

export const PlayerList = ({ users, setUsers }) => {
	return (
		<div className="playerList">
			{users.map((user) => {
				return <PlayerCard user={user} setUsers={setUsers} users={users} />
			})}
		</div>
	)
}
