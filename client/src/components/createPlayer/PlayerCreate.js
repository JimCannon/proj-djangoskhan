import React, { useState } from "react"
import BackendAPIService from "../../shared/api/service/BackendAPIService"
import styled from "styled-components"
import "./PlayerCreate.scss"

const Foo = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`

export const PlayerCreate = ({ modalClosed, setLoading }) => {
	// eslint-disable-next-line
	//const [loading, setLoading] = useState(false)
	const [newPlayer, setNewPlayer] = useState({
		name: "",
		nickname: "",
		age: 0,
		nation: "",
		position: "",
		rating: 0,
		playerNumber: 0,
		stats: [
			{
				pace: 0,
				shooting: 0,
				passing: 0,
				dribbling: 0,
				defense: 0,
				physical: 0,
			},
		],
	})

	const createPlayer = async () => {
		try {
			setLoading(true)
			await BackendAPIService.createPlayer(newPlayer)
		} catch (error) {
			console.log(error)
		}
		//Varför måste jag lägga till första index innan reset?
		document.getElementsByClassName("player-create-form")[0].reset()
		setLoading(false)
		console.log(newPlayer)
		modalClosed()
	}

	const createNewPlayerInput = (event) => {
		setNewPlayer({
			...newPlayer,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<div className="player-create-container">
			<form className="player-create-form">
				<label>Name: </label>
				<input name="name" onChange={(event) => createNewPlayerInput(event)} />

				<label>Nickname: </label>
				<input name="nickname" onChange={(event) => createNewPlayerInput(event)} />

				<label>Age: </label>
				<input name="age" onChange={(event) => createNewPlayerInput(event)} />

				<label>Nation: </label>
				<input name="nation" onChange={(event) => createNewPlayerInput(event)} />

				<label>Position: </label>
				<input name="position" onChange={(event) => createNewPlayerInput(event)} />

				<label>Rating: </label>
				<input name="rating" onChange={(event) => createNewPlayerInput(event)} />

				<label>Player Number: </label>
				<input name="playerNumber" onChange={(event) => createNewPlayerInput(event)} />

				<label>Pace: </label>
				<input name="pace" onChange={(event) => createNewPlayerInput(event)} />

				<label>Shooting: </label>
				<input name="shooting" onChange={(event) => createNewPlayerInput(event)} />

				<label>Passing: </label>
				<input name="passing" onChange={(event) => createNewPlayerInput(event)} />

				<label>Dribbling: </label>
				<input name="dribbling" onChange={(event) => createNewPlayerInput(event)} />

				<label>Defense: </label>
				<input name="defense" onChange={(event) => createNewPlayerInput(event)} />

				<label>Physical: </label>
				<input name="physical" onChange={(event) => createNewPlayerInput(event)} />
			</form>
			<Foo onClick={() => createPlayer()}>Create Player</Foo>
		</div>
	)
}
