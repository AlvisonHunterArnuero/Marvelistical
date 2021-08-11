const characterProfileImage = ({ srcText, name, charDetails = false }) => {
	const imgNotAvailable =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

	const imgURL = `${srcText}.jpg`;
	return (
		<div className={charDetails ? "" : "thumb1"}>
			<img
				className={charDetails ? "img-fluid" : "card-img-top"}
				alt={name ? name : "No Description Provided"}
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
