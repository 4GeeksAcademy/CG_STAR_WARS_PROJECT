import React, { useState, useEffect, useContext } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{store.characters.map((characters, index) => {
					return (
						<div className="card_demo col 4 col-md-3" key={index}>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${index +1}.jpg`} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 className="card-title">{characters.name}</h5>
								<Link to= {`/characterdetail/${characters.uid}`} className="btn btn-outline-warning">
									Learn more!
								</Link>
								<button onClick={() => {
									actions.setFavoritesCharacters(characters)
								}} 
								className="like btn-outline-warning"
								> 
								♥ 
								</button>
							</div>
						</div>
					)
				}
				)}
			</div>
			<Link to="/">
				<button className="btn_back_home btn-outline-warning">Back home</button>
			</Link>
		</div>
	);
};
