import React, { useContext } from "react";
import { StoreContext } from "../../context";

const SearchBar = () => {
	const storeCnxtIntance = useContext(StoreContext);

	const handleChange = (e) => {
		storeCnxtIntance.setSearch(e.target.value);
	};

	return (
		<>
			<div className="search-bar-pos mt-1">
				<div className="row">
					<div className="col-12">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Search..."
								aria-label="Search..."
								aria-describedby="basic-addon2"
								onChange={handleChange}
							/>
							<span className="input-group-text" id="basic-addon2">
								<i className="fas fa-search"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
