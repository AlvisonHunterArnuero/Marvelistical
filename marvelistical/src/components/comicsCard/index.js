import React from "react";
import ComicsProfileImage from "../comicsProfileImage";

const ComicsCard = (props) => {
	const { id, title, thumbnail, pageCount, creators } = props.comicsItem;
	const { name, role } = creators.items[0] || "Not available";

	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 my-1" key={id}>
				<div className="card text-white bg-dark mb-3">
					<div className="row g-0 align-items-center">
						<div className="col-md-4">
							<ComicsProfileImage
								srcText={thumbnail.path}
								alternativeText={title}
							/>
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<h6 className="card-subtitle mb-2 text-warning">
									Issue ID # <span className="text-danger">{id}</span>
								</h6>
								<p className="card-text text-muted">
									This comic has been created by {name ? name : "Joe Doe"}, who
									worked as a {role ? role : "fake chief editor"} for Marvel
									Comics for many years.
								</p>
								<p className="card-text">
									<small className="text-info">
										Total Pages: {pageCount !== 0 ? pageCount : "--"}
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

export default ComicsCard;
