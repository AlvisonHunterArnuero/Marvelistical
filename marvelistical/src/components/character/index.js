const Characters = (props) => {
	return (
		<div className="col-3">
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">I am {props.hero}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
						fringilla, diam eget rutrum molestie, odio diam consectetur felis, a
						commodo nisl massa vel urna.
					</p>
					<a href="#" className="btn btn-primary">
						View Hero Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default Characters;
