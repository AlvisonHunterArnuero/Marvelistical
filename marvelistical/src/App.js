import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { CSSTransition } from "react-transition-group";
import NavBar from "./components/navBar";
import LoadingSpinner from "../src/components/loader";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="container-fluid">
					<div className="row">
						<NavBar />
						<Suspense fallback={<LoadingSpinner />}>
							<Switch>
								{routes.map((route, idx) => {
									return (
										route.component && (
											<Route
												key={idx}
												path={route.path}
												exact={route.exact}
												name={route.name}
												render={(props) => {
													return (
														<CSSTransition timeout={300} classNames="fade">
															<route.component {...props} />
														</CSSTransition>
													);
												}}
											/>
										)
									);
								})}

								{/* <Route
									exact={routes[0].exact}
									path={routes[0].path}
									component={routes[0].component}
								/>

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
								</Route> */}
							</Switch>
						</Suspense>
					</div>
				</div>
			</Router>
		</div>
	);
}
export default App;
