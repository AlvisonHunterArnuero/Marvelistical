import React, { useContext, Fragment } from "react";
import { StoreContext } from "../../context";

const Comics = () => {
	const cnxtComicsInstance = useContext(StoreContext);
	const { res } = cnxtComicsInstance.data.data;

	// const comics = cnxtComicsInstance.data.map((item) => {
	// 	console.log(item.comics);
	// 	return item.comics;
	// });

	console.log("comics card", res);
	// const filteredComics =
	// 	cnxtComicsInstance.search.length === 0
	// 		? comics
	// 		: comics.filter((hero) =>
	// 				hero.name
	// 					.toLowerCase()
	// 					.includes(cnxtComicsInstance.search.toLowerCase())
	// 		  );

	return (
		<Fragment>
			{/* {cnxtComicsInstance.data.comics === null ? (
				<h1 className="text-info">LOADING...</h1>
			) : (
				<div className="row justify-content-between my-4">
					{filteredComics.map((values, i) => (
						<li key={i}>{values}</li>
					))}
				</div>
			)} */}
			<h1 className="display-4 hero-name">Comics</h1>
		</Fragment>
	);
};

export default Comics;
