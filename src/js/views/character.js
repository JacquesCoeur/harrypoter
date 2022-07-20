import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

import { useParams } from "react-router-dom";

export const Character = () => {
    	const { store, actions } = useContext(Context);
    	const params = useParams();
    return (
        <div>

            <div className="card mb-3 gryffcharcard gryff container">
            <div className="row g-0">
                <div className="col-md-4 container gryff ">
                <img src={(store.characters[params.theid].image)} className="cardpersonal" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body gryff">
                    <h5 className="card-title text-light h3" >Name: {(store.characters[params.theid].name)}</h5>
                    <p className="card-text text-light">Species: {(store.characters[params.theid]?.species)}</p>
                    <p className="card-text text-light">Gender: {(store.characters[params.theid]?.gender)}</p>
                    <p className="card-text text-light">House: {(store.characters[params.theid]?.house)}</p>
                    <p className="card-text text-light">Wizard: {(store.characters[params.theid]?.wizard? "Yes" : "No")}</p>
                    <p className="card-text text-light">Ancestry: {(store.characters[params.theid]?.ancestry)}</p>
                    <p className="card-text text-light">Eye Colour: {(store.characters[params.theid]?.eyeColour)}</p>
                    <p className="card-text text-light">Hair Colour: {(store.characters[params.theid]?.hairColour)}</p>
                    <p className="card-text text-light">Patronus: {(store.characters[params.theid].patronus || " "? store.characters[params.theid].patronus: unknown )}</p>
                    <p className="card-text text-light">Alive: {(store.characters[params.theid]?.alive? "Yes" : "No" )}</p>
                    <p className="card-text text-light">Actor: {(store.characters[params.theid]?.actor)}</p>
                    <p className="card-text text-light"><small className="text-muted"></small></p>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
}