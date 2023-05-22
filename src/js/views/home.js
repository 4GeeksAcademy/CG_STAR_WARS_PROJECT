import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import Carrousel from "../component/carrousel";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const {store} = useContext(Context)
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
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-text">{characters.name}</h5>
												<Link to= {`/characterdetail/${characters.uid}`} className="btn btn-outline-warning">
													Learn more!
												</Link>
												<button className="like btn-outline-warning"> ♥ </button>
											</div>
										</div>
								)
							}
						)}
					</div>
				</div>
			</div>
			
			<div className="second_carrousel">
				<div className="row">
					<Link className="title_home" to= {`planets/`}>Planets</Link>
				</div>
				<div className="row">
					<div className="carousel-item d-flex">
						{store.planets.map((planets, index) => {
								return (
										<div className="card col 4 col-md-3" key={index}>
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-text">{planets.name}</h5>
												<a href="#" className="btn btn-outline-warning">Learn more!</a>
												<button className="like btn-outline-warning"> ♥ </button>
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
