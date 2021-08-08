const ComicsProfileImage = ({ srcText }, { alternativeText }) => {
	const imgNotAvailable =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

	const imgURL = `${srcText}.jpg`;

	return (
		<div className="">
			<img
				src={imgURL}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = `${imgNotAvailable}`;
				}}
				className="img-fluid rounded-start comic-thumb"
				alt={alternativeText}
			/>
		</div>
	);
};

export default ComicsProfileImage;
