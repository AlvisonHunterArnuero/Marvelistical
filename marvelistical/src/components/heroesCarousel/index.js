import React from "react";

const heroesCarousel = () => {
	const arrCarouselImages = [
		"00.jpg",
		"01.jpg",
		"02.jpg",
		"03.jpg",
		"04.jpg",
		"05.jpg",
		"06.jpg",
	];
	return (
		<div
			id="carouselExampleFade"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				{arrCarouselImages.map((name, index) => {
					return (
						<div
							key={index}
							className={index === 0 ? "carousel-item active" : "carousel-item"}
						>
							<img
								src={`assets/slides/${name}`}
								className="d-block w-100"
								alt="..."
							/>
						</div>
					);
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default heroesCarousel;
