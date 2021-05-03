import { useState } from "react"
import "./PlayerCard.scss"
import { PlayerEdit } from "./playerEdit/PlayerEdit"
import { PlayerInfo } from "./playerInfo/PlayerInfo"
import djangoHero from "../../../shared/images/djangoHero.jpg"

export const PlayerCard = ({ user, setUsers, users }) => {
	const [edit, setEdit] = useState(false)

	return (
		<div className="playerCard">
			<div className="ds-top"></div>
			<div className="avatar-holder">
				<img src={djangoHero} alt="Django" />
			</div>
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
