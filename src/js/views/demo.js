import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
				<div className="card_demo col 4 col-md-3">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text">Gender:</p>
						<p className="card-text">Hair color:</p>
						<p className="card-text">Skin color:</p>
						<a href="#" className="btn btn-outline-warning">Learn more!</a>
						<button className="like_demo btn-outline-warning"> ♥ </button>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn_back_home btn-outline-warning">Back home</button>
			</Link>
		</div>
	);
};
