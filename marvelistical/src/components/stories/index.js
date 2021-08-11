import React, { useEffect, useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import StoryCard from "../storyCard";
import MainHeader from "../mainHeader";
import SearchBar from "../searchBar";

const Stories = () => {
	const cnxtStoriesInstance = useContext(StoreContext);

	useEffect(
		() => {
			cnxtStoriesInstance.fetchStoriesData();
		},
		// eslint-disable-next-line
		cnxtStoriesInstance,
		[]
	);

	const stories = cnxtStoriesInstance.storiesData || {};
	const filteredStories =
		cnxtStoriesInstance.search.length === 0
			? stories
			: stories.filter((story) =>
					story.title
						.toLowerCase()
						.includes(cnxtStoriesInstance.search.toLowerCase())
			  );

	return (
		<Fragment>
			<MainHeader
				sectionTitle="Marvel Stories List"
				sectionText="What's Coming To Marvel Unlimited This Month"
			/>
			<SearchBar className="my-4" />

			<div className="row justify-content-between my-4 pb-4">
				{cnxtStoriesInstance.isLoaded === false ? (
					<div className="d-flex align-items-center justify-content-center">
						<strong className="text-warning">LOADING...</strong>
						<div className="spinner-grow text-warning" role="status">
							<span className="visually-hidden">Loading...</span>{" "}
						</div>
					</div>
				) : (
					filteredStories.map((story, i) => (
						<StoryCard key={i} storiesItem={story} />
					))
				)}
			</div>
		</Fragment>
	);
};

export default Stories;
