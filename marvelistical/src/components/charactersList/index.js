import React, { useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import Character from "../character";
import SearchBar from "../searchBar";

const CharactersList = () => {
	const cnxtSearchInstance = useContext(StoreContext);
	cnxtSearchInstance.setFetchCategory("characters");
	cnxtSearchInstance.fetchData();
	const { results } = cnxtSearchInstance.data.data;

	console.log("characters card", cnxtSearchInstance.data);

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
			{cnxtSearchInstance.data.results === null ? (
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
