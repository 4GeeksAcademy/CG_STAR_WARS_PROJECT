import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Carrousel = () => {
    const {store} = useContext(Context);
        return (
            <div className="carousel-item d-flex">
                <div className="card col 4 col-md-3">
                    <img src="..." className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">{characters.name}</h5>
                            <p className="card-text">{characters.gender}</p>
                            <p className="card-text">{characters.hair_color}</p>
                            <p className="card-text">{characters.skin_color}</p>
                            <a href="#" className="btn btn-outline-warning">Learn more!</a>
                            <button className="like btn-outline-warning"> ♥ </button>
                    </div>
                </div>
            </div>
        )
}

export default Carrousel;