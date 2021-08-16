import React, { useEffect, useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import ComicsCard from "../comicsCard";
import MainHeader from "../mainHeader";
import SearchBar from "../searchBar";
import LoadingSpinner from "../loader";

const Comics = () => {
	const cnxtComicsInstance = useContext(StoreContext);

	useEffect(
		() => {
			cnxtComicsInstance.fetchComicsData();
		},
		// eslint-disable-next-line
		[cnxtComicsInstance.search]
	);

	const comics = cnxtComicsInstance && cnxtComicsInstance.comicsData;
	const filteredComics =
		cnxtComicsInstance.search.length === 0
			? comics
			: comics.filter((comic) =>
					comic.title
						.toLowerCase()
						.includes(cnxtComicsInstance.search.toLowerCase())
			  );

	return (
		<Fragment>
			<MainHeader
				sectionTitle="Marvel Comics List"
				sectionText="What's Coming To Marvel Unlimited This Month"
			/>
			<SearchBar className="my-4" />
			<div className="row justify-content-between my-4 pb-4">
				{cnxtComicsInstance.isLoaded === false ? (
					<LoadingSpinner />
				) : (
					filteredComics.map((issue, i) => (
						<ComicsCard key={i} comicsItem={issue} />
					))
				)}
			</div>
		</Fragment>
	);
};

export default Comics;
