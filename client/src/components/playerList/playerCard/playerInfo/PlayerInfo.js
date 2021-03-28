import { useContext } from "react"
import { UserContext } from "../../../../shared/provider/UserProvider"
import EditSVG from "../../../../shared/images/create-white-18dp.svg"
import "./PlayerInfo.css"

export const PlayerInfo = ({ user, setEdit }) => {
	return (
		<>
			<p>
				<strong>Username:</strong> {user.username}
				{/* {user._id === user._id ? " (you)" : ""} */}
			</p>
			<p>
				<strong>Age:</strong> {user.age}
			</p>
			<div className="iconContainer">
				<img src={EditSVG} alt="Edit" onClick={() => setEdit(true)} className="playerIcon edit" />
			</div>
		</>
	)
}
