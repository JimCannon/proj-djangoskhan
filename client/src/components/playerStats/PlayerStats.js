import React, { useEffect, useState } from "react"
import BackendAPIService from "../../shared/api/service/BackendAPIService"

export const PlayerStats = () => {
	const [foobar, setFoobar] = useState([])

	useEffect(() => {
		let pathName = window.location.pathname
		let id = pathName.split("/").pop()
		fetchData(id)
		console.log(id)
	}, [])

	const fetchData = async (id) => {
		const response = await BackendAPIService.getUserById(id)
		console.log(response)
		setFoobar(response.data)
	}

	return <div>{foobar && <h1>Hello from PlayerStats!{foobar?.username}</h1>}</div>
}
