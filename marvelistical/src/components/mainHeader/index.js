import React from "react";
const MainHeader = ({ sectionTitle }) => {
	return (
		<div className="bg-dark p-5 rounded-lg m-3">
			<h1 className="display-3 demi-title">{sectionTitle}</h1>
			<p className="lead text-white">
				This is a simple hero unit, a simple jumbotron-style component for
				calling extra attention to featured content or information.
			</p>
		</div>
	);
};

export default MainHeader;
