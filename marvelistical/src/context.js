import React, { useState, createContext } from "react";
export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
	// Global Store to handle all state scenarios
	const [data, setData] = useState(null);
	const [comicsData, setComicsData] = useState([]);
	const [storiesData, setStoriesData] = useState([]);
	const [search, setSearch] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [orderedByName, setOrderedByName] = useState(false);
	const [displayCharacterDetails, setDisplayCharacterDetails] = useState(false);

	// Fetching common variables for all data categories
	const baseURL = "https://gateway.marvel.com:443/v1/public";
	const apikey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
	const generated_hash = "b6b53749e2f1badd611ec6787fa7ba66";
	const timeStamp = 1;
	const strApiURL = encodeURI(
		`apikey=${apikey}&hash=${generated_hash}&ts=${timeStamp}&limit=99`
	);

	const fetchData = () => {
		setIsLoaded(false);
		const fetchURL = orderedByName
			? baseURL + `/characters?orderBy=name?${strApiURL}`
			: baseURL + `/characters?${strApiURL}`;
		fetch(fetchURL)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((payload) => {
				const { results } = payload.data;
				setData(results);
				setIsLoaded(true);
			})
			.catch((error) => {
				setData([]);
				console.error("Error", error);
			});
	};

	const fetchComicsData = () => {
		setIsLoaded(false);
		fetch(baseURL + `/comics?${strApiURL}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((comics) => {
				const comicsResults = comics.data.results;
				setComicsData(comicsResults);
				setIsLoaded(true);
			})
			.catch((error) => {
				setData([]);
				console.error("Error", error);
			});
	};

	const fetchStoriesData = () => {
		setIsLoaded(false);
		fetch(baseURL + `/stories?${strApiURL}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((stories) => {
				const storiesResults = stories.data.results;
				setStoriesData(storiesResults);
				setIsLoaded(true);
			})
			.catch((error) => {
				setData([]);
				console.error("Error", error);
			});
	};

	const getCharacterDetailsByID = (selectedCharacterId) => {
		return data.filter(
			(values, i) => values["id"] === parseInt(selectedCharacterId)
		);
	};

	// Main Context Object containing all the obj elements to be passed
	// to the provider to have it at hand for all children componentss
	const objContext = {
		data,
		setData,
		comicsData,
		setComicsData,
		storiesData,
		setStoriesData,
		search,
		setSearch,
		isLoaded,
		setIsLoaded,
		orderedByName,
		setOrderedByName,
		fetchData,
		fetchComicsData,
		fetchStoriesData,
		displayCharacterDetails,
		setDisplayCharacterDetails,
		getCharacterDetailsByID,
	};

	return (
		<StoreContext.Provider value={objContext}>
			{props.children}
		</StoreContext.Provider>
	);
};
