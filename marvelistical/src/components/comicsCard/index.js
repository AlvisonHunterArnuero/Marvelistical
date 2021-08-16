import React from "react";
import ComicsProfileImage from "../comicsProfileImage";

const ComicsCard = (props) => {
	const {
		id,
		title,
		thumbnail,
		pageCount,
		creators,
		price,
		diamondCode,
		issueNumber,
	} = props.comicsItem;

	const { name, role } = creators.items[0] || {
		name: "Richard Miles",
		role: "Fake Chief Editor",
	};

	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 my-1" key={id}>
				<div className="card text-white bg-dark mb-3">
					<div className="row g-0 align-items-center">
						<div className="col-md-5">
							<ComicsProfileImage
								srcText={thumbnail.path}
								alternativeText={title}
							/>
						</div>

						<div className="col-md-7">
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<h6 className="card-subtitle mb-2 text-warning">
									Issue ID # <span className="text-danger">{id}</span>
								</h6>
								<p className="card-text text-muted">
									This comic has been created by{" "}
									<span className="text-success">
										{name ? name : "Joe Doe"}
									</span>
									, who worked as{" "}
									<span className="text-danger">
										{role ? role : "fake chief editor"}
									</span>{" "}
									for Marvel Comics for many years.
								</p>
								<p className="card-text">
									<small className="text-secondary">
										Issue Number: {issueNumber !== 0 ? issueNumber : "--"} |{" "}
										Diamond Code:{" "}
										<span className="text-danger">{diamondCode}</span>
									</small>
								</p>
								<p className="card-text">
									<small className="text-secondary">
										Pages:{" "}
										<span className="text-primary">
											{pageCount !== 0 ? pageCount : "--"}
										</span>{" "}
										| Printed Price:
										<span className="text-success">
											{price !== undefined ? price[0].price : "--"}
										</span>
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
