import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" className="logo"/>
			</Link>
			<div className="dropdown">
				<button className="btn btn-outline-light dropdown-toggle favoritos" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">Action</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
