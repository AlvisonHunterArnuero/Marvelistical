import React from "react";
import { Link } from "react-router-dom";
import CharacterProfileImage from "../characterProfileImage";

const Characters = (props) => {
	const { id, thumbnail, name } = props.resultValues;
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-4 my-1" key={props.id}>
				<div className="card border-warning text-white bg-dark mb-3">
					<CharacterProfileImage
						srcText={thumbnail.path}
						alternativeText={name}
					/>
					<div className="card-body">
						<h5 className="card-title hero-name">{name}</h5>

						<div className="card-body">
							<div className="d-grid gap-2">
								<Link
									className="btn btn-danger btn-lg btn-block"
									to={`/characters/${id}`}
								>
									Hero Details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Characters;
