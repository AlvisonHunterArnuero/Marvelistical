import React from "react";
import ComicsProfileImage from "../comicsProfileImage";

const ComicsCard = (props) => {
	const { id, title, thumbnail, pageCount, creators } = props.comicsItem;
	const { items } = props.comicsItem.creators;
	const { name } = items || "Not available";
	console.log("creator", name);
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 my-1" key={id}>
				<div className="card border-warning text-white bg-dark mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<ComicsProfileImage
								srcText={thumbnail.path}
								alternativeText={title}
							/>
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									Created by:{creators.items.name}
								</h6>
								<p className="card-text">
									This issue, which Id number is {id}, has been created by{" "}
									{name}, who was the
									{creators.items.role}
								</p>
								<p className="card-text">
									<small className="text-info">Total Pages: {pageCount}</small>
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

export default ComicsCard;
