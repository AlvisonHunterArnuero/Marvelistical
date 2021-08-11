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
		// eslint-disable-next-line
		cnxtComicsInstance,
		[]
	);

	const comics = cnxtComicsInstance.comicsData || {};
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
					<div className="d-flex align-items-center justify-content-center">
						<strong className="text-warning">LOADING...</strong>
						<div className="spinner-grow text-warning" role="status">
							<span className="visually-hidden">Loading...</span>{" "}
						</div>
					</div>
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
