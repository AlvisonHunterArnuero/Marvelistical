import React from "react";
const LoadingSpinner = () => {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<strong className="text-warning">LOADING...</strong>
			<div className="spinner-grow text-warning" role="status">
				<span className="visually-hidden">Loading...</span>{" "}
			</div>
		</div>
	);
};

export default LoadingSpinner;
