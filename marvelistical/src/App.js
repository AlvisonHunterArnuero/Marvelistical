import React, { useState, useEffect } from "react";
import { marvelApi } from "./config/config";

import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import CharactersList from "./components/charactersList";

function App() {
	const PUB_API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
	const PRIV_API_KEY = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;
	const baseURL = "https://pokeapi.co/api/v2/pokemon/";
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(marvelApi.baseUrl)
			.then((response) => {
				if (response.ok) {
					console.log(response);
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error);
				console.error("Error", error);
			});
	}, []);

	return (
		<div className="App">
			<NavBar />
			<h1 className="display-4">Marvelistical</h1>

			<div className="container">
				<div className="row">
					<SearchBar className="my-4" />
					<CharactersList />
				</div>
			</div>
		</div>
	);
}

export default App;
