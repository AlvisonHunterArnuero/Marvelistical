import React from "react";
const MainHeader = ({ sectionTitle, sectionText }) => {
	return (
		<div className="jumbotron p-5 rounded-lg m-3">
			<h1 className="display-3 demi-title">{sectionTitle}</h1>
			<p className="lead text-white">{sectionText}</p>
		</div>
	);
};

export default MainHeader;
