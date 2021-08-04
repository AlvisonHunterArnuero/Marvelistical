import React from "react";
import CharacterProfileImage from "../characterProfileImage";

const Characters = ({ resultValues }) => {
	const { name, description, thumbnail } = resultValues;
	const { path } = thumbnail;

	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-4 my-3" key={resultValues}>
				<div className="card">
					<CharacterProfileImage srcText={path} alternativeText={description} />
					<div className="card-body">
						<h5 className="card-title text-primary">{name} </h5>

						<div className="card-body">
							<button className="btn btn-danger btn-lg" type="button">
								More Info
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Characters;
