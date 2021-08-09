const characterProfileImage = ({ srcText }, { alternativeText }) => {
	const imgNotAvailable =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

	const imgURL = `${srcText}.jpg`;

	return (
		<div className="thumb1">
			<img
				className="card-img-top"
				alt={alternativeText ? alternativeText : "No Description Provided"}
				data-bs-toggle="tooltip"
				data-bs-placement="top"
				title={alternativeText ? alternativeText : "No Description Provided"}
				src={imgURL}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = `${imgNotAvailable}`;
				}}
			/>
		</div>
	);
};

export default characterProfileImage;
