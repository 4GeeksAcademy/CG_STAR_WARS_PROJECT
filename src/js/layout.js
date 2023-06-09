import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Vehicles } from "./vehicles";
import { CharacterDetail } from "./views/characterDetail";
import { PlanetDetail } from "./views/planetDetail"; 
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { VehicleDetail } from "./views/vehicleDetail";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="body_total">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/characterdetail/:id" element={<CharacterDetail />} />
						<Route path="/planetdetail/:id" element={<PlanetDetail />} />
						<Route path="/vehicledetail/:id" element={<VehicleDetail />} />
						<Route path="*" element={<h1>Sorry Young Padawan! This page doesn't exist</h1>} />
					</Routes>
					
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
