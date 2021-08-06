import { Link } from "react-router-dom";
import logo from "../../marvel_logo.png";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar fixed-bottom navbar-dark bg-dark">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img
							src={logo}
							alt=""
							width="32"
							height="26"
							className="d-inline-block align-text-top"
						/>
						Marvelistical
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/characters">Characters</Link>
							</li>
							<li className="nav-item">
								<Link to="/comics">Comics</Link>
							</li>
							<li className="nav-item">
								<Link to="/stories">Stories</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
