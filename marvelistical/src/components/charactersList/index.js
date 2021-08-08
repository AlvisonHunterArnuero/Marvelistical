import React, { useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import Character from "../character";
import SearchBar from "../searchBar";

const CharactersList = () => {
	const cnxtSearchInstance = useContext(StoreContext);
	let boolDisplayLoadingMessage = false;

	if (cnxtSearchInstance.data === undefined) {
		console.log("No data found");
		boolDisplayLoadingMessage = true;
	}
	console.log("characters card", cnxtSearchInstance.data);
	const results = cnxtSearchInstance.data || {};
	const filteredCharacters =
		cnxtSearchInstance.search.length === 0
			? results
			: results.filter((hero) =>
					hero.name
						.toLowerCase()
						.includes(cnxtSearchInstance.search.toLowerCase())
			  );

	return (
		<Fragment>
			<SearchBar className="my-4" />
			{boolDisplayLoadingMessage ? (
				<h1 className="text-info">LOADING...</h1>
			) : (
				<div className="row justify-content-between my-4 pb-4">
					{filteredCharacters.map((values, i) => (
						<Character key={i} resultValues={values} />
					))}
				</div>
			)}
		</Fragment>
	);
};

export default CharactersList;
