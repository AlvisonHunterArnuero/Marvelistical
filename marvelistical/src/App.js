import React, { useState, useEffect } from "react";
import { marvelApi } from "./config/config";

import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import CharactersList from "./components/charactersList";

function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch(marvelApi.baseUrl)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error("Error", error);
				setError(error);
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
