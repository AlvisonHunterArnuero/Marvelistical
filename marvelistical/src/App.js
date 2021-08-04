import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import CharactersList from "./components/charactersList";
import HeroesCarousel from "./components/heroesCarousel";
import "./App.css";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const baseURL = "https://gateway.marvel.com:443/v1/public";

		const apikey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
		const generated_hash = "b6b53749e2f1badd611ec6787fa7ba66";
		const timeStamp = 1;
		const strApiURL = encodeURI(
			`apikey=${apikey}&hash=${generated_hash}&ts=${timeStamp}`
		);
		fetch(baseURL + `/characters?${strApiURL}`)
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
			});
	}, []);

	return (
		<div className="App">
			<NavBar />
			<HeroesCarousel />

			<div className="container">
				<div className="row">
					<SearchBar className="my-4" />
					{data && <CharactersList data={data} />}
				</div>
			</div>
		</div>
	);
}

export default App;
