import { useState } from "react"
import DoneSVG from "../../../../shared/images/done-white-18dp.svg"
import CancelSVG from "../../../../shared/images/clear-white-18dp.svg"
import BackendAPIService from "../../../../shared/api/service/BackendAPIService"

export const PlayerEdit = ({ user, setEdit, setUsers, users }) => {
	const [userInfo, setUserInfo] = useState({ ...user })

	const handleChange = (newState) => {
		setUserInfo({ ...userInfo, ...newState })
	}

	const handleEdit = async () => {
		const res = await BackendAPIService.updateUserTest(userInfo)
		if (res && res.status === 200) {
			setUsers([...users.filter((u) => userInfo._id !== u._id), userInfo])
			setEdit(false)
		}
	}

	return (
		<div className="playerEditContainer">
			<input
				type="text"
				id="username"
				value={userInfo.username}
				onChange={(e) => handleChange({ username: e.target.value })}
				className="playerEditInput"
			/>
			<input
				type="text"
				id="age"
				value={userInfo.age}
				onChange={(e) => handleChange({ age: e.target.value })}
				className="playerEditInput"
			/>
			<div className="iconContainer">
				<img src={DoneSVG} alt="Done" onClick={() => handleEdit()} className="playerIcon done" />
				<img
					src={CancelSVG}
					alt="Cancel"
					onClick={() => setEdit(false)}
					className="playerIcon cancel"
				/>
			</div>
		</div>
	)
}
