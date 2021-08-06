import React, { useState, createContext } from "react";
export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");
	const [isActive, setActive] = useState(false);
	const [fetchCategory, setFetchCategory] = useState("characters");

	const fetchData = () => {
		const baseURL = "https://gateway.marvel.com:443/v1/public";
		const apikey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
		const generated_hash = "b6b53749e2f1badd611ec6787fa7ba66";
		const timeStamp = 1;
		const strApiURL = encodeURI(
			`apikey=${apikey}&hash=${generated_hash}&ts=${timeStamp}&limit=30&offset=10`
		);
		fetch(baseURL + `/${fetchCategory}?${strApiURL}`)
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
	};

	const objContext = {
		data,
		setData,
		search,
		setSearch,
		isActive,
		setActive,
		fetchData,
		fetchCategory,
		setFetchCategory,
	};

	return (
		<StoreContext.Provider value={objContext}>
			{props.children}
		</StoreContext.Provider>
	);
};
