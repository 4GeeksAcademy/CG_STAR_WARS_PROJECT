import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = props => {
	const params = useParams();
	const {actions, store} = useContext(Context)

	useEffect (() => {
		actions.getvehicle(params.id)
	}, [])

		return store.vehicle ? (
		<div className="body_total">
			<div className="central">
				<div className="row">
					<h1 className="title_character_detail">{store.vehicle.name}</h1>
				</div>
				<div className="row">
					<div className="visual_character_detail">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<button className="like btn-outline-warning"> ♥ </button>
						</div>
					</div>
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
