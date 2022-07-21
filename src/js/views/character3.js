import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import hufflepuff from "../../img/hufflepuff.webp"
import { useParams } from "react-router-dom";

export const Character3 = () => {
    	const { store, actions } = useContext(Context);
    	const params = useParams();
    return (
        <div>

            <div className="card mb-3 hufflecharcard huffle container">
            <div className="row g-0">
                <div className="col-md-4 container huffle ">
                <img src={(store.characters3[params.theid].image? store.characters3[params.theid].image : hufflepuff)} className="cardpersonal" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body huffle">
                    <h5 className="card-title text-light h3" >Name: {(store.characters3[params.theid].name)}</h5>
                    <p className="card-text text-light">Species: {(store.characters3[params.theid]?.species)}</p>
                    <p className="card-text text-light">Gender: {(store.characters3[params.theid]?.gender)}</p>
                    <p className="card-text text-light">House: {(store.characters3[params.theid]?.house)}</p>
                    <p className="card-text text-light">Wizard: {(store.characters3[params.theid]?.wizard? "Yes" : "No")}</p>
                    <p className="card-text text-light">Ancestry: {(store.characters3[params.theid]?.ancestry)}</p>
                    <p className="card-text text-light">Eye Colour: {(store.characters3[params.theid]?.eyeColour)}</p>
                    <p className="card-text text-light">Hair Colour: {(store.characters3[params.theid]?.hairColour)}</p>
                    <p className="card-text text-light">Patronus: {(store.characters3[params.theid].patronus || " "? store.characters3[params.theid].patronus: unknown )}</p>
                    <p className="card-text text-light">Alive: {(store.characters3[params.theid]?.alive? "Yes" : "No" )}</p>
                    <p className="card-text text-light">Actor: {(store.characters3[params.theid]?.actor)}</p>
                    <p className="card-text text-light"><small className="text-muted"></small></p>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
}