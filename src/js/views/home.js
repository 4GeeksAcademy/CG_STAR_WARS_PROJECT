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
					{store.characters.map((characters) => {
							return (
								<Carrousel />
							)
						}
					)}
				</div>
			</div>
			<div className="second_carrousel">
				<div className="row">
					<h1 className="title_home">Planets</h1>
				</div>
				<div className="row">
					<Carrousel />
				</div>
			</div>
		</div>
	);
}
