import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = props => {
	const params = useParams();
	const {actions, store} = useContext(Context)
	useEffect (() => {
		actions.getCharacter(params.id)
	})
	return (
		<div className="body_total">
			<h1 className="title_character_detail">
				Hola mundo! {params.id} 
			</h1>
			<Link to={"/"}>
				<button className="btn_back_home btn-outline-warning" href="#" role="button">
					Back home
				</button>
			</Link>
		</div>
	);
};

