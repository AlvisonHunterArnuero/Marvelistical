import React, { useEffect, useContext, Fragment } from "react";
import { StoreContext } from "../../context";
import StoryCard from "../storyCard";
import MainHeader from "../mainHeader";
import SearchBar from "../searchBar";
import LoadingSpinner from "../loader";
const Stories = () => {
	const cnxtStoriesInstance = useContext(StoreContext);

	useEffect(
		() => {
			cnxtStoriesInstance.fetchStoriesData();
		},
		// eslint-disable-next-line
		[cnxtStoriesInstance.search]
	);

	const stories = cnxtStoriesInstance.storiesData;
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
					<LoadingSpinner />
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
