import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = props => {
	const params = useParams();
	const {actions, store} = useContext(Context)

	useEffect (() => {
		actions.getVehicle(params.id)
	}, [])
	return store.vehicle ? (
		<div className="body_total">
			<div className="central">
				<div className="row_superior_detalle">
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="image_detalle col6 col-md-6" alt="..." />
					<div className="descripcion col6 col-md-6">
						<h1 className="titulo_detalle">{store.vehicle.name}</h1>
						<p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					</div>
				</div>
			</div>
			<div className="row_inferior_detalle">
				<div className="row">
					<p className="col2 col-md-2">Passengers</p>
					<p className="col2 col-md-2">Cost in credits</p>
					<p className="col2 col-md-2">Crew</p>
					<p className="col2 col-md-2">Manufacturer</p>
					<p className="col2 col-md-2">Passengers</p>
					<p className="col2 col-md-2">Max. speed</p>
				</div>
				<div className="row">
					<p className="col2 col-md-2">{store.vehicle.passengers}</p>
					<p className="col2 col-md-2">{store.vehicle.cost_in_credits}</p>
					<p className="col2 col-md-2">{store.vehicle.crew}</p>
					<p className="col2 col-md-2">{store.vehicle.manufacturer}</p>
					<p className="col2 col-md-2">{store.vehicle.passengers}</p>
					<p className="col2 col-md-2">{store.vehicle.max_atmosphering_speed}</p>
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
