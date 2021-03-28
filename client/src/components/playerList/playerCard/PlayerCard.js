import { useState } from "react"
import "./PlayerCard.css"
import { PlayerEdit } from "./playerEdit/PlayerEdit"
import { PlayerInfo } from "./playerInfo/PlayerInfo"

export const PlayerCard = ({ user, setUsers, users }) => {
	const [edit, setEdit] = useState(false)

	return (
		<div className="playerCard">
			{edit ? (
				<PlayerEdit
					user={user}
					setEdit={setEdit}
					users={users}
					setUsers={setUsers.bind(this)}
				></PlayerEdit>
			) : (
				<PlayerInfo user={user} setEdit={setEdit}></PlayerInfo>
			)}
		</div>
	)
}
