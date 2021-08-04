const SearchBar = () => {
	return (
		<div className="search-bar-pos">
			<div className="row">
				<div className="col-12">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Search..."
							aria-label="Search..."
							aria-describedby="basic-addon2"
						/>
						<span className="input-group-text" id="basic-addon2">
							<button type="button" className="btn btn-outline-primary">
								Fetch Hero
							</button>
						</span>
					</div>
				</div>
			</div>

			<div className="row justify-content-end">
				<div className="col-auto">
					{" "}
					<span className="mx-auto lead text-secondary">Filter by: </span>
					<div
						className="btn-group"
						role="group"
						aria-label="Basic radio toggle button group"
					>
						<input
							type="radio"
							className="btn-check"
							name="btnradio"
							id="btnradio1"
							autoComplete="off"
						/>
						<label className="btn btn-outline-primary" htmlFor="btnradio1">
							Name
						</label>

						<input
							type="radio"
							className="btn-check"
							name="btnradio"
							id="btnradio2"
							autoComplete="off"
						/>
						<label className="btn btn-outline-primary" htmlFor="btnradio2">
							Comics
						</label>

						<input
							type="radio"
							className="btn-check"
							name="btnradio"
							id="btnradio3"
							autoComplete="off"
						/>
						<label className="btn btn-outline-primary" htmlFor="btnradio3">
							Stories
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
