import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import CharactersList from "./components/charactersList";
import HeroesCarousel from "./components/heroesCarousel";
import Comics from "./components/comics";
import Stories from "./components/stories";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="container-fluid">
					<div className="row">
						<NavBar />
						<Switch>
							<Route path="/" exact component={HeroesCarousel} />
							<Route path="/characters">
								<CharactersList />
							</Route>
							<Route path="/comics">
								<Comics />
							</Route>
							<Route path="/stories">
								<Stories />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}
export default App;
