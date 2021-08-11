import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavBar from "./components/navBar";
import CharactersList from "./components/charactersList";
import CharacterByIdNumber from "./components/characterByIdNumber";
import HeroesCarousel from "./components/heroesCarousel";
import Comics from "./components/comics";
import Stories from "./components/stories";
import PageNotFound from "./components/pageNotFound";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="container-fluid">
					<div className="row">
						<NavBar />
						<Switch>
							<Route exact path="/" component={HeroesCarousel} />

							<Route exact path="/characters">
								<CSSTransition timeout={300} classNames="fade">
									<CharactersList />
								</CSSTransition>
							</Route>
							<Route exact path="/characters/:id">
								<CSSTransition timeout={300} classNames="fade">
									<CharacterByIdNumber />
								</CSSTransition>
							</Route>
							<Route path="/comics">
								<CSSTransition timeout={300} classNames="fade">
									<Comics />
								</CSSTransition>
							</Route>
							<Route path="/stories">
								<CSSTransition timeout={300} classNames="fade">
									<Stories />
								</CSSTransition>
							</Route>
							<Route path="*">
								<CSSTransition timeout={300} classNames="fade">
									<PageNotFound />
								</CSSTransition>
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}
export default App;
