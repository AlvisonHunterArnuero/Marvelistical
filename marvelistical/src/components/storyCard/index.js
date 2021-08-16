import React from "react";
import ComicsProfileImage from "../comicsProfileImage";
import { StoriesCreators } from "../../Helpers/index";

const StoriesCard = (props) => {
	const { id, title, thumbnail, originalIssue, creators } = props.storiesItem;
	const retrievedCreators = StoriesCreators(creators);
	const { name, role } = retrievedCreators;

	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6" key={id}>
				<div className="card text-white  bg-dark mb-3">
					<div className="row g-0 align-items-center">
						<div className="col-md-4">
							<ComicsProfileImage srcText={thumbnail} alternativeText={title} />
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{originalIssue.name}</h5>
								<h6 className="card-subtitle mb-2 text-warning">
									Issue ID # <span className="text-danger">{id}</span>
								</h6>

								<p className="card-text">
									<small>
										<b className="text-info">Story:</b>{" "}
										{title !== "" ? title : "--"}.
									</small>
								</p>

								<p className="card-text">
									<small className="text-muted">
										<b className="text-success small">Creator(s):</b> {name}{" "}
										working as {role}.
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default StoriesCard;
