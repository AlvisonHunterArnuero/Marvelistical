const ComicsProfileImage = ({ srcText }, { alternativeText }) => {
	const imgNotAvailable =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

	const imgURL = `${srcText}.jpg`;

	return (
		<>
			<img
				src={imgURL}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = `${imgNotAvailable}`;
				}}
				className="img-fluid w-100 comic-thumb"
				alt={alternativeText}
			/>
		</>
	);
};

export default ComicsProfileImage;
