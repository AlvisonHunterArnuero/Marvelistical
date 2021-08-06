import React, { useContext } from "react";
import { StoreContext } from "../../context";

const Stories = () => {
	const cnxtStoriesInstance = useContext(StoreContext);
	cnxtStoriesInstance.setSearch("");

	return (
		<div>
			<h1 className="display-4 text-info">STORIES</h1>
		</div>
	);
};

export default Stories;
