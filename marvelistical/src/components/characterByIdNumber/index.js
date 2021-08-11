import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context";

import CharacterProfileImage from "../characterProfileImage";

const CharacterByIdNumber = () => {
	const { id } = useParams();
	const cnxtCharacterDetailsInstance = useContext(StoreContext);
	const filteredCharacterDetails =
		cnxtCharacterDetailsInstance.getCharacterDetailsByID(id);

	useEffect(
		() => {
			if (cnxtCharacterDetailsInstance.data === undefined) {
				cnxtCharacterDetailsInstance.fetchData();
				cnxtCharacterDetailsInstance.getCharacterDetailsByID(id);
			}
		},
		// eslint-disable-next-line
		cnxtCharacterDetailsInstance,
		[]
	);

	const {
		name,
		description,
		modified,
		comics: { items: comicsItems },
		series: { items: seriesItems },
		stories: { items: storiesItems },
		thumbnail: { path },
	} = filteredCharacterDetails[0];

	return (
		<Fragment>
			<div className="row justify-content-center py-4 my-4">
				<div className="col-8">
					<div className="card text-white bg-dark mb-3 border border-secondary">
						<div className="row align-items-center justify-content-between">
							<div className="col-12 col-md-4">
								<CharacterProfileImage
									srcText={path}
									alternativeText={name}
									charDetails={true}
								/>
							</div>
							<div className="col-12 col-md-8">
								<div className="card-body">
									<h5 className="card-title text-danger fs-2 text-uppercase">
										{name}
									</h5>
									<h6 class="card-subtitle mb-2 text-muted">
										<div className="row justify-content-center">
											<div className="col-auto">
												<small className="text-warning">COMICS: </small>
												{comicsItems.length}
											</div>
											<div className="col-auto">
												<small className="text-warning">SERIES: </small>
												{seriesItems.length}
											</div>
											<div className="col-auto">
												<small className="text-warning">STORIES: </small>
												{storiesItems.length}
											</div>
										</div>
									</h6>
									<p className="card-text text-justify">
										{description ? description : "--"}
									</p>
									<p className="card-text text-info">
										<div className="row justify-content-around">
											<div className="col-6 text-start">
												<small className="text-danger">Last Modified: </small>
												{modified.substr(0, modified.indexOf("T"))}
											</div>
											<div className="col-6 text-end">
												<Link
													className="btn btn-outline-warning btn-sm"
													to="/characters"
												>
													<i className="far fa-arrow-alt-circle-left"></i>{" "}
													Characters Board
												</Link>
											</div>
										</div>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CharacterByIdNumber;
