import React, { useState, useEffect, useContext } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{store.planets.map((planets, index) => {
					return (
						<div className="card_demo col 4 col-md-3" key={index}>
							<img src={ index >0 ? `https://starwars-visualguide.com/assets/img/planets/${index +1}.jpg` : "https://zupimages.net/up/15/53/4ipd.png"} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 className="card-title">{planets.name}</h5>
								<Link to= {`/planetdetail/${planets.uid}`} className="btn btn-outline-warning">
									Learn more!
								</Link>
								<button onClick={() => {
									actions.setFavoritesPlanets(planets)
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
