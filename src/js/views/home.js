import React, {useContext} from "react";
import "../../styles/home.css";
import Carrousel from "../component/carrousel";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context)
	return (
		<div className="body">
			<div className="first_carrousel">
				<div className="row">
					<h1 className="title_home">Characters</h1>
				</div>
				<div className="row">
					<div className="carousel-item d-flex">
						{store.characters.map((characters, index) => {
								return (
										<div className="card col 4 col-md-3" key={index}>
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-text">{characters.name}</h5>
												<p className="card-text">{characters.gender}</p>
												<p className="card-text">{characters.hair_color}</p>
												<p className="card-text">{characters.skin_color}</p>
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
			
			<div className="second_carrousel">
				<div className="row">
					<h1 className="title_home">Planets</h1>
				</div>
				<div className="row">
					
				</div>
			</div>
		</div>
	);
}
