import React, { useEffect, useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import Character from "../character";
import MainHeader from "../mainHeader";
import SearchBar from "../searchBar";
import LoadingSpinner from "../loader";

const CharactersList = () => {
	const cnxtSearchInstance = useContext(StoreContext);
	useEffect(
		() => {
			cnxtSearchInstance.fetchDataByName(cnxtSearchInstance.search);
		},
		// eslint-disable-next-line
		[cnxtSearchInstance.search]
	);

	const results = cnxtSearchInstance && cnxtSearchInstance.data;
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
			<MainHeader
				sectionTitle="Marvel Characters List"
				sectionText="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
			/>
			<SearchBar className="my-4" />

			<div className="row justify-content-between my-4 pb-4">
				{cnxtSearchInstance.isLoaded === false ? (
					<LoadingSpinner />
				) : (
					filteredCharacters.map((values, i) => (
						<Character key={i} resultValues={values} />
					))
				)}
			</div>
		</Fragment>
	);
};

export default CharactersList;
