import React, { useState, createContext } from "react";
export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
	// Global Store to handle all state scenarios
	const [data, setData] = useState([]);
	const [comicsData, setComicsData] = useState([]);
	const [storiesData, setStoriesData] = useState([]);
	const [search, setSearch] = useState("a");
	const [isLoaded, setIsLoaded] = useState(false);
	const [hideNavBar, setHideNavBar] = useState(true);
	const [orderedByName, setOrderedByName] = useState(false);
	const [displayCharacterDetails, setDisplayCharacterDetails] = useState(false);

	// Fetching common variables for all data categories
	const baseURL = "https://gateway.marvel.com/v1/public";
	const apikey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
	const generated_hash = "3898adbce4cdf836a6ec3a49d8ca6103";
	const timeStamp = 1;
	const strApiURL = encodeURI(
		`ts=${timeStamp}&apikey=${apikey}&hash=${generated_hash}&limit=97`
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

	const fetchDataByName = (searchTerm) => {
		setIsLoaded(false);
		const fetchURL = orderedByName
			? baseURL +
			  `/characters?nameStartsWith=${searchTerm}?orderBy=name?${strApiURL}`
			: baseURL + `/characters?${strApiURL}&nameStartsWith=${searchTerm}`;
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
		fetch(baseURL + `/comics?${strApiURL}&titleStartsWith=${search}`)
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
		hideNavBar,
		setHideNavBar,
		orderedByName,
		setOrderedByName,
		fetchData,
		fetchDataByName,
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
