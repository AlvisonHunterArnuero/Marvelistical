import logo from "./marvel_logo.png";
import "./App.css";

const MainNav = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src={logo}
							alt=""
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>
						Marvelistical


					</a>
				</div>
			</nav>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<MainNav />
			<h1 class="display-4">Enter The World Of Marvelistical</h1>
		</div>
	);
}

export default App;
