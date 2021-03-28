import { PlayerCard } from "../../components/playerList/playerCard/PlayerCard"
import "./PlayerList.css"

export const PlayerList = ({ users, setUsers }) => {
	return (
		<div className="playerList">
			{users.map((user) => {
				return <PlayerCard key={user._id} user={user} setUsers={setUsers} users={users} />
			})}
		</div>
	)
}
