import logo from "../../marvel_logo.png";
const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src={logo}
							alt=""
							width="32"
							height="26"
							className="d-inline-block align-text-top"
						/>
						Marvelistical
					</a>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
