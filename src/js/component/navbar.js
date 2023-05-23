import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store} = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" className="logo"/>
			</Link>
			<div className="dropdown">
				<button className="btn btn-outline-warning dropdown-toggle favoritos" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					{
						store.favorites.map((character)=> {
							return (
							<li>{character.name} <i className="fas fa-trash"></i></li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};
