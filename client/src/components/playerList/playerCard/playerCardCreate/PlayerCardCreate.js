import React, { useState } from "react"
import { Modal } from "../../../modal/Modal"
import { PlayerCreate } from "../../../createPlayer/PlayerCreate"
import "./PlayerCardCreate.scss"

export const PlayerCardCreate = ({ setLoading }) => {
	const [showModal, setShowModal] = useState(false)

	const showCreatePlayerModal = () => {
		setShowModal(true)
	}

	const hideCreatePlayerModal = () => {
		setShowModal(false)
	}

	const displayTest = () => {
		return (
			<div className="player-create-modal" onClick={() => showCreatePlayerModal()}>
				Create Player
			</div>
		)
	}

	return (
		<div className="player-create">
			<Modal show={showModal} modalClosed={hideCreatePlayerModal}>
				<PlayerCreate modalClosed={hideCreatePlayerModal} setLoading={setLoading} />
			</Modal>
			{displayTest()}
		</div>
	)
}
