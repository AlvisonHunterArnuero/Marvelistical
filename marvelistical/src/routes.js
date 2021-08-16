import React from "react";

const HeroesCarousel = React.lazy(() => import("./components/heroesCarousel"));
const CharactersList = React.lazy(() => import("./components/charactersList"));
const CharacterByIdNumber = React.lazy(() =>
	import("./components/characterByIdNumber")
);

const Stories = React.lazy(() => import("./components/stories"));
const Comics = React.lazy(() => import("./components/comics"));
const PageNotFound = React.lazy(() => import("./components/pageNotFound"));

const routes = [
	{
		path: "/",
		exact: true,
		name: "Heroes Carousel",
		component: HeroesCarousel,
	},

	{
		path: "/characters",
		exact: true,
		name: "Characters List",
		component: CharactersList,
	},
	{
		path: "/characters/:id",
		exact: true,
		name: "Character Details",
		component: CharacterByIdNumber,
	},
	{ path: "/stories", name: "Stories", component: Stories },
	{ path: "/comics", name: "Comics", component: Comics },
	{ path: "*", exact: true, name: "Page Not Found", component: PageNotFound },
];

export default routes;
