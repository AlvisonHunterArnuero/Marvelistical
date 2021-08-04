import React from "react";
import CharacterProfileImage from "../characterProfileImage";

const CharacterDetails = ({ resultValues }) => {
	const { id, name, description, thumbnail, comics, stories } = resultValues;
	const { path } = thumbnail;

	return (
		<React.Fragment>
			<div className="card mb-3" style="max-width: 540px;">
				<div className="row g-0">
					<div className="col-md-4">
						<CharacterProfileImage
							srcText={path}
							alternativeText={description}
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title text-primary">{name} </h5>
							<p className="card-text">{description}</p>
							<p className="card-text">
								<small className="text-muted">
									{comics.available} | {stories.available}
								</small>
							</p>
							<button className="btn btn-danger btn-lg" type="button">
								Go back
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CharacterDetails;
