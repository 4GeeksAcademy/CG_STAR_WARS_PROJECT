import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = props => {
	const params = useParams();
	const {actions, store} = useContext(Context)

	useEffect (() => {
		actions.getCharacter(params.id)
	}, [])

		return store.character ? (
		<div className="body_total">
			<div className="central">
				<div className="row">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${store.character.uid}.jpg`} className="card-img-top col 6 col-md-6" alt="..." />
					<h1 className="title_character_detail col 6 col-md-6">{store.character.name}</h1>
				</div>
				<div className="row">
					
				</div>
			</div>
			<Link to={"/"}>
				<button className="btn_back_home btn-outline-warning" href="#" role="button">
					Back home
				</button>
			</Link>
		</div>
	): "Cargando....";
};

