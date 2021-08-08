import React, { useContext } from "react";
import { StoreContext } from "../../context";

const StoriesCard = () => {
	return (
		<div className="card mb-2 w-50">
			<div className="row">
				<div className="col-md-4">
					<img
						src="https://i.annihil.us/u/prod/marvel/i/mg/8/90/610411f9eaac2/clean.jpg"
						className="img-fluid rounded-start"
						alt="..."
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Extreme Carnage: Lasher (2021) #1</h5>
						<p className="card-text">
							WITNESS THE BIRTH OF A NEW SYMBIOTE! Four issues into the Carnage
							event of the summer and the bodies just keep piling up – including
							some of the Venomaniacs the Mighty Marveldom know and love! But
							now is not a time to mourn for fallen heroes (or their symbiotes).
							CARNAGE is on the loose, and he's building an army…
						</p>
						<p className="card-text">
							<small class="text-muted">Published: August 04, 2021</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Stories = () => {
	const cnxtStoriesInstance = useContext(StoreContext);
	cnxtStoriesInstance.setSearch("");

	return (
		<div>
			<h1 className="display-3 hero-name">Stories</h1>
			<div className="row justify-content-between my-4 pb-4">
				<StoriesCard />
				<StoriesCard />
				<StoriesCard />
			</div>
		</div>
	);
};

export default Stories;
