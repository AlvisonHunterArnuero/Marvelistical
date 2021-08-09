import React from "react";
import ComicsProfileImage from "../comicsProfileImage";

const StoriesCard = (props) => {
	console.log("Que trae", props);
	const { id, title, thumbnail, originalIssue, creators } = props.storiesItem;
	const { name, role } = creators.items[0] || "Not available";

	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 my-1" key={id}>
				<div className="card text-white bg-dark mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<ComicsProfileImage srcText={thumbnail} alternativeText={title} />
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{originalIssue.name}</h5>
								<h6 className="card-subtitle mb-2 text-warning">
									Issue ID # <span className="text-danger">{id}</span>
								</h6>
								<p className="card-text text-muted">
									Created by: {name ? name : "Joe Doe"} | Role:{" "}
									{role ? role : "fake chief editor"}.
								</p>
								<p className="card-text">
									<small>
										<b className="text-info">Story:</b>{" "}
										{title !== "" ? title : "--"}.
									</small>
								</p>
								<button type="button" className="btn btn-outline-warning">
									Read More..
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default StoriesCard;