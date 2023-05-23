import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const params = useParams();
	return (
		<div className="body">
			<div className="first_carrousel">
				<div className="row">
					<Link className="title_home" to={`characters/`} >Characters</Link>
				</div>
				<div className="row">
					<div className="carousel-item d-flex">
						{store.characters.map((characters, index) => {
								return (
									<div className="card col 4 col-md-3" key={index}>
										<img src={`https://starwars-visualguide.com/assets/img/characters/${index +1}.jpg`} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-text">{characters.name}</h5>
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
				</div>
			</div>
			<div className="rest_carrousels">
				<div className="row">
					<Link className="title_home" to= {`planets/`}>Planets</Link>
				</div>
				<div className="row">
					<div className="carousel-item d-flex">
						{store.planets.map((planets, index) => {
							return (
								<div className="card col 4 col-md-3" key={index}>
									<img src={ index >0 ? `https://starwars-visualguide.com/assets/img/planets/${index +1}.jpg` : "https://zupimages.net/up/15/53/4ipd.png"} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-text">{planets.name}</h5>
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
				</div>
			</div>
			<div className="rest_carrousels">
				<div className="row">
					<Link className="title_home" to= {`vehicles/`}>Vehicles</Link>
				</div>
				<div className="row">
					<div className="carousel-item d-flex">
						{store.vehicles.map((vehicles, index) => {
							return (
								<div className="card col 4 col-md-3" key={index}>
									<img src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-text">{vehicles.name}</h5>
										<Link to= {`/vehicledetail/${vehicles.uid}`} className="btn btn-outline-warning">
												Learn more!
										</Link>
										<button onClick={() => {
											actions.setFavoritesVehicles(vehicles)
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
				</div>
			</div>
		</div>
	);
}
