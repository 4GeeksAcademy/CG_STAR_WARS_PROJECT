import React from "react";
import "../../styles/home.css";
import Carrousel from "../component/carrousel";

export const Home = () => (
	<div className="body">
		<div className="first_carrousel">
			<div className="row">
				<h1 className="characters_title_home">Characters</h1>
			</div>
			<div className="row">
				<Carrousel />
			</div>
		</div>
		<div className="second_carrousel">
			<div className="row">
				<h1 className="characters_title_home">Planets</h1>
			</div>
			<div className="row">
				<Carrousel />
			</div>
		</div>
	</div>
);
