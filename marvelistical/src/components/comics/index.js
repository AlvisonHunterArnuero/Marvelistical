import React, { useEffect, useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import ComicsCard from "../comicsCard";
import MainHeader from "../mainHeader";
import SearchBar from "../searchBar";

const Comics = () => {
	const cnxtComicsInstance = useContext(StoreContext);

	useEffect(
		() => {
			cnxtComicsInstance.fetchComicsData();
		},
		cnxtComicsInstance,
		[]
	);

	const comicsInfo = cnxtComicsInstance.comicsData.map((item) => {
		console.log(item);
		return item;
	});

	console.log("comics card", cnxtComicsInstance.comicsData);
	const comics = cnxtComicsInstance.comicsData || {};
	const filteredComics =
		cnxtComicsInstance.search.length === 0
			? comics
			: comics.filter((hero) =>
					hero.title
						.toLowerCase()
						.includes(cnxtComicsInstance.search.toLowerCase())
			  );

	return (
		<Fragment>
			<MainHeader sectionTitle="Comics" />
			<SearchBar className="my-4" />

			<div className="row justify-content-between my-4 pb-4">
				{filteredComics.map((issue, i) => (
					<ComicsCard key={i} comicsItem={issue} />
				))}
			</div>
		</Fragment>
	);
};

export default Comics;
