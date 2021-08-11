import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="container-fluid my-4">
			<div className="row justify-content-center my-4">
				<div className="col-12 col-sm-6 col-md-4">
					<p className="display-2 text-info lead">404 PAGE NOT FOUND</p>
					<h2 className="text-warning">You are not worthy</h2>
					<p className="text-muted lead">
						Check that you typed the address correctly, go back to your previous
						page or try using our site search to find something specific.
					</p>
					<Link className="btn btn-outline-warning" to="/">
						<i className="fas fa-home"></i> Back to Home
					</Link>
				</div>
				<div className="col-12 col-sm-6 col-md-8">
					<img
						src={process.env.PUBLIC_URL + "/assets/avengers.png"}
						className="w-75 card-img-top"
						alt="..."
					/>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
