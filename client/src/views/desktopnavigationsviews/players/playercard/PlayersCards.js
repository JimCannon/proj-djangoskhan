import "./PlayersCards.css"

export const PlayersCards = (props) => {
	return props.users.map((x) => (
		<div className="playersCard" key={x._id}>
			<h3>Name: {x.username}</h3>
			{x.age ? <h3>Age: {x.age}</h3> : <h3>N/A</h3>}
			{props.updateField ? <input /> : <h3>Name: {x.username}</h3>}
		</div>
	))
}
