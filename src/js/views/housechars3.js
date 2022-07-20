import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useParams } from "react-router-dom";

export const Housechars3 = () => {
    const {store,actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
		actions.getCharacterHufflepuff();
	}, []);
    return(
        <div className=" container-fluid row justify-content-center me-0">
           
                {store.characters3.map((value,position)=>{
                    return (
                    <div className="card col-4 text-center m-1 cardgryffback">
                    <h5 className="card-title text-light">
                    <p key={position}>{value.name}</p>
                    <Link to={"/character3/" + position}>Ver Perfil</Link>
                    </h5></div>)
                })}
                

        </div>
    );
}